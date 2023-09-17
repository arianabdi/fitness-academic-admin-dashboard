


function InputSelector(type, options, slug, row){

    console.log('InputSelector', type, options, slug)
    
    switch(type){
        case 'text':
            return `<input type="text" class="form-control yekan-bakh" placeholder=""  data-index="1" data-label="${slug}">` ;
            break;

        case 'date':
            return `<input type="text" class="form-control yekan-bakh" placeholder=""  data-index="1" data-label="${slug}">` ;
            break;

        case 'textarea':
            return `<textarea class="form-control yekan-bakh" rows="4" data-index="1" data-label="${slug}"  placeholder="توضیحات"></textarea>` ;
            break;


        case 'image':
            return `
            <style>
                .image-preview{
                    width: 200px !important;
                    max-width: unset;
                    height: 200px !important;
                    overflow: hidden;
                    margin: 10px;
                    border-radius: 12px;
                    border: 1px solid #ccc;
                }
            </style>
            <div class="col-sm-12">
                <input class="form-control" type="file"  data-label="${slug}"  accept="image/*" id="image-uploader">
            </div>
            <br>
            <div class="col-sm-12 text-center bg-light d-flex justify-content-center align-items-center">
                <div class="image-preview">
                    <img id="previewImage" src="#" alt="Image Preview" class="img-fluid">
                </div>
            </div>
            <div class="progress ht-2 mg-b-10">
                <div class="progress-bar wd-100p bg-df-2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            `
            break;

        case 'video':
            return `
            <style>
                .video-preview{
                    width: 200px !important;
                    overflow: hidden;
                    margin: 10px;
                    border-radius: 12px;
                    border: 1px solid #ccc;  
                    height: 200px;
                    justify-content: center;
                    display: flex;
                }
                .action-button{
                    background: #fff;
                    padding: 10px 9px 10px 11px;
                    border-radius: 30px;
                    border: 1px solid #ccc;
                    position: absolute;
                }
            </style>
            <div class="col-sm-12">
                <input class="form-control" type="file"  data-label="${slug}" accept="video/*" id="video-uploader">
            </div>
            <br>
            <div class="col-sm-12 text-center bg-light d-flex justify-content-center align-items-center">
                <div class="video-preview">
                    <video id="previewVideo" src="#" alt="Video Preview" class="img-fluid">
                    
                </div>
                <div class="action-button" id="pauseButton"><i data-feather="pause"></i></div>
                <div class="action-button" id="playButton"><i data-feather="play"></i></div>
            </div>
            
            <div class="progress ht-2 mg-b-10">
                <div class="progress-bar wd-100p bg-df-2" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            `
            break;

        case 'select':
            let items = '';
            options.forEach(option => {
                items += `<option class="yekan-bakh" value="${option.value}">${option.label}</option>\n`
            });
            return `
            <select class="form-select yekan-bakh w-100"   data-index="1" data-label="${slug}">
                ${items}
            </select>
            ` ;
            break;
    }
}

function row(items){

    // console.log('row', items);
    // items.forEach(item => {
    //     console.log('item', item);
    // })
    const container = document.createElement('div');
    container.classList.add(`row`)
  
    items.forEach((item, index) => {
        container.innerHTML += `
        <div class="col-sm order-2">
            <div class="row">
                <div class="col-sm-12 order-2 yekan-bakh">${item.title}</div>
                <div class="col-sm-12 order-3">
                    ${InputSelector(item.type, item.options, item.slug, index)}
                </div>
            </div>
        </div>`;

    })

    
    // container.innerHTML = `
    //     <div class="row custom-row ${selected ? 'checked' : ''}">
    //         <div class="col-md-1">
    //             <div class="form-check">
    //                 <input class="form-check-input" type="checkbox" ${selected ? 'checked' : ''} data-index="2" data-label="${slug}" id="checkbox1">
    //             </div>
    //         </div>
    //         <div class="col-md-4">
    //             <label class="form-check-label yekan-bakh" for="checkbox1">${title}</label>
    //         </div>
    //         <div class="col-md-7">
    //             ${InputSelector(type, options, slug)}
    //         </div>
    //     </div>
    // `

return container;
}


const modalContainer = document.getElementById('form-container');


function loadForm(){
    formItems.forEach(_row => {
        let component = row(_row);
        modalContainer.appendChild(component);
        
        const br = document.createElement('br');
        modalContainer.appendChild(br)
    });

    const button = document.createElement('div');
    button.innerHTML = `<button type="button" id="submit" class="btn btn-primary w-100 yekan-bakh">ایجاد تمرین جدید</button>`
    modalContainer.appendChild(button)
}

loadForm()


  


// Detect all changes in this form
var form = document.getElementById("form");
form.addEventListener("change", function(event) {
    let value = event.target.value;
    let index = event.target.dataset.index;
    let label = event.target.dataset.label;

    console.log('chagne', label, value);
    formItems.map(rows => {
        rows.map(item => {

            if(item.slug === label){
                item.value = value;
            }
        })
    })

});



  


// const video = document.getElementById('previewVideo');



// Function to print the form data as a JSON object
function submitForm() {
    const imageInput = document.getElementById('image-uploader');
    const videoInput = document.getElementById('video-uploader');


   
    let formData = new FormData();
    let problems = [];
    formItems.map(rows => {
        rows.map(item => {
            
            if(item.type === 'image'){
                const file = imageInput.files[0];
                if(file){
                    formData.append(item.slug, file);
                }
                
            }else if(item.type === 'video'){
                const file = videoInput.files[0];
                if(file){
                    formData.append(item.slug, file);
                }

            }else{
                formData.append(item.slug, item.value);
            }

            if(item.regex){
                if(!item.regex.test(item.value)){
                    problems.push(item.alert)
                    return;
                }
            }

            if(item.isRequired){
                if(item.value === ""){
                    problems.push(`لطفا فیلد ${item.slug} را پر کنید`)
                }
            }
        })
    })
    if(problems.length > 0){
        // console.log('problems', problems.join('<br>'))
        const ul = problemMessageList(problems);
        showToast({
            title: 'مشکلات فرم', 
            component: ul
          });
        return;
    }
    console.log(formItems)
    newItem(formData);
}

function problemMessageList(problems){

    if(problems){
        // Create an empty array to store the <li> elements
        var listItems = [];

        // Loop through the Problem array and create <li> elements
        problems.forEach( problem => {
            var listItem = document.createElement('li');
            listItem.textContent = problem;
            listItems.push(listItem);
        });

        // Create a <ul> element to hold the <li> elements
        var ul = document.createElement('ul');

        // Append the <li> elements to the <ul> element
        listItems.forEach((item) => {
            ul.appendChild(item);
        });
        
        return ul;
    }
 
}



  // Function to handle file input change
function handleFileInputChange() {
    const input = document.getElementById('image-uploader');
    const previewImage = document.getElementById('previewImage');

    console.log('image-input', input.files[0])
    
  
    const file = input.files[0]; // Get the selected file
  
    if (file) {
      const reader = new FileReader(); // Create a FileReader
      reader.onload = function (e) {
        // Set the image source to the selected file's data URL
        previewImage.src = e.target.result;
      };
      reader.readAsDataURL(file); // Read the selected file as a data URL
    } else {
      // If no file is selected or the user cancels the selection, clear the preview
      previewImage.src = '#';
    }
  }
  

const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const video = document.getElementById('previewVideo');

function handleVideoInputChange() {
    const input = document.getElementById('video-uploader');
    const previewVideo = document.getElementById('previewVideo');

    const file = input.files[0]; // Get the selected file

    if (file) {
        const blobURL = URL.createObjectURL(file); // Create a blob URL for the selected file
        previewVideo.src = blobURL; // Set the video source to the blob URL
        playButton.style.display = 'block'; // Show "Play" button
        pauseButton.style.display = 'none'; // Hide "Pause" button
  
    } else {
        // If no file is selected or the user cancels the selection, clear the video preview
        previewVideo.src = '';
        playButton.style.display = 'block'; // Show "Play" button
        pauseButton.style.display = 'none'; // Hide "Pause" button

    }
}

    // Function to handle video play
function playVideo() {
    const video = document.getElementById('previewVideo');
    video.play();
    playButton.style.display = 'none'; // Hide "Play" button
    pauseButton.style.display = 'block'; // Show "Pause" button

}

    // Function to handle video pause
function pauseVideo() {
    const video = document.getElementById('previewVideo');
    video.pause();
    pauseButton.style.display = 'none'; // Hide "Pause" button
    playButton.style.display = 'block'; // Show "Play" button

}

if(playButton){
    playButton.addEventListener('click', playVideo);
}

if(pauseButton){
    pauseButton.addEventListener('click', pauseVideo);
}

if(video){
    video.addEventListener('play', () => {
    playButton.style.display = 'none'; // Hide "Play" button
    pauseButton.style.display = 'block'; // Show "Pause" button
    });
        
    video.addEventListener('pause', () => {
    pauseButton.style.display = 'none'; // Hide "Pause" button
    playButton.style.display = 'block'; // Show "Play" button
    });
}

// Add an event listener to the file input
const ImageUploader = document.getElementById('image-uploader');
if(ImageUploader){
    ImageUploader.addEventListener('change', handleFileInputChange);
}

const VideoUploader = document.getElementById('video-uploader');
if(VideoUploader){
    VideoUploader.addEventListener('change', handleVideoInputChange);
}




// Event listener for the "Print Data" button
document.getElementById('submit').addEventListener('click', submitForm);



