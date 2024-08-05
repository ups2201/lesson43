import{j as t}from"./jsx-runtime-j_jdvEMj.js";import{R as u}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";class o extends u.Component{constructor(s){super(s),this.state={isToggleOn:!1},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(s=>({isToggleOn:!s.isToggleOn}))}render(){return t.jsxs("p",{onClick:this.handleClick,className:"accordionComponent",children:[t.jsx("b",{children:this.props.title}),t.jsx("br",{}),t.jsx("span",{hidden:this.state.isToggleOn,children:this.props.text})]})}}const c={component:o},e={args:{title:"Заголовок компонента",text:"Схлопывающийся текст"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Заголовок компонента",
    text: "Схлопывающийся текст"
  }
}`,...e.parameters?.docs?.source}}};const l=["Accordion"];export{e as Accordion,l as __namedExportsOrder,c as default};
