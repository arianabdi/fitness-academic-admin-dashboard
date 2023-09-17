// Initialize an empty JSON array to store the form data

var dietFormData = [];



function addNewDietSuggestion(index, item){
    console.log('index', index)
    var newDietSuggestionItem = `
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">${index}</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <input type="text" class="form-control yekan-bakh suggestion" value="${item || ''}" data-index="${index}" data-label="suggestion" placeholder="پیشنهاد">
              <a class="col-sm btn btn-outline-light mg-r-5 remove-suggestion-button"  data-index="${index}">
                <i data-feather="x" class="sz-20"></i>
              </a> 
            </div>
          </div>
    `

    return newDietSuggestionItem
  }



// Function to add a new item to the form
function addItemToDiet(index, item) {
  var newItem = {
    "title": item.title || '',
    "type":  item.type || '',
    "suggestions":  item.suggestions || [
      "",
    ],
  };
  let suggestionsList = ''

  newItem.suggestions.map((item, index)=>{
    suggestionsList += addNewDietSuggestion(index, item)
  })

  // Create a new item HTML structure
  var newItemHTML = `
  <div class="card card-body mg-b-10 diet-item"  data-index="${index}"> 
    <div class="row">
      <div class="col-sm">
        <a data-bs-toggle="collapse" 
          href="#diet-${index}" 
          role="button" 
          aria-expanded="false" 
          aria-controls="diet-${index}"
        >
          <div class="col-sm " id="diet-title-${index}"> ${index}. ${dietFormData[index] ? dietFormData[index]['title'] : 'تعریف نشده'} </div>
        </a>
      </div>
      <div class="col-sm d-flex justify-content-end">
        <a  >
          <i data-feather="x" class="sz-20 mg-l-20 remove-btn" data-index="${index}"></i>
        </a>
      </div>
      
    </div>
    <div class="collapse mg-t-5 pd-t-20" id="diet-${index}">
    
      <div class="row mg-b-10">
        <div class="col-sm order-2">
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">عنوان</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <input type="text" class="form-control title" data-index="${index}" value="${newItem.title}" data-label="title" placeholder="عنوان">
            </div>
          </div>
        </div>
        <div class="col-sm order-2">
          <div class="row">
            <div class="col-sm-12 order-2 yekan-bakh">نوع</div>
            <div class="col-sm-12 order-3 d-flex justify-content-end">
              <select class="form-select yekan-bakh type" data-index="${index}" data-label="type">
                <option class="yekan-bakh" value=""></option>
                <option class="yekan-bakh" ${newItem.type === 'meal' ? 'selected' : ''} value="meal">وعده غذایی</option>
                <option class="yekan-bakh" ${newItem.type === 'supplement' ? 'selected' : ''} value="supplement">مکمل</option>
                <option class="yekan-bakh" ${newItem.type === 'limitation' ? 'selected' : ''} value="limitation">محدودیت</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="row mg-b-10">
        <div class="col-sm order-2">

          <div class="row mg-t-20">
            <div class="col-sm-8 order-2 yekan-bakh mg-t-5">موارد پیشنهادی</div>
            <div class="col-sm order-3 d-flex justify-content-end">
              <a class="col-sm btn btn-outline-light yekan-bakh btn-sm add-suggestion-button"  data-index="${index}">
                <i data-feather="plus"></i> افزودن پیشنهاد جدید
              </a> 
            </div>
          </div>

          <div id="suggestions-container"  data-index="${index}" data-label="suggestion-container" >
            ${suggestionsList}
          </div>

        </div>
      </div>
    </div>
  </div>
  `;





  // Convert the HTML structure to a DOM element
  var newItemElement = document.createElement('div');
  newItemElement.innerHTML = newItemHTML;

  // Add the new item to the form
  document.getElementById('dietContainer').appendChild(newItemElement);

  // Push the new item to the formData array
  dietFormData.push(newItem);
  feather.replace();

  
}




function removeItemFromDiet(index) {
    // Remove the item from the list (e.g., using jQuery)
    $(`#dietContainer .diet-item[data-index="${index}"]`).remove();
  
    // Update the data-index attributes for the remaining items
    $('#dietContainer .diet-item').each(function(i, item) {
      $(item).attr('data-index', i);
      $(item).find('.title, .type, .suggestions').each(function(j, subItem) {
        $(subItem).attr('data-index', i); // Use the same index as the parent .exercise-item
      });
      $(item).find('.indexer').each(function(j, subItem) {
        $(subItem).text(i); // Use the same index as the parent .exercise-item
      });
    });
    
    dietFormData.splice(index, 1);
  }




var form = document.getElementById("dietForm");


form.addEventListener("change", function(event) {
  let value = event.target.value;
  let index = event.target.dataset.index;
  let label = event.target.dataset.label;


  if(label === "title"){
    //change its title
    dietFormData[index][label] = value;
    var title = document.getElementById(`diet-title-${index}`);
    title.textContent = dietFormData[index][label];
    

  }else if(label === "suggestion"){
    let parentElement = event.target.closest('.diet-item');
    let parentIndex = parentElement.dataset.index;
    let dataIndex = event.target.dataset.index;
    console.log('change', label, 'parentIndex', parentIndex, 'dataIndex', dataIndex);
    dietFormData[parentIndex]["suggestions"][dataIndex] = value;


  }else{
    dietFormData[index][label] = value;
  }

});



document.getElementById('addItemToDietContainer').addEventListener('click', ()=>{
    var item = {
      "title": '',
      "type":   '',
      "suggestions": [
        "",
      ],
    };
    addItemToDiet(dietFormData.length, item)
});




$("#dietContainer").on("click", ".remove-btn", function() {
  // Get the parent element of the clicked close button (i.e., the element to be closed)
  var dataIndex = $(this).data("index");
  removeItemFromDiet(dataIndex);
});


// add new suggestion to specific diet-item
$('#dietContainer').on('click', '.add-suggestion-button', function() {
 
    // var dietItem = $(this).closest('.diet-item'); // Find the parent diet-item
    var dataIndex = $(this).data("index");
    console.log('add', dataIndex,)
    var suggestionContainer = $('[data-index="' + dataIndex + '"][data-label="suggestion-container"]');
    suggestionContainer.append(addNewDietSuggestion(dietFormData[dataIndex]['suggestions'].length));
    dietFormData[dataIndex]['suggestions'].push('')
    feather.replace();

  });

