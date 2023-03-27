import{d as v,g as k,_ as b,r as m,D as h,a as r,b as l,F as C,n as y,t as c,e as g,w as _,u as P,o as s,y as w}from"./_plugin-vue_export-helper.js";const D=v({id:"product",state:()=>({isLoading:!1,error:null,media:[],activeColor:null}),getters:{isProductInCart(){},getImagesPerColor(){return this.media.filter(e=>e.alt.includes(this.activeColor))}},actions:{setActiveColor(e){this.activeColor=e},setAllProductMedia(e){this.media=e}}}),S=D,M=k({name:"product-hero",props:{shopifyData:{type:Object,required:!0}},setup(e){const{variant_id:a,options:d}=e.shopifyData,i=S(),u=m({Color:d[0].values[0]});let p=m(!1);function t(o,n){n.name==="Color"&&i.setActiveColor(h(o))}return{product:i,errorMessage:p,selectedOptions:u,slugify:h,changeOption:t,handleClick:async o=>{if(o.preventDefault(),!a)return;await P().addToCart({id:a,quantity:1,properties:{ink:"red"}})}}}}),O={key:0},$={class:"swatches-container"},A=["onClick"],j={key:0,class:"text-md mt-2 text-error"};function B(e,a,d,i,u,p){return e.shopifyData?(s(),r("div",O,[l("div",$,[(s(!0),r(C,null,y(e.shopifyData.options,(t,f)=>(s(),r("div",{key:f},[l("p",null,c(t.name),1),(s(!0),r(C,null,y(t.values,(o,n)=>(s(),r("button",{key:n,class:w(["swatch mr-5 p-4",[e.product.activeColor===e.slugify(o)?"bg-black text-white":"bg-grey"]]),onClick:q=>e.changeOption(o,t)},c(o),11,A))),128))]))),128))]),e.errorMessage?(s(),r("p",j,c(e.errorMessage),1)):g("v-if",!0),l("button",{type:"button",onClick:a[0]||(a[0]=_((...t)=>e.handleClick&&e.handleClick(...t),["prevent"])),class:"mt-10 block w-full transform rounded-3xl bg-black px-4 py-3 text-center font-medium text-white transition-colors duration-300 focus:outline-none"}," Add to Cart! ")])):g("v-if",!0)}const H=b(M,[["render",B],["__file","/Users/latiosaxe/code/myntr/base-theme-2023/src/vue/components/render/ProductHero.vue"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{H as P,z as a,S as u};
