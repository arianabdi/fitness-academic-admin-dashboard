const heading = {
    title: "مقاله ها",
    description: "در این لیست اقدام به ایجاد پست های مورد نیاز خود برای نمایش در اپلیکیشن"
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
        title: "دسته بندی",
        slug: 'category',
        useTranslate: true
    },
    {
        title: "نویسنده",
        slug: 'author',
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


