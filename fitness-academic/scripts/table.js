
function toJalali(gregorianDate){
    return moment(gregorianDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
}


function _renderItem(data) {
    const tableBody = document.getElementById('tableBody');

    // Clear existing rows
    tableBody.innerHTML = '';
    // Iterate through the data and create rows


    if(data.length === 0 ){
        tableBody.innerHTML = `
            <style>
                .no-data-message {
                    text-align: center;
                    font-size: 18px;
                    color: #888;
                    margin-top: 20px;
                }
            </style>
            <div class="no-data-message">
                No data found.
            </div>
        `
    }else{
        data.forEach(item => {
            const row = document.createElement('tr');
            
            tableStructure.map(el => {
                if(el.useJalaliFormat=== true){
                    row.innerHTML += `<td>${toJalali(item[el.slug])}</td>`; // if you need jalali format 
                }else if(el.useLink === true){
                    row.innerHTML += `<td><a href="${el.link.replace(/xxx/g, item['_id'])}">${item[el.slug]}</a></td>`; // if you need to translate a value add them into "../translate/translate.js"
                }else if(el.useTranslate === true){
                    row.innerHTML += `<td>${translate(item[el.slug])}</td>`; // if you need to translate a value add them into "../translate/translate.js"
                }else if(el.useButton === true){
                    row.innerHTML += `<td><a 
                            ${el.isDeleteButton ? `href="#modal18" data-bs-toggle="modal" data-index="${item['_id']}" data-label="delete"` : ''}
                            type="button" 
                            class="btn btn-${el.color ? el.color : 'primary'} ${el.isDeleteButton ? 'delete-item' : ''} btn-xs w-100 yekan-bakh"
                        >
                            ${el.title} 
                        </a></td>`; // if you need to use button to perform an action
                }else{
                    row.innerHTML += `<td>${item[el.slug]}</td>`;
                }
            })
            tableBody.appendChild(row);
        });

    }
}



function _renderHeader(data) {
    const tableHeader = document.getElementById('tableHeader');

    // Clear existing rows
    tableHeader.innerHTML = '';
    // Iterate through the data and create rows

    const row = document.createElement('tr');
    data.map(el => {
        row.innerHTML += `<th scope="col">${el.title}</td>`;
    })
    tableHeader.appendChild(row);
}


function setIsLoading(status){
    if(status === true){
        $('#table-loading-placeholder').show();
        $('#table-main-placeholder').hide();
        return;
    }

    $('#table-loading-placeholder').hide();
    $('#table-main-placeholder').show();
}

_renderHeader(tableStructure)

document.addEventListener("DOMContentLoaded", () => {
    // fetchData() is located at "./scripts/api.js"
    fetchData( {
        page: page, 
        limit: limit.value, 
        totalPages: totalPages,
    })
});

document.getElementById('downloadCsvButton').addEventListener('click', ()=>{
    // convertToCSV() and downloadCSV() is located at "../scripts/exportCsv.js"
    const csvData = convertToCSV(data);
    const fileName = 'data.csv';
    downloadCSV(csvData, fileName);
});

let itemId = '';
$("#tableBody").on("click", ".delete-item", function() {
    itemId = $(this).data("index");
});

document.getElementById('delete-item').addEventListener('click', ()=>{
    console.log('itemId', itemId)
    deleteItem({itemId: itemId});
    
});

