 import { Component } from "react";


export const UiRoutes = {
    website : {
        home: '/',
        products: '/products',
        productView: '/product-view',
        productCart: '/cart',
        profile: '/profile',
        login: '/login',
        register: '/register',
        contact: '/contact',
        about: '/about-us',
        kits: '/kits',
        courses: '/courses',
        coursesView: '/courses-View',
    },
    admin : {
        dashboard : 'dashboard',
        admin_kits : 'kit-list',
        admin_add_kits : 'add-kits',
        admin_kits_view : 'kits-view',
        admin_users : 'users',
        forms : 'forms',
        tables : 'tables',
        masterkit : 'master/kits',
        masterprojects : 'master/master-projects',
        component : 'master/components',
    }
}