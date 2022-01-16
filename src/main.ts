// @ts-ignore
import {registerCustomElements, getAllCustomElementsNames} from '@designervoid/ton-design-system/dist/index.es.js';
import '@designervoid/ton-design-system/src/assets/styles/global.css';

registerCustomElements();
getAllCustomElementsNames();

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <layout-element>
    <main slot="content">
      <button-primary></button-primary>
      <spacing-block type="top" payload="12"></spacing-block>
      <button-outline></button-outline>
      <spacing-block type="top" payload="12"></spacing-block>
    </main>
  </layout-element>
`
