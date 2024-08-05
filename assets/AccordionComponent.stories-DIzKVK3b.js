import{j as t}from"./jsx-runtime-CGpYA4L6.js";import{R as r}from"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";class i extends r.Component{constructor(s){super(s),this.state={isToggleOn:!1},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(s=>({isToggleOn:!s.isToggleOn}))}render(){return t.jsxs("p",{onClick:this.handleClick,className:"accordionComponent",children:[t.jsx("b",{children:this.props.title}),t.jsx("br",{}),t.jsx("span",{hidden:this.state.isToggleOn,children:this.props.text})]})}}const p={component:i},e={args:{title:"Заголовок компонента",text:"Схлопывающийся текст"}};var u,o,n;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Заголовок компонента",
    text: "Схлопывающийся текст"
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const h=["Accordion"];export{e as Accordion,h as __namedExportsOrder,p as default};
