const heading = {
    title: "دسته بندی تمرین",
    description: "در اینجا تمامی دسته بندی های تمرینات را وارد کنید."
}
const tableStructure = [
    {
        title: "شناسه",
        slug: '_id',
    },
    {
        title: "عنوان",
        slug: 'title',
    },
    {
        title: "شناسه انگلیسی",
        slug: 'slug',
        useTranslate: true
    },
    {
        title: "تاریخ ایجاد",
        slug: 'createdAt',
        useJalaliFormat: true
    },
    {
        title: "حذف",
        slug: 'delete',
        color: 'danger',
        isDeleteButton: true, //use delete-item class to automatic implement the removing item.
        useButton: true
    },
]


