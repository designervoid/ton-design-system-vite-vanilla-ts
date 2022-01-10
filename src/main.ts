// @ts-ignore
import {registerCustomElements} from '@designervoid/ton-design-system/dist/index.es.js';
import '@designervoid/ton-design-system/src/assets/styles/global.css';

registerCustomElements();

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <button-primary></button-primary>
  <spacing-block type="top" payload="12"></spacing-block>
  <button-outline></button-outline>
  <spacing-block type="top" payload="12"></spacing-block>
`
