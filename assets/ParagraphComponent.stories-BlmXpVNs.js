import{j as x}from"./jsx-runtime-CGpYA4L6.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const u=({type:o,text:y})=>{let e;switch(o){case"quote":{e="paragraphComponent-quote";break}case"bold":{e="paragraphComponent-bold";break}default:{e="paragraphComponent";break}}return x.jsx("p",{className:e,children:y})};try{u.displayName="ParagraphComponent",u.__docgenInfo={description:"",displayName:"ParagraphComponent",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"any"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}}}}}catch{}const f={component:u},r={args:{text:"Обычный параграф"}},a={args:{type:"bold",text:"Получжирный параграф"}},t={args:{type:"quote",text:"Цитатный параграф"}};var s,n,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: "Обычный параграф"
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: "bold",
    text: "Получжирный параграф"
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,i,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: "quote",
    text: "Цитатный параграф"
  }
}`,...(g=(i=t.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const B=["Normal","Bold","Italic"];export{a as Bold,t as Italic,r as Normal,B as __namedExportsOrder,f as default};
