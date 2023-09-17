

function showToast({title, message, component}){
    var toast = new bootstrap.Toast(document.getElementById('toast'));
    
    if(title){
        $('#toast-title').text(title);
    }

    if(message){
        $('#toast-message').text(message);
    }

    if(component){
        $('#toast-message').html(component);
    }
    toast.show();
}





