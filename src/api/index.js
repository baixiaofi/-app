import requests from "./request";



export const reqgetCategoryList = ()=>requests({
  
        url:'/product/getBaseCategoryList',
        method:'get'
    })
