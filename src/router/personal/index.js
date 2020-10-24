export default{
    path: '/personal',
    name: 'personal',
    meta: {
        needLogin: true
    },
    component: () => import('@/views/personal')
}