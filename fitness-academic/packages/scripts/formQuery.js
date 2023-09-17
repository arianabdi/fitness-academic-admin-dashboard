const heading = {
    title: "ایجاد پکیج جدید",
    description: "در این بخش اقدام به ایجاد پکیج های فروشی خود کنید! "
}

let formItems = [
    [

        {
            title: "عنوان پکیج",
            slug: 'name',
            type: "text",
            regex: /^[A-Za-z\u0600-\u06FF\s]+$/,
            alert: 'Name should contain only letters and spaces with no underline or numbers.',
            value: "",
        },
        
        {
            title: "شناسه پکیج",
            slug: 'slug',
            type: "text",
            regex: /^[A-Za-z0-9_]+$/,
            alert: 'Slug should contain only letters, numbers, and underscores.',
            value: "",
        },
    ],
    [

        {
            title: "قیمت",
            slug: 'price',
            type: "text",
            regex: /^[0-9]+$/,
            alert: 'Price should contain only  numbers',
            value: "",
        },
        {
            title: " مدت زمان",
            slug: 'duration',
            type: "select",
            isRequired: true,
            options: [
                {label: '۱ ماهه', value: 1},
                {label: '۳ ماهه', value: 3},
            ],
            value: "",
        },
    ],
    [
        {
            title: "توضیحات",
            slug: 'description',
            type: "textarea",
            value: "",
        },
    ]
]


