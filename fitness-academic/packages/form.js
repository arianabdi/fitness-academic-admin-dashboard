
document.getElementById('submit-btn').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get values from form inputs
  const title = document.getElementById('title').value;
  const slug = document.getElementById('slug').value;
  const description = document.getElementById('description').value;
  const level = document.getElementById('level').value;
  const category = document.getElementById('category').value;
  

  // Validation using regular expressions
  const titleRegex = /^[A-Za-z\s]+$/;
  const slugRegex = /^[A-Za-z0-9_]+$/;

  if (!titleRegex.test(title)) {
    alert('Title should contain only letters and spaces with no underline or numbers.');
    return;
  }

  if (!slugRegex.test(slug)) {
    alert('Slug should contain only letters, numbers, and underscores.');
    return;
  }

  if (description.trim() === '') {
    alert('Description cannot be empty.');
    return;
  }

  const form = {
    title: title,
    slug: slug,
    description: description,
    level: level,
    category: category
  }
  // If all validations pass, you can proceed with further actions or submission
  console.log('form', form, `${API_URL}/exercise`)


  // Perform Axios POST request
  axios.post(`${API_URL}/exercise`, form)
  .then(response => {
    // Check if the request was successful
    if (response.status === 200) {
      // Redirect to the "exercise list" page upon success
      window.location.href = 'exercise_list.html'; // Replace with your actual URL
    } else {
      alert('Failed to create the exercise.'); // Handle other status codes if needed
    }
  })
  .catch(function (error) {
    console.error('Error:', error);
    alert('An error occurred while creating the exercise.');
  });








  // Reset the form
  // document.getElementById('myForm').reset();
});
