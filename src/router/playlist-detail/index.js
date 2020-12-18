export default{
    path: '/playlist-detail/:id',
    name: "playlist-detail",
    component: () => import('@/views/playlist/detail'),
    props: true
}