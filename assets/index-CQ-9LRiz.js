import{j as e,r as l}from"./react-BnPm9wb_.js";import{c as S}from"./react-dom-DYNU6g6u.js";import{u as E,F as P,c as R,r as d,R as I}from"./react-router-BDDVPUnb.js";import{s as L,B as b,a as f,b as w,y,c as x,D as B,L as T,d as O,e as M,S as A,T as C,f as v,F as K,g as W,h as m,K as G,i as g,u as U,j as $,o as N,p as z,k as V,l as Y,C as q,G as H}from"./@mui-COJWigaB.js";import{u,i as _}from"./react-i18next-h9pYPD0i.js";import{M as J}from"./react-markdown-DtoaEKes.js";import{i as Q}from"./i18next-D9VJDghF.js";import{B as X}from"./i18next-browser-languagedetector-Dt8Tv9E6.js";import{B as Z}from"./i18next-http-backend-BQ8CnAnL.js";import"./cookie-CY119PWS.js";import"./scheduler-CVuzH2gT.js";import"./@emotion-DFTOeMkB.js";import"./hoist-non-react-statics-mLZj6LgC.js";import"./@babel-DuB8yAtz.js";import"./stylis-YPZU7XtI.js";import"./clsx-B-dksMZM.js";import"./react-transition-group-D-SYIVPg.js";import"./@popperjs-BQBsAJpH.js";import"./devlop-Cl3hj7Sz.js";import"./unified-CluKEuun.js";import"./bail-FqpXQuLt.js";import"./extend-BnPiUTya.js";import"./is-plain-obj-C1gvLhAf.js";import"./trough-B_b8ryxu.js";import"./vfile-tbz-BywF.js";import"./vfile-message-Bq256rVA.js";import"./unist-util-stringify-position-Ch_qCilz.js";import"./remark-parse-BrXu98zB.js";import"./mdast-util-from-markdown-CeHMh-rK.js";import"./micromark-util-decode-numeric-character-reference-CNs1qBpV.js";import"./micromark-util-decode-string-strjl-tx.js";import"./decode-named-character-reference-C3-224fz.js";import"./micromark-util-normalize-identifier-C9ANKk3v.js";import"./micromark-DTlTLvYZ.js";import"./micromark-util-combine-extensions-Bka6Sc1c.js";import"./micromark-util-chunked-DrRIdSP-.js";import"./micromark-factory-space-CA-Wq7KA.js";import"./micromark-util-character-Ch8j4vtg.js";import"./micromark-core-commonmark-DGH4vyL8.js";import"./micromark-util-classify-character-GCpR5yWH.js";import"./micromark-util-resolve-all-PQCKh0dx.js";import"./micromark-util-subtokenize-Bdv1B1ce.js";import"./micromark-factory-destination-CkgxUJuk.js";import"./micromark-factory-label-U15tx9Nh.js";import"./micromark-factory-title-reCpaPbc.js";import"./micromark-factory-whitespace-_v4v79HM.js";import"./micromark-util-html-tag-name-DbKNfynz.js";import"./mdast-util-to-string-C_aolqmU.js";import"./remark-rehype-1Bk2Q172.js";import"./mdast-util-to-hast-BfaRxxVW.js";import"./@ungap-DDJC10qW.js";import"./micromark-util-sanitize-uri-WGc3xW3f.js";import"./unist-util-position-60F3QETU.js";import"./trim-lines-D8znQY54.js";import"./unist-util-visit-DGoE-dKL.js";import"./unist-util-visit-parents-BC5uWo4u.js";import"./unist-util-is-D9KQvrmg.js";import"./hast-util-to-jsx-runtime-CIr4C-_b.js";import"./comma-separated-tokens-xMQ5YY98.js";import"./property-information-C2mYTYrW.js";import"./space-separated-tokens-DD3iYX1K.js";import"./style-to-object-_-WvGY_D.js";import"./inline-style-parser-D4u_cg7q.js";import"./hast-util-whitespace-D4Wp6AEg.js";import"./estree-util-is-identifier-name-BgBfM8ME.js";import"./html-url-attributes-D46m5wfe.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const ee=L("p")({textIndent:24}),te={p:({node:o,children:n,...r})=>e.jsx(ee,{...r,children:n})},re=o=>{const{children:n}=o,{i18n:r}=u(),i=r.language==="en"?"ibm plex serif":"noto serif thai";return e.jsx(b,{overflow:"auto",sx:{fontFamily:i,wordWrap:"break-word",whiteSpace:"wrap"},children:e.jsx(J,{components:te,children:n})})},oe=async(o,n,r)=>{const i=await crypto.subtle.importKey("raw",new TextEncoder().encode(r),"PBKDF2",!1,["deriveKey"]),t=await crypto.subtle.deriveKey({name:"PBKDF2",salt:new TextEncoder().encode("unique-salt"),iterations:1e5,hash:"SHA-256"},i,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"]),a=Uint8Array.from(atob(o),c=>c.charCodeAt(0)),s=Uint8Array.from(atob(n),c=>c.charCodeAt(0)),h=await crypto.subtle.decrypt({name:"AES-GCM",iv:s},t,a);return new TextDecoder().decode(h)},ne="/project-new-year-card-2025/assets/images/hero2.jpg",ae=new Date(2025,0,1),ie=()=>{const{content:o,id:n}=E(),{t:r}=u(),[i,t]=l.useState(!1),[a,s]=l.useState(o),[h,c]=l.useState(""),D=()=>{t(!0)},j=async()=>oe(o,n,h).then(p=>s(p)).finally(()=>{c(""),t(!1)}),k=Date.now()/1e3,F=ae.getTime()/1e3-k;return e.jsxs(l.Fragment,{children:[e.jsxs(f,{width:"100%",sx:{backgroundColor:w(y[100],.5)},children:[e.jsx(f,{component:"img",width:"100%",loading:"eager",src:ne,sx:{border:"none",objectFit:"cover",objectPosition:"0% 70%",height:"45vh"}}),e.jsxs(f,{padding:4,sx:{color:x[700],margin:"auto",maxWidth:"md"},children:[e.jsx(re,{children:a}),e.jsx(B,{flexItem:!0,variant:"middle",children:e.jsx(T,{color:"primary"})})]})]}),e.jsx(O,{fullWidth:!0,disableRestoreFocus:!0,open:i,onClose:()=>t(!1),maxWidth:"md",slotProps:{backdrop:{sx:{backdropFilter:"blur(5px)"}}},children:e.jsx(M,{children:e.jsxs(A,{spacing:1,children:[e.jsx(C,{autoFocus:!0,value:h,fullWidth:!0,placeholder:r("passcode"),onChange:p=>c(p.target.value),onKeyDown:p=>{p.key==="Enter"&&j()},slotProps:{htmlInput:{sx:{fontFamily:"Ubuntu Mono"},autoCapitalize:"off",autoComplete:"off"}}}),e.jsx(v,{disableElevation:!0,disableRipple:!0,variant:"contained",onClick:j,disabled:F>0,sx:{maxWidth:"fit-content"},children:r("unlock")})]})})}),e.jsx(K,{disableRipple:!0,color:"primary",onClick:D,sx:{position:"fixed",bottom:32,left:32},children:e.jsx(W,{placement:"left",title:e.jsx(m,{children:r("unscramble")}),children:e.jsx(G,{})})})]})},se=()=>{const{i18n:o}=u();return e.jsxs(g,{spacing:1,useFlexGap:!0,direction:"row",flexWrap:"wrap",divider:e.jsx(m,{children:"/"}),children:[e.jsx(m,{variant:"caption",sx:{cursor:"pointer",textDecorationLine:"underline"},onClick:()=>o.changeLanguage("en"),children:"EN"}),e.jsx(m,{variant:"caption",sx:{cursor:"pointer",textDecorationLine:"underline"},onClick:()=>o.changeLanguage("th"),children:"TH"})]})},ce=()=>{const{t:o}=u(),{shape:n,palette:r}=U(),[i,t]=l.useState(""),a=i.normalize().trim().length===0;return e.jsx(b,{sx:{color:r.secondary.main,width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:`linear-gradient(to bottom right, ${y[50]}, ${$[50]}, ${N[100]}, ${z[100]})`},children:e.jsx(P,{action:"/card",method:"get",children:e.jsxs(g,{useFlexGap:!0,padding:8,spacing:2,sx:{margin:"auto",maxWidth:"md",height:"100%",padding:8,borderRadius:n.borderRadius,backgroundColor:w(r.secondary.light,.5)},children:[e.jsx(m,{variant:"h4",component:"h1",fontFamily:"inherit",children:o("newYearCard")}),e.jsx(C,{placeholder:o("cardId"),name:"id",value:i,onChange:s=>t(s.target.value),fullWidth:!0,slotProps:{input:{sx:{backgroundColor:"white"}},htmlInput:{autoCapitalize:"off",autoComplete:"off",autoSave:"off",sx:{fontFamily:"Ubuntu Mono"}}}}),e.jsxs(g,{useFlexGap:!0,width:"100%",spacing:2,direction:"row",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"space-between",children:[e.jsx(v,{disableRipple:!0,disableElevation:!0,disabled:a,variant:"contained",type:"submit",sx:{color:r.secondary.light},children:o("open")}),e.jsx(se,{})]})]})})})},de=V({typography:{fontSize:16},palette:{primary:{dark:"#3f2f9d",main:"#6a5acd",light:"#9c92dd"},secondary:{dark:x[700],main:x[400],light:y[50]}}}),le=de,pe="/project-new-year-card-2025/",me=R([{path:"/",element:e.jsx(ce,{})},{path:"/card",loader:({request:o})=>{const r=new URL(o.url).searchParams;return console.log(r.has("id")),r.has("id")?d(`/card/${r.get("id")}`):d("/")}},{path:"/card/:id",element:e.jsx(ie,{}),loader:async({params:o})=>{const{id:n}=o;if(n===void 0)return d("/");const r=await fetch(`${pe}assets/content/${n}.enc`);if(!r.ok)return d("/");if(r.headers.has("content-type"))return d("/");const i=await r.text();return{id:n,content:i}}},{path:"*",loader:()=>d("/")}],{basename:"/project-new-year-card-2025/"}),ue=()=>{const{i18n:o}=u();return e.jsxs(Y,{theme:le,children:[e.jsx(q,{}),e.jsx(H,{styles:{body:{fontFamily:o.language==="en"?"ibm plex mono":"noto serif thai"}}}),e.jsx(I,{router:me})]})},he={translation:{cardId:"Card ID",open:"Open",passcode:"Pass code",newYearCard:"New Year Greetings 2025",unlock:"Unlock",unscramble:"Unscramble",unknownCardIdGiven:"Cannot find card with given ID"}},fe={translation:{cardId:"หมายเลขส.ค.ส.",open:"เปิด",newYearCard:"ส่งความสุข พุทธศักราช ๒๕๖๘"}};Q.use(Z).use(X).use(_).init({detection:{lookupLocalStorage:"language"},debug:!0,interpolation:{escapeValue:!1},resources:{en:he,th:fe}});S.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(ue,{})}));
//# sourceMappingURL=index-CQ-9LRiz.js.map