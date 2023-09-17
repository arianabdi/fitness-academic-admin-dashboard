



var form = document.getElementById("loginForm");
form.addEventListener("change", function(event) {
  let value = event.target.value;
  let label = event.target.dataset.label;

console.log('change', label, value);
  formData[label] = value;

});




document.getElementById('loginButton').addEventListener('click', async()=>{
    console.log(formData);
    await login()
});