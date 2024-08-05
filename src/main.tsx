import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {AccordionComponent} from "./stories/AccordionComponent";
import {HeaderComponent} from "./stories/HeaderComponent";
import {SpaceBlockComponent} from "./stories/SpaceBlockComponent";
import {ParagraphComponent} from "./stories/ParagraphComponent";
import {ImageComponent} from "./stories/ImageComponent";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/*<HeaderComponent level={1} text="Заголовок h1"/>*/}
    {/*<HeaderComponent level={2} text={"Заголовок h2"}/>*/}
    {/*<HeaderComponent level={3} text="Заголовок h3"/>*/}
    <AccordionComponent title="Заголовок AccordionComponent" text="Коспонент типа AccordionComponent"/>
      <ParagraphComponent type="quote" text={"Компонент ParagraphComponent"}/>
      <ParagraphComponent type="bold" text={"Компонент ParagraphComponent"}/>
      <ParagraphComponent text={"Компонент ParagraphComponent"}/>
      wdasdsads<ImageComponent type={"left"} src={"./src/stories/image.PNG"}/>asdasadsdas
      <br/>
      <br/>
      wdasdsads<ImageComponent type={"right"} src={"./src/stories/image.PNG"}/>asdasadsdas
    {/*<SpaceBlockComponent/>*/}
  </React.StrictMode>,
)
