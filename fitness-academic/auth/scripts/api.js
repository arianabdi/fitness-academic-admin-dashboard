let baseUrl = `http://81.2.236.195:30112/api`;
const access_token = localStorage.getItem("token");
// let headers = {Authorization: `bearer ${access_token}`}
var formData = {
    email: '',
    password: ''
}

async function login(){

    // setIsLoading(true);
    try {
        const response = await axios.post(`${baseUrl}/user/login`, formData) 
        if(response.status === 200){
            localStorage.setItem('token', response.data.accessToken);
            window.location.href = '../dashboard';
        }
    } catch (error) {
        showToast({
            title: 'ارور', 
            message:`کد ${error.response.data.statusCode}:  ${error.response.data.message}`
          });
    }
   
 
    
    
}




