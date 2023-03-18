import{_ as l,r as u,w as d,b as a,d as e,i as c,v as y,F as w,o as s}from"./bundle.js";const v={props:{qty:{type:Number,required:!0},loading:{type:Boolean,required:!1,default:!1},decreaseQuantity:{type:Function,required:!0},increaseQuantity:{type:Function,required:!0},updateQuantity:{type:Function,required:!0}},setup(r,t){const n=u(r.qty);return d(()=>r.qty,o=>{n.value=o}),{quantity:n}}},m=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-10 h-10"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"})],-1),p=[m],h={key:0,class:"w-16 text-center h-6"},k=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 m-auto animate-spin"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"})],-1),x=[k],f=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-10 h-10"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})],-1),q=[f];function _(r,t,n,o,g,b){return s(),a(w,null,[e("button",{type:"button",class:"text-ink hover:text-accent2 py-3 px-1 transition duration-150 ease-in-out","aria-label":"decrease quantity",onClick:t[0]||(t[0]=i=>n.decreaseQuantity(o.quantity))},p),n.loading?(s(),a("div",h,x)):c((s(),a("input",{key:1,class:"w-16 text-center text-ink bg-white border-ink focus:outline-none focus:ring-2",type:"number",ref:"itemQuantity","onUpdate:modelValue":t[1]||(t[1]=i=>o.quantity=i),onChange:t[2]||(t[2]=i=>n.updateQuantity(o.quantity)),min:"1","aria-label":"quantity"},null,544)),[[y,o.quantity]]),e("button",{type:"button",class:"text-ink hover:text-accent2 py-3 px-1 transition duration-150 ease-in-out","aria-label":"increase quantity",onClick:t[3]||(t[3]=i=>n.increaseQuantity(o.quantity))},q)],64)}const Q=l(v,[["render",_],["__file","/Users/latiosaxe/code/myntr/base-theme-2023/src/vue/components/render/Quantity.vue"]]);export{Q as default};