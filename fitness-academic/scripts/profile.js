function setIsLoading(status){
    if(status === true){
        // $('#table-loading-placeholder').show();
        // $('#table-main-placeholder').hide();
        return;
    }

    // $('#table-loading-placeholder').hide();
    // $('#table-main-placeholder').show();
}

function toJalali(gregorianDate){
    return moment(gregorianDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
}


document.addEventListener("DOMContentLoaded",async () => {
    // fetchData() is located at "./scripts/api.js"
    var url = new URL(window.location.href);

    // Get the value of the 'userId' parameter
    var userId = url.searchParams.get("userId");

    
    var userData = await getItem(userId);
    console.log('userData', userData);

    //find profile segment and append to it
    const profileElement = document.getElementById('profile-placeholder');
    const TransactionsTable = document.getElementById('transactions-placeholder');
    const ProgramsTable = document.getElementById('programs-placeholder');
    
    profileElement.innerHTML = `
    <div class="row profile-container">
                <div class="col-md-4 profile-image">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e290262464" alt="Profile Image" class="img-fluid rounded-circle">
                    <h4 class="mt-3">${userData.full_name || 'ثبت نشده'}</h4>
                </div>
                <div class="col-md-8 information-container">
                    <div class="info-row">
                        <h5>اطلاعات هویتی</h5>
                        <div class="row">
                            <div class="col-sm order-2 font-yekan-bakh">نام و نام خانوادگی:</div>
                            <div class="col-sm order-3 d-flex justify-content-end font-yekan-bakh">${userData.full_name || 'ثبت نشده'}</div>
                        </div>
                        <div class="row">
                            <div class="col-sm order-2 font-yekan-bakh">کد ملی:</div>
                            <div class="col-sm order-3 d-flex justify-content-end font-yekan-bakh">${userData.national_code || 'ثبت نشده'}</div>
                        </div>
                    </div>
                    <div class="info-row">
                        <h5>اطلاعات تماس</h5>
                        <div class="row">
                            <div class="col-sm order-2 font-yekan-bakh">تلفن همراه:</div>
                            <div class="col-sm order-3 d-flex justify-content-end font-yekan-bakh">${userData.mobile || 'ثبت نشده'}</div>
                        </div>
                        <div class="row">
                            <div class="col-sm order-2 font-yekan-bakh">ایمیل:</div>
                            <div class="col-sm order-3 d-flex justify-content-end font-yekan-bakh">${userData.email || 'ثبت نشده'}</div>
                        </div>
                    </div>
                    <div class="info-row">
                        <h5>تنظیمات</h5>
                        <div class="row">
                            <div class="col-sm order-2 font-yekan-bakh">نقش ها:</div>
                            <div class="col-sm order-3 d-flex justify-content-end font-yekan-bakh">${userData.roles || 'ثبت نشده'}</div>
                        </div>
                    </div>
                </div>
            </div>
    `;

    var t = '';
    var p = '';

    userData.transactions.map(item => {
         t += `
            <tr>
                <td>${item._id}</td>
                <td>${item.amount}</td>
                <td>${item.depositPurpose}</td>
                <td>${toJalali(item.createdAt)}</td>
            </tr>
        `
    })
    
    userData.programs.map(item => {
         p += `
            <tr>
                <td>${item._id}</td>
                <td>${item?.packageId || '-'}</td>
                <td>${toJalali(item.createdAt)}</td>
            </tr>
        `
    })

    TransactionsTable.innerHTML = t;
    ProgramsTable.innerHTML = p;
});