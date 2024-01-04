var e=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(n,a,l)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l;import{c,f as i}from"./index.a35ddce3.js";import{u as t}from"./useBasicForm.a463284a.js";import{_ as s,a as p}from"./index.a7987ea2.js";import{d as r,r as u,o as d,h as m,i as _,c as g,f as h,w as y,b as f,u as b,g as v,E as k}from"./vendor.1bc4be78.js";const w=[{field:"client_id",component:"Input",label:"公众号AppId",required:!0,componentProps:{placeholder:"请输入公众号AppId"}},{field:"client_secret",component:"Input",label:"公众号Secret",required:!0,componentProps:{placeholder:"请输入公众号Secret"}}],I=[{field:"client_id",component:"Input",label:"网站应用AppId",required:!0,componentProps:{placeholder:"请输入应用AppId"}},{field:"client_secret",component:"Input",label:"网站应用Secret",required:!0,componentProps:{placeholder:"请输入应用Secret"}}],P=[{field:"login_type",component:"RadioGroup",label:"登陆方式",required:!0,componentProps:{options:[{label:"用户名/密码登录",value:"1"},{label:"微信登陆",value:"2"}]}},{field:"mobile_verify",component:"Switch",label:"手机号验证",required:!0}],S=[{field:"channel",component:"RadioGroup",label:"渠道",required:!0,componentProps:{options:[{label:"GPTLink",value:"gptlink"},{label:"创蓝短信",value:"chuanglan"},{label:"阿里云",value:"aliyun"}]}},{field:"gptlink_api_key",component:"Input",label:"API密钥",required:!0,componentProps:{placeholder:"请填写GPTLink 密钥"},ifShow:({values:e})=>"gptlink"===e.channel},{field:"gptlink_sign",component:"Input",label:"短信签名",required:!1,componentProps:{value:"AiLink",disabled:!0},ifShow:({values:e})=>"gptlink"===e.channel},{field:"chuanglan_account",component:"Input",label:"账号",required:!0,componentProps:{placeholder:"请输入账号"},ifShow:({values:e})=>"chuanglan"===e.channel},{field:"chuanglan_password",component:"Input",label:"密码",required:!0,componentProps:{placeholder:"请输入密码"},ifShow:({values:e})=>"chuanglan"===e.channel},{field:"chuanglan_sign",component:"Input",label:"短信签名",required:!0,componentProps:{placeholder:"请输入签名"},ifShow:({values:e})=>"chuanglan"===e.channel},{field:"aliyun_access_key_id",component:"Input",label:"AccessKey ID",required:!0,componentProps:{placeholder:"请输入 AccessKey ID"},ifShow:({values:e})=>"aliyun"===e.channel},{field:"aliyun_access_key_secret",component:"Input",label:"AccessKey Secret",required:!0,componentProps:{placeholder:"请输入 AccessKey Secret"},ifShow:({values:e})=>"aliyun"===e.channel},{field:"aliyun_sign_name",component:"Input",label:"短信签名",required:!0,componentProps:{placeholder:"输入短信签名"},ifShow:({values:e})=>"aliyun"===e.channel},{field:"aliyun_template",component:"Input",label:"短信模版Code",required:!0,componentProps:{placeholder:"示例值：SMS_100101。模版可用变量： 验证码 ${code}"},ifShow:({values:e})=>"aliyun"===e.channel}];const q={class:"cb-page open"},A={class:"cb-m-b-40"},j={class:"cb-m-l-60"},C=v("确认");var V=s(r({__name:"wechat",setup(e){const s=u("13"),r=u([{value:"13",name:"登陆配置"},{value:"1",name:"微信公众号"},{value:"3",name:"微信网站应用"},{value:"4",name:"短信配置"}]),{register:v,validate:V,setFieldsValue:O,resetFields:G,setProps:K}=t({options:{labelCol:{span:6},wrapperCol:{span:6}},schemas:P});d((()=>{x()}));const R=e=>{G();K({schemas:{1:w,3:I,4:S,13:P}[e]}),setTimeout((()=>{x()}),50)},T=async()=>{try{const e=await V(),n="4"!==s.value?{type:s.value,config:e}:{type:s.value,config:{channel:e.channel,gptlink:{api_key:e.gptlink_api_key,sign:e.gptlink_sign},chuanglan:{account:e.chuanglan_account,password:e.chuanglan_password,sign:e.chuanglan_sign},aliyun:{access_key_id:e.aliyun_access_key_id,access_key_secret:e.aliyun_access_key_secret,sign_name:e.aliyun_sign_name,template:e.aliyun_template}}},{err_code:a}=await p().open.openConfig(n);a||k.success("保存成功")}catch(e){}},x=async()=>{try{const{data:e}=await p().open.getConfig({type:s.value});"4"===s.value&&(e.config={channel:e.config.channel,gptlink_api_key:e.config.gptlink.api_key,gptlink_sign:e.config.gptlink.sign,chuanglan_account:e.config.chuanglan.account,chuanglan_password:e.config.chuanglan.password,chuanglan_sign:e.config.chuanglan.sign,aliyun_access_key_id:e.config.aliyun.access_key_id,aliyun_access_key_secret:e.config.aliyun.access_key_secret,aliyun_sign_name:e.config.aliyun.sign_name,aliyun_template:e.config.aliyun.template}),O(((e,c)=>{for(var i in c||(c={}))a.call(c,i)&&o(e,i,c[i]);if(n)for(var i of n(c))l.call(c,i)&&o(e,i,c[i]);return e})({},e.config))}catch(e){}};return(e,n)=>{const a=m("CbTab"),l=m("el-button"),o=m("el-card");return _(),g("div",q,[h(o,{class:"open-main"},{default:y((()=>[f("div",A,[h(a,{tabs:r.value,modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=e=>s.value=e),onChange:R},null,8,["tabs","modelValue"])]),h(b(c),{onRegister:b(v)},{agreement:y((({model:e,field:n})=>[h(b(i),{modelValue:e[n],"onUpdate:modelValue":a=>e[n]=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1},8,["onRegister"]),f("div",j,[h(l,{type:"primary",onClick:T},{default:y((()=>[C])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-b381e582"]]);export{V as default};
