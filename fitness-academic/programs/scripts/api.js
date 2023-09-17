let baseUrl = `http://80.211.194.23:30112/api`;
const access_token = localStorage.getItem("token");
let headers = {Authorization: `bearer ${access_token}`}
let categories = []

function fetchData({page, limit, totalPages, filter}){

    setIsLoading(true);
    axios.get(`${baseUrl}/programs?page=${page}&limit=${limit}${filter ? '&'+filter : ''}`, {headers: {...headers}})
    .then(response => {
        data = response.data.data.programs; // Assuming data is an array of objects
        _renderItem(data); // Populate the table with the fetched data
    
        totalItems = response.data.data.totalItems;
        totalPages = Math.ceil(totalItems / limit);
        generatePagination(page, totalPages);
        
        setIsLoading(false)

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}






async function getAllExerciseCategory(){
    return (await axios.get(`${baseUrl}/category/exercise`, {headers: {...headers}})).data.data.categories;
    // console.log('categories', response);
}





async function getProgram(){
    console.log('getPrograms')
    // Get the URL parameters
    var urlParams = new URLSearchParams(window.location.search);

    // Get the value of the "programId" parameter
    var programId = urlParams.get("programId");


    try {
        const response = await axios.get(`${baseUrl}/programs/${programId}`, {headers: {...headers}});
        const program = response.data.data.program;
        const exercises = program.exercises;
        const diet = program.diet;

        //load specification
        Object.keys(program).map(async item=>{
            if(item !== '_id' && item !== 'diet' && item !== 'exercises' && item !== 'description' && item !== 'number'){
                //this function comes from ./script/manageSpecificationList.js
                await addUserSpeceficationItem(item, program[item])
            }
        })

        //load diet form
        diet.map((item, index) => {
            console.log('diet', item)
            return addItemToDiet(index, item)
        })



        //initialize exercise form
        categories = await getAllExerciseCategory();
        exercises.map((item, index) => {
            return addItemToExercise(index, item, categories)
        })

    } catch (error) {
        console.error('Error fetching data:', error);
    }

}


async function updateItem(programId, program){

    // setIsLoading(true);
    try {
        const response = await axios.patch(`${baseUrl}/programs/${programId}`, program, {headers: {...headers}})
        if (response.status === 200) {
            // Redirect to the "exercise list" page upon success
            window.location.href = '../programs/table.html'; // Replace with your actual URL
          } else {
            console.log(response);
            showToast({
              title: 'ارور', 
              message:`کد ${response.status}:  ${response.message}`
            });
    
          }
    } catch (error) {
        console.log('Error in Update Program', error);
    }
}
  

getAllExerciseCategory();
getProgram();
