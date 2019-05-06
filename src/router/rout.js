import Vue from 'vue'
import Router from 'vue-router'
const router = [
    { path: '/', name: 'HelloWorld', component: resolve => require(['~C/HelloWorld'], resolve) },
    { path: '/index', name: 'index', component: resolve => require(['~C/index/index'], resolve) },
    { path: '/product', name: 'product', component: resolve => require(['~C/index/product'], resolve) },
    { path: '/search', name: 'search', component: resolve => require(['~C/index/search'], resolve) },
    { path: '/evadetails', name: 'evadetails', component: resolve => require(['~C/index/evadetails'], resolve) },
    { path: '/404', name: '404', component: resolve => require(['~C/404/404'], resolve) }
]
// const HelloWorld = () => import(
//     /* webpackChunkName: "HelloWorld" */
//     '~C/HelloWorld')
// const index = () => import(
//     /* webpackChunkName: "index" */
//     '~C/index/index')
// const product = () => import(
//     /* webpackChunkName: "product" */
//     '~C/index/product')
// const search = () => import(
//     /* webpackChunkName: "search" */
//     '~C/index/search')
// const evaluation = () => import(
//     /* webpackChunkName: "evaluation" */
//     '~C/index/evaluation')
// const evadetails = () => import(
//     /* webpackChunkName: "evadetails" */
//     '~C/index/evadetails')
// const a = () => import(
//     /* webpackChunkName: "404" */
//     '~C/404/404')



// const router = [
//     { path: '/', name: 'HelloWorld', component: index },
//     { path: '/index', name: 'index', component: index },
//     { path: '/product', name: 'product', component: product },
//     { path: '/search', name: 'search', component: search },
//     { path: '/evaluation', name: 'evaluation', component: evaluation },
//     { path: '/evadetails', name: 'evadetails', component: evadetails },
//     { path: '/404', name: '404', component: a }
// ]

export default router;
