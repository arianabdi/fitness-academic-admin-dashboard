const heading = {
    title: "تمرین ها",
    description: "شما از این بخش میتوانید تمامی تمرین های مورد نظر خود را ثبت کرده و در بخش ایجاد برنامه به آن ها دسترسی داشته باشید.",
    addNewItemButtonLink: './form.html'
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
        title: "سطح",
        slug: 'level',
        useTranslate: true
    },
    {
        title: "دسته بندی",
        slug: 'category',
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


