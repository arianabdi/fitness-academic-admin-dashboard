

let filterParams =  '';
let filterItems = [
    {
        title: "نوع برنامه",
        slug: 'packageId',
        type: "select",
        options: [
            {label: 'حرفه ای', value: '64ef8b54e632619c304525a6'},
            {label: 'مبتدی', value: '64ef8b61e632619c304525a9'},
        ],
        value: "",
        selected: false
    },
    {
        title: "وضعیت برنامه",
        slug: 'status',
        type: "select",
        options: [
            
            {label: 'در انتظار پرداخت', value: 'unpaid'},
            {label: 'تکمیل فرم', value: 'fill_info'},
            {label: 'در حال آماده سازی', value: 'pending'},
            {label: 'فعال', value: 'active'},
            {label: 'منقضی شده', value: 'expired'},
        ],
        value: "",
        selected: false
    },
    {
        title: "نام کاربر",
        slug: 'full_name',
        type: "text",
        value: "",
        selected: false
    },
]


