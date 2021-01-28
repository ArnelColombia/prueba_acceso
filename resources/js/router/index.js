import VueRouter from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/cities',
        component: () => import('../layouts/DashboardLayout.vue'),
        meta: { authRequired: true },
        children: [
            {
                path: '/cities',
                name: 'Ciudades',
                component: () => import('../views/Cities/Cities.vue'),
                meta: { authRequired: true }
            },
            {
                path: '/users',
                name: 'Usuarios',
                component: () => import('../views/Users/Users.vue'),
                meta: { authRequired: true }
            },
            {
                path: '/customers',
                name: 'Clientes',
                component: () => import('../views/Customers/Customers.vue'),
                meta: { authRequired: true }
            },
        ]
    },
    {
        path: '/register',
        name: 'Registro',
        component: () => import('../views/Auth/Register/Register.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../layouts/LayoutLogin.vue'),
    },
    {
        path: '/confirmUser',
        name: 'Login',
        component: () => import('../views/ConfirmAcount/ConfirmAccount.vue'),
    },
];

const router = new VueRouter({
    linkExactActiveClass: "route-active",
    history: true,
    mode: "history",
    routes: routes
});

router.beforeEach((to, from, next) => {
    if(to.meta.authRequired == true){
        let user = JSON.parse(localStorage.getItem('accessToken'));
        if(!user){
            alert('No estas logueado');
            window.location = "/login"
        }else{
            next();
        }
    }else{
        next();
    }
});

export default router;