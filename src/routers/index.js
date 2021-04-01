export default {
    routes: [
        {
            path: '/',
            name: 'home',
            component: resolve => require(['_pages/home/index'], resolve),
        },
        {
            path: '/contact',
            name: 'contact',
            component: resolve => require(['_pages/contact/index'], resolve),
        },
        {
            path: '/photos',
            name: 'photos',
            component: resolve => require(['_pages/photos/index'], resolve),
        },
    ],
};
