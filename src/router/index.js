import Vue from 'vue'
import Router from 'vue-router'
const router = [
    { path: '/', name: 'HelloWorld',meta:{keepAlive: true}, component: resolve => require(['~C/index/index'], resolve) },
    { path: '/index', name: 'index',meta:{keepAlive: true}, component: () => lazyLoadView(import('~C/HelloWorld'))},
		{ path: '/login', name: 'login',meta:{keepAlive: false}, component: resolve => require(['~C/login/login'], resolve) },
    { path: '/product', name: 'product',meta:{keepAlive: false}, component: resolve => require(['~C/index/product'], resolve) },
    { path: '/search', name: 'search',meta:{keepAlive: false}, component: resolve => require(['~C/index/search'], resolve) },
    { path: '/stream', name: '视频流',meta:{keepAlive: false}, component: resolve => require(['~C/stream/stream'], resolve) },
    { path: '/streamcomall', name: 'streamcomall',meta:{keepAlive: false}, component: resolve => require(['~C/stream/streamcomall'], resolve) },//全部评论
    
    { path: '/stream_video', name: 'stream_video',meta:{keepAlive: false}, component: resolve => require(['~C/stream/stream_video'], resolve) },
    // { path: '/stream_video2', name: '视频流', component: resolve => require(['~C/stream/stream_video'], resolve) },

    { path: '/recommend', name: 'recommend',meta:{keepAlive: false}, component: resolve => require(['~C/recommend/recommend'], resolve) },
    { path: '/doctors', name: 'doctors',meta:{keepAlive: false}, props: true, component: resolve => require(['~C/doctors/doctors_user'], resolve) },
    { path: '/doctors_fill', name: 'doctors_fill',meta:{keepAlive: false}, props: true, component: resolve => require(['~C/doctors/doctors_fill'], resolve) },
    { path: '/doctors_carry', name: 'doctors_carry',meta:{keepAlive: false}, props: true, component: resolve => require(['~C/doctors/doctors_carry'], resolve) },
    { path: '/forum_details', name: 'forum_details',meta:{keepAlive: false}, props: true, component: resolve => require(['~C/forum/forum_details'], resolve) },
    { path: '/forum_taolun', name: 'forum_taolun',meta:{keepAlive: false}, props: true, component: resolve => require(['~C/forum/forum_taolun'], resolve) },
    { path: '/forum_wenda', name: 'forum_wenda',meta:{keepAlive: false}, props: true, component: resolve => require(['~C/forum/forum_wenda'], resolve) },
    { path: '/compared', name: 'compared',meta:{keepAlive: false}, props: true, component: resolve => require(['~C/compared/compared'], resolve) },
    { path: '/newforum', name: 'newforum',meta:{keepAlive: false}, props: true, component: resolve => require(['~C/forum/newforum'], resolve) },
    { path: '/release', name: 'release',meta:{keepAlive: false}, props: true, component: resolve => require(['~C/forum/release'], resolve) },//发布
    { path: '/commentall', name: 'commentall',meta:{keepAlive: false}, props: true, component: resolve => require(['~C/forum/commentall'], resolve) },//全部streamcomall
    // 测试
    { path: '/text', name: 'text',meta:{keepAlive: false}, component: resolve => require(['~C/text/text'], resolve) },
    { path: '/text1', name: 'text1',meta:{keepAlive: false}, component: resolve => require(['~C/text/text1'], resolve) },
    { path: '/text3', name: 'text3',meta:{keepAlive: false}, component: resolve => require(['~C/text/text3'], resolve) },
    { path: '/text_video', name: 'search',meta:{keepAlive: false}, component: resolve => require(['~C/text/video_text'], resolve) },
   
    { path: '/component', name: 'search',meta:{keepAlive: false}, component: resolve => require(['~C/common/component'], resolve) },
    //文章
    { path: '/article', name: 'article',meta:{keepAlive: false}, component: resolve => require(['~C/article/article'], resolve) },
    { path: '/articlelist', name: 'articlelist',meta:{keepAlive: false}, component: resolve => require(['~C/article/articlelist'], resolve) },//文章列表
    { path: '/404', name: '404',meta:{keepAlive: false}, component: resolve => require(['~C/404/404'], resolve) }
]
function lazyLoadView(AsyncView) {
  console.log(AsyncView);
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require("~C/common/Loading.vue").default,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require("~C/common/Timeout.vue").default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 3000,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000
  });

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children);
    }
  });
}

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
