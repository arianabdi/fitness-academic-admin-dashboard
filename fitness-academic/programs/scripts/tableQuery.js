const heading = {
    title: "برنامه ها",
    description: "این صفحه لیست برنامه هایی که از طرف کاربران در اپلیکیشن خریداری شده است و ایجاد شده نمایش داده میشوداین صفحه لیست برنامه هایی که از طرف کاربران در اپلیکیشن خریداری شده است و ایجاد شده نمایش داده میشود"
}

const tableStructure = [
    {
        title: "شناسه",
        slug: '_id',
        useLink: true,
        link: './form.html?programId=xxx'
    },
    {
        title: "نوع برنامه",
        slug: 'packageName',
    },
    {
        title: "نام کاربر",
        slug: 'full_name',
    },
    {
        title: "وضعیت برنامه",
        slug: 'status',
        useTranslate: true
    },
    {
        title: "تاریخ ایجاد",
        slug: 'createdAt',
        useJalaliFormat: true
    },
]


