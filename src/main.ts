// @ts-ignore
import {registerCustomElements, getAllCustomElementsNames} from '@designervoid/ton-design-system/dist/index.es.js';
import '@designervoid/ton-design-system/src/assets/styles/global.css';

registerCustomElements();
getAllCustomElementsNames();

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <layout-element>
    <main slot="content">
        <card-light>
          <div slot="content">
            <button-primary link="https://t.me"></button-primary>
          </div>
        </card-light>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <button-outline link="https://github.com"></button-outline>
          </div>
        </card-light>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <text-black>
              <span slot="text">text black</span>
            </text-black>
          </div>
        </card-light>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <text-bold>
              <span slot="text">text bold</span>
            </text-bold>
          </div>
        </card-light>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <text-regular>
              <span slot="text">text regular</span>
            </text-regular>
          </div>
        </card-light>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-dark>
          <div slot="content">
            <text-white>
              <span slot="text">text white</span>
            </text-white>
          </div>
        </card-dark>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-dark>
          <div slot="content">
            <ton-logo-dark></ton-logo-dark>
          </div>
        </card-dark>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <ton-logo-light></ton-logo-light>
          </div>
        </card-light>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <ton-symbol></ton-symbol>
          </div>
        </card-light>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-dark>
          <div slot="content">
            <gem-logo-dark></gem-logo-dark>
          </div>
        </card-dark>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <gem-logo-light></gem-logo-light>
          </div>
        </card-light>
        <spacing-block type="top" payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <gem-symbol></gem-symbol>
          </div>
        </card-light>
    </main>
  </layout-element>
`
