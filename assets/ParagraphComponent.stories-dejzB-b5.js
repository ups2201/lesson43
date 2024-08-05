import{j as s}from"./jsx-runtime-j_jdvEMj.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=({type:t,text:o})=>{let e;switch(t){case"quote":{e="paragraphComponent-quote";break}case"bold":{e="paragraphComponent-bold";break}default:{e="paragraphComponent";break}}return s.jsx("p",{className:e,children:o})},d={component:n},r={args:{text:"Обычный параграф"}},u={args:{type:"bold",text:"Получжирный параграф"}},a={args:{type:"quote",text:"Цитатный параграф"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Обычный параграф"
  }
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "bold",
    text: "Получжирный параграф"
  }
}`,...u.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "quote",
    text: "Цитатный параграф"
  }
}`,...a.parameters?.docs?.source}}};const l=["Normal","Bold","Italic"];export{u as Bold,a as Italic,r as Normal,l as __namedExportsOrder,d as default};
