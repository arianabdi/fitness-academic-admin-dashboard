
var filter = '';

function ConvertFilterObjectToUrlParam(obj){
    const queryParams = [];
    filterItems.forEach(item => {
        if (item.selected) {
            queryParams.push(`${item.slug}=${item.value}`);
        }
    });
    return queryParams.join('&');
}



function FilterQueryInputSelector(type, options, slug){

    switch(type){
        case 'text':
            return `<input type="text" class="form-control yekan-bakh" placeholder=""  data-index="1" data-label="${slug}">` ;
            break;

        case 'date':
            return `<input type="text" class="form-control yekan-bakh" placeholder=""  data-index="1" data-label="${slug}">` ;
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

function FilterQueryItem(title, slug, type, options, value, selected){
    const container = document.createElement('div');
    
    container.innerHTML = `
        <div class="row custom-row ${selected ? 'checked' : ''}">
            <div class="col-md-1">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" ${selected ? 'checked' : ''} data-index="2" data-label="${slug}" id="checkbox1">
                </div>
            </div>
            <div class="col-md-4">
                <label class="form-check-label yekan-bakh" for="checkbox1">${title}</label>
            </div>
            <div class="col-md-7">
                ${FilterQueryInputSelector(type, options, slug)}
            </div>
        </div>
    `

return container;
}


const modalContainer = document.getElementById('modal-container');


function loadFilterModal(){
    filterItems.forEach(item => {
        const component = FilterQueryItem(item.title, item.slug, item.type, item.options, '', item.selected);
        modalContainer.appendChild(component);
    });
}

loadFilterModal()










// Function to print the form data as a JSON object
function applyFilter() {
    filter = ConvertFilterObjectToUrlParam(filterItems);
    page=1;
    //this function comes from "api.js"
    fetchData( {
        page: page, 
        limit: limit.value, 
        totalPages: totalPages,
        filter: filter
    })
  }
  
  
  
  // Event listener for the "Print Data" button
  document.getElementById('filter-button').addEventListener('click', applyFilter);


  // Detect all changes in this form
  var form = document.getElementById("filterForm");
  form.addEventListener("change", function(event) {
    let value = event.target.value;
    let index = event.target.dataset.index;
    let label = event.target.dataset.label;
  
  
    filterItems.map(item => {
        if(item.slug === label && index === "1"){
            item.value = value;
        }
    })
    
  });



// JavaScript to toggle row background color on checkbox change
document.querySelectorAll('.form-check-input').forEach(function(checkbox) {
    checkbox.addEventListener('change', function(event) {
        let label = event.target.dataset.label;
        let index = event.target.dataset.index;

        filterItems.map(item => {
            if(item.slug === label  && index === "2"){
                if (this.checked) {
                    item.selected = true
                } else {
                    item.selected = false
                }
            }
        })
        
        const row = this.closest('.custom-row');
        if (this.checked) {
            row.classList.add('checked');
        } else {
            row.classList.remove('checked');
        }
    });
});



