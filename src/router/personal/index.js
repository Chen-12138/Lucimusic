export default{
    path : '/personal',
    meta: {
        needLogin: true
    },
    component : () => import('@/views/personal')
}