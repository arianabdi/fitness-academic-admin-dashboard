const heading = {
    title: "پکیج ها",
    description: "از طریق این صفحه شما قادر خواهید بود تا پکیج های مورد فروش خود را تعریف کنید تا در اپلیکیشن به نمایش درآید."
}

const tableStructure = [
    {
        title: "شناسه",
        slug: '_id',
    },
    {
        title: "عنوان",
        slug: 'name',
    },
    {
        title: "شناسه انگلیسی",
        slug: 'slug',
        useTranslate: true
    },
    {
        title: "قیمت",
        slug: 'price',
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


