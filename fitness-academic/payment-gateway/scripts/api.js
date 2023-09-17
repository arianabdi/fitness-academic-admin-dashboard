let baseUrl = `http://80.211.194.23:30112/api`;

function fetchData({page, limit, totalPages, filter}){
    // Fetch data using Axios


    axios.get(`${baseUrl}/package?page=${page}&limit=${limit}${filter ? '&'+filter : ''}`)
    .then(response => {
        data = response.data.data.packages; // Assuming data is an array of objects
        console.log('resp',response.data.data )
        _renderItem(data); // Populate the table with the fetched data
       

        totalItems = response.data.data.totalItems;
        totalPages = Math.ceil(totalItems / limit);
        generatePagination(page, totalPages);

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function newItem(body){

    axios.post(`${baseUrl}/package`, body)
    .then(response => {
        
        console.log('newItem', response)
        // Check if the request was successful
      if (response.status === 200) {
        // Redirect to the "package list" page upon success
        window.location.href = '../package/table.html'; // Replace with your actual URL
      } else {
        alert('Failed to create the package.'); // Handle other status codes if needed
      }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function deleteItem({itemId}){
    axios.delete(`${baseUrl}/payment-gateway/${itemId}`)
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
