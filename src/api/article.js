/**
 * article模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/axios'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
import { ssrCompile } from 'vue-template-compiler';

const article = {    
    // 新闻列表    
    articleList () {        
        return axios.get(`${base.sq}/search/showSearch`);    
    },    
    // 新闻详情,演示    
    articleDetail (params) {     
        return axios.get(`${base.bd}api/account2/isExists`, {            
            params: params        
        });    
    },
    // post提交    
    login (params) {        
        return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));    
    },

    // 热搜&搜索
    showSearch(params){
        console.log(params)
        return axios.post(`${base.sq}/search/showSearch`, qs.stringify(params));    
    },
    // 分类展示
    showIfy(params){
        console.log(params)
        return axios.post(`${base.sq}/classify/showIfy`, params);    
    },
    // 导航展示
    showNav(params){
        console.log(params)
        return axios.post(`${base.sq}/navigation/showNav`, params);    
    }
    ,addSearch(params){
        console.log(params)
        return axios.post(`${base.sq}/search/addSearch`, params); 
    }
    //测试接口
    ,ss(params){
        return axios.get(`../../static/ss.json`); 
    }
    //banner展示
    ,showBanner(params){
        console.log(params)
        return axios.post(`${base.sq}/banner/showBanner`, qs.stringify(params)); 
    }
    // 医师查询
    ,doctorList(params){
        console.log(params)
        return axios.post(`${base.sq}/doctor/showdoctor_other`, qs.stringify(params)); 
    }
    // 医师查询
    ,doctorListId(params){
        console.log(params)
        return axios.post(`${base.sq}/doctor/showdoctor`, qs.stringify(params)); 
    }
    // 测试
    ,text(params){
        console.log(params)
        return axios.post(`${base.sq}/broadcast/addBroadcast`, qs.stringify(params)); 
    }
    // 视频内容
    ,showContent(params){
        console.log(params)
        return axios.post(`${base.sq}/videoContent/showContent`, qs.stringify(params)); 
    }
     // 视频内容内容
     ,showVideo(params){
        console.log(params)
        return axios.post(`${base.sq}/videoContent/showVideo`, qs.stringify(params)); 
    }
    // 广播
    ,showBroadcast(params){
        console.log(params)
        return axios.post(`${base.sq}/broadcast/showBroadcast`, qs.stringify(params)); 
    }
    //添加预约
    ,subscribe(params){
        console.log(params)
        return axios.post(`${base.sq}/doctor/subscribe`, qs.stringify(params)); 
    }
    //文章查询所有/article/showArticleAll
    ,showArticleAll(params){
        return axios.post(`${base.sq}/article/showArticleAll`, qs.stringify(params)); 
    }
    //文章分类查询
    ,showArticleSort(params){
        return axios.post(`${base.sq}/article/showArticleSort`, qs.stringify(params)); 
    }
     //文章查询单个/article/showArticleBy
    ,showArticleBy(params){
        return axios.post(`${base.sq}/article/showArticleBy`, qs.stringify(params)); 
    }
    //朋友圈查询/dynamic/showDynamic
    ,showDynamic(params){
        return axios.post(`${base.sq}/dynamic/showDynamic`, qs.stringify(params)); 
    }
     //朋友圈单个查询/dynamic/showDynamic
     ,showDynamicById(params){
        return axios.post(`${base.sq}/dynamic/showDynamicById`, qs.stringify(params)); 
    }
    //通过父分类查询子分类
    ,showSortById(params){
        return axios.post(`${base.sq}/sort/showSortById`, qs.stringify(params)); 
    }
    //评论

    ,addDiscuss(params){
        return axios.post(`${base.sq}/discuss/addDiscuss`, qs.stringify(params)); 
    }
    //点赞/dynamic/dynamicLike?dId=
    ,dynamicLike(params){
        return axios.post(`${base.sq}/dynamic/dynamicLike`, qs.stringify(params)); 
    }
}

   

export default article;