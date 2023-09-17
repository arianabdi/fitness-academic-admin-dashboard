
var isLoading = true;

// Function to print the form data as a JSON object
function printData() {
    console.log('exercisesFormData', JSON.stringify(exercisesFormData, null, 2));
    console.log('dietFormData', JSON.stringify(dietFormData, null, 2));

    // Get the URL parameters
    var urlParams = new URLSearchParams(window.location.search);

    // Get the value of the "programId" parameter
    var programId = urlParams.get("programId");

    const body ={
      exercises: exercisesFormData,
      diet: dietFormData
    }

    updateItem(programId, body)

}



// Event listener for the "Print Data" button
document.getElementById('printDataBtn').addEventListener('click', printData);

