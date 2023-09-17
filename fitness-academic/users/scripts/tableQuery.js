const heading = {
    title: "کاربران سیستم",
    description: "با استفاده از این صحفه به اطلاعات کامل کاربران خود دسترسی خواهید داشت."
}
const tableStructure = [
    {
        title: "شناسه",
        slug: '_id',
        useLink: true,
        link: './profile.html?userId=xxx' // insert xxx to replace text with link
    },
    {
        title: "نام و نام خانوادگی",
        slug: 'full_name',
    },
    {
        title: "آدرس ایمیل",
        slug: 'email',
    },
    {
        title: "شماره تماس",
        slug: 'mobile',
    },
    {
        title: "نقش ها",
        slug: 'roles',
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
    {
        title: "ویرایش",
        slug: 'edit',
        color: 'dark',
        idEditButton: true, //use delete-item class to automatic implement the removing item.
        useButton: true
    },
]


