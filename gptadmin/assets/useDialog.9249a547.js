var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,i=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&s(e,t,a[t]);if(o)for(var t of o(a))l.call(a,t)&&s(e,t,a[t]);return e};import{u as d}from"./index.a35ddce3.js";import{r as n,a as p,n as u,u as c,_ as b,K as m,M as h,H as f}from"./vendor.1bc4be78.js";function w({emit:e,props:o,schemas:r,watchShow:l,options:s,initData:w=!0}){const D=n(null),g=p({showDialog:!1,editData:null}),v=u((()=>c(O).id||"")),O=u((()=>c(null==o?void 0:o.editData)||{}));b((()=>g.showDialog),(e=>{!e&&w&&(g.editData=null)})),b((()=>r&&o&&o.modelValue),(e=>{e||(g.editData=null,S(),setTimeout((()=>{F(r),E()})))})),m((()=>{o&&o.modelValue&&l&&l()}));const j=a=>{e("update:modelValue",a)},[y,{validate:V,setFieldsValue:P,resetFields:S,clearValidate:E,resetSchema:F}]=d(i({labelCol:{span:5},wrapperCol:{span:15},schemas:r,showSubmitButton:!1,showResetButton:!1},s)),x=()=>{c(D).reload()};return B=i({cbTableRef:D,getEditId:v,getEdit:O,finish:()=>{j(!1),x(),e("reload")},handlePopup:j,openEdit:e=>{g.editData=e,f((()=>{g.showDialog=!0}))}},h(g)),a(B,t({register:y,validate:V,setFieldsValue:P,resetFields:S,clearValidate:E,resetSchema:F,reload:x}));var B}export{w as u};
