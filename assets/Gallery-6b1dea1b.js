import{d as p,_ as d,o,c as a,F as u,r as m,a as y,e as i,f as v,g as $}from"./index-c0140f66.js";import{i as w}from"./common-fc065acd.js";const h=p({name:"MasonryRow",props:{data:{type:Array,default:()=>[]}},setup(){return{}}});const R={class:"masonry__row"},M=["src"];function k(s,t,c,_,n,l){return o(),a("ul",R,[(o(!0),a(u,null,m(s.data,(e,r)=>(o(),a("li",{class:"masonry__image-wrapper",key:e+r},[y("img",{src:`images/gallery/${e}`,class:"masonry__image",loading:"lazy",alt:"demo image"},null,8,M)]))),128))])}const f=d(h,[["render",k],["__scopeId","data-v-72f46566"],["__file","D:/OpenServer/domains/portfolio/vue-3-portfolio/src/components/partials/MasonryRow.vue"]]),x=p({name:"Gallery",components:{MasonryRow:f},setup(){const s=i(w),t=i([]),c=(_=[],n=6)=>{let l=n;for(let e=0;e<_.length;e+=n,l+=n){const r=_.slice(e,l);t.value.push(r)}};return v(()=>{c(s.value,6)}),{imagesSource:s,masonryRows:t}}});const B={class:"section"},G={class:"masonry"};function S(s,t,c,_,n,l){const e=f;return o(),a("div",B,[y("ul",G,[(o(!0),a(u,null,m(s.masonryRows,(r,g)=>(o(),a("li",{class:"masonry__item",key:g},[$(e,{data:r},null,8,["data"])]))),128))])])}const C=d(x,[["render",S],["__scopeId","data-v-0d193b19"],["__file","D:/OpenServer/domains/portfolio/vue-3-portfolio/src/pages/Gallery.vue"]]);export{C as default};
