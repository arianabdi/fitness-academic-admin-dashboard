const heading = {
    title: "ایجاد مقاله جدید",
    description: " "
}

let formItems = [
    [

        {
            title: "عنوان مقاله",
            slug: 'title',
            type: "text",
            isRequired: true,
            value: "",
        },
    ],
    [
        {
            title: "دسته بندی",
            slug: 'categoryId',
            type: "select",
            isRequired: true,
            options: [
                {label: 'اخبار', value: "6489c0f8e32a24bcc407358b"},
                {label: 'رویدادها', value: "6489c10de32a24bcc407358f"},
                {label: 'آموزش', value: "6489c25d8af43daa7085071d"},
            ],
            value: "",
        },
    ],
    [
        {
            title: "متن مقاله",
            slug: 'content',
            type: "textarea",
            isRequired: true,
            value: "",
        },
    ],
    [
        {
            title: "ویدیو مقاله",
            slug: 'video',
            type: "video",
            value: "",
        },
    ],
    [
        {
            title: "تصویر مقاله",
            slug: 'image',
            type: "image",
            value: "",
        },
    ]
]


