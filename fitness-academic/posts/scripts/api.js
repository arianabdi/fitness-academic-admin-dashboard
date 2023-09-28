let baseUrl = `http://81.2.236.195:30112/api`;
const access_token = localStorage.getItem("token");
let headers = {Authorization: `bearer ${access_token}`}

function fetchData({page, limit, totalPages, filter}){
  
    setIsLoading(true);
    axios.get(`${baseUrl}/posts?page=${page}&limit=${limit}${filter ? '&'+filter : ''}`, {headers: {...headers}})
    .then(response => {
        data = response.data.data.posts; // Assuming data is an array of objects
        console.log('resp',response.data.data )
        _renderItem(data); // Populate the table with the fetched data
       

        totalItems = response.data.data.totalItems;
        totalPages = Math.ceil(totalItems / limit);
        generatePagination(page, totalPages);
        setIsLoading(false);

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function newItem(body){
    console.log('body', body)
    axios.post(`${baseUrl}/posts`, body, {headers: {...headers, contentType: "multipart/form-data "}})
    .then(response => {
        console.log('newItem', response)
        // Check if the request was successful
      if (response.status === 200) {
        // Redirect to the "package list" page upon success
        window.location.href = '../posts/table.html'; // Replace with your actual URL
      } else {
        alert('Failed to create the Post.'); // Handle other status codes if needed
      }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function deleteItem({itemId}){
    axios.delete(`${baseUrl}/posts/${itemId}`,{headers: {...headers}})
    .then(response => {
        console.log('deleteItem', response)
        if(response.status === 200){
            fetchData({
                page: page,
                limit: limit.value,
                totalPages: totalPages,
                filter: filter
              });
              
            closeModal()
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}


function closeModal() {
    const modal = document.getElementById('modal18');

    // Check if the modal element exists before attempting to close it
    if (modal) {
      $(modal).modal('hide');
    }
  }
