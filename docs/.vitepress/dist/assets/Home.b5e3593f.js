import{e as a,u as e,f as t,g as s,h as l,o,c as i,b as c,i as n,t as r,_ as v,j as u,p as f,k as d,F as m,l as p,r as h,m as k}from"./app.e36df3f6.js";const x=u("data-v-4441d834");f("data-v-4441d834");const b={key:0,class:"home-hero"},y={key:0,class:"figure"},g={key:1,id:"main-title",class:"title"},$={key:2,class:"description"};d();var _=a({expose:[],setup(a){const u=e(),f=t(),d=s((()=>f.value.heroImage||m.value||h.value||_.value)),m=s((()=>null!==f.value.heroText)),p=s((()=>f.value.heroText||u.value.title)),h=s((()=>null!==f.value.tagline)),k=s((()=>f.value.tagline||u.value.description)),_=s((()=>f.value.actionLink&&f.value.actionText)),I=s((()=>f.value.altActionLink&&f.value.altActionText));return x(((a,e)=>l(d)?(o(),i("header",b,[a.$frontmatter.heroImage?(o(),i("figure",y,[c("img",{class:"image",src:a.$withBase(a.$frontmatter.heroImage),alt:a.$frontmatter.heroAlt},null,8,["src","alt"])])):n("v-if",!0),l(m)?(o(),i("h1",g,r(l(p)),1)):n("v-if",!0),l(h)?(o(),i("p",$,r(l(k)),1)):n("v-if",!0),l(_)?(o(),i(v,{key:3,item:{link:l(f).actionLink,text:l(f).actionText},class:"action"},null,8,["item"])):n("v-if",!0),l(I)?(o(),i(v,{key:4,item:{link:l(f).altActionLink,text:l(f).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)))}});_.__scopeId="data-v-4441d834";const I=u("data-v-a958fc0e");f("data-v-a958fc0e");const T={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},j={class:"features"},w={key:0,class:"title"},B={key:1,class:"details"};d();var C=a({expose:[],setup(a){const e=t(),v=s((()=>e.value.features&&e.value.features.length>0)),u=s((()=>e.value.features?e.value.features:[]));return I(((a,e)=>l(v)?(o(),i("div",T,[c("div",A,[c("div",L,[c("div",j,[(o(!0),i(m,null,p(l(u),((a,e)=>(o(),i("section",{key:e,class:"feature"},[a.title?(o(),i("h2",w,r(a.title),1)):n("v-if",!0),a.details?(o(),i("p",B,r(a.details),1)):n("v-if",!0)])))),128))])])])])):n("v-if",!0)))}});C.__scopeId="data-v-a958fc0e";const F={},q=u("data-v-ab185b42");f("data-v-ab185b42");const z={key:0,class:"footer"},D={class:"container"},E={class:"text"};d();const G=q(((a,e)=>a.$frontmatter.footer?(o(),i("footer",z,[c("div",D,[c("p",E,r(a.$frontmatter.footer),1)])])):n("v-if",!0)));F.render=G,F.__scopeId="data-v-ab185b42";const H=u("data-v-cb95733a");f("data-v-cb95733a");const J={class:"home","aria-labelledby":"main-title"},K={class:"home-content"};d();var M=a({expose:[],setup:a=>H(((a,e)=>{const t=h("Content");return o(),i("main",J,[c(_),k(a.$slots,"hero"),c(C),c("div",K,[c(t)]),k(a.$slots,"features"),c(F),k(a.$slots,"footer")])}))});M.__scopeId="data-v-cb95733a";export default M;
