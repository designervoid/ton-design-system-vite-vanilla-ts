// @ts-ignore
import '@designervoid/ton-design-system/src/index.css';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <header class="header"><a><span class="text-regular"> TON Creation </span></a></header>
  <main class="content">
    <div class="container">
        <div class="row d-flex justify-content-center m-1">
          <div class="card d-flex justify-content-center align-items-center"><span class="text-black"> Text Black </span></div>
          <div class="card d-flex justify-content-center align-items-center bg-dark m-l-1"><span class="text-black"><span class="text-white"> Text Black White </span></span></div>
        </div>
        <div class="row d-flex justify-content-center m-1">
          <div class="card d-flex justify-content-center align-items-center"><span class="text-bold"> Text Bold </span></div>
          <div class="card d-flex justify-content-center align-items-center bg-dark m-l-1"><span class="text-bold"><span class="text-white"> Text Bold White </span></span></div>
        </div>
        <div class="row d-flex justify-content-center m-1">
          <div class="card d-flex justify-content-center align-items-center"><span class="text-regular"> Text Regular Black </span></div>
          <div class="card d-flex justify-content-center align-items-center bg-dark m-l-1"><span class="text-regular"><span class="text-white"> Text Regular White </span></span></div>
        </div>
        <div class="row d-flex justify-content-center m-1">
          <div class="card d-flex justify-content-center align-items-center">
              <details class="details-holder m-1">
                <summary>
                    <div class="holder-tg-nickname"><span class="holders-header-text text-bold">Previous owners</span></div>
                </summary>
                <main>
                    <div class="holder">
                      <span class="holder-tg-nickname">@nickname <span class="hold-state-price">2 💎</span></span>
                      <div class="holder-ton-wallet-address"><span class="hash">hash</span></div>
                    </div>
                    <div class="holder">
                      <span class="holder-tg-nickname">@nickname <span class="hold-state-price">3 💎</span></span>
                      <div class="holder-ton-wallet-address"><span class="hash">hash</span></div>
                    </div>
                    <div class="holder">
                      <span class="holder-tg-nickname">@nickname <span class="hold-state-price">5 💎</span></span>
                      <div class="holder-ton-wallet-address"><span class="hash">hash</span></div>
                    </div>
                </main>
              </details>
          </div>
          <div class="card d-flex justify-content-center align-items-center bg-dark m-l-1">
              <details class="details-holder m-1">
                <summary>
                    <div class="holder-tg-nickname"><span class="holders-header-text text-bold">Previous owners</span></div>
                </summary>
                <main>
                    <div class="holder">
                      <span class="holder-tg-nickname">@nickname <span class="hold-state-price">2 💎</span></span>
                      <div class="holder-ton-wallet-address"><span class="hash">hash</span></div>
                    </div>
                    <div class="holder">
                      <span class="holder-tg-nickname">@nickname <span class="hold-state-price">3 💎</span></span>
                      <div class="holder-ton-wallet-address"><span class="hash">hash</span></div>
                    </div>
                    <div class="holder">
                      <span class="holder-tg-nickname">@nickname <span class="hold-state-price">5 💎</span></span>
                      <div class="holder-ton-wallet-address"><span class="hash">hash</span></div>
                    </div>
                </main>
              </details>
          </div>
        </div>
        <div class="row d-flex justify-content-center m-1">
          <div class="card d-flex justify-content-center align-items-center">
              <div class="logo"><img src="/icons/gem-logo-light.svg" alt="gem-logo-light"></div>
          </div>
          <div class="card d-flex justify-content-center align-items-center bg-dark m-l-1">
              <div class="logo"><img src="/icons/gem-logo-dark.svg" alt="gem-logo-dark"></div>
          </div>
        </div>
        <div class="row d-flex justify-content-center m-1">
          <div class="card d-flex justify-content-center align-items-center">
              <div class="logo"><img src="/icons/gem-symbol.svg" alt="gem-symbol"></div>
          </div>
          <div class="card d-flex justify-content-center align-items-center bg-dark m-l-1">
              <div class="logo"><img src="/icons/gem-symbol.svg" alt="gem-symbol"></div>
          </div>
        </div>
        <div class="row d-flex justify-content-center m-1">
          <div class="card d-flex justify-content-center align-items-center">
              <div class="logo"><img src="/icons/ton-logo-light.svg" alt="ton-logo-light"></div>
          </div>
          <div class="card d-flex justify-content-center align-items-center bg-dark m-l-1">
              <div class="logo"><img src="/icons/ton-logo-dark.svg" alt="ton-logo-dark"></div>
          </div>
        </div>
        <div class="row d-flex justify-content-center m-1">
          <div class="card d-flex justify-content-center align-items-center">
              <div class="logo"><img src="/icons/ton-symbol.svg" alt="ton-symbol"></div>
          </div>
          <div class="card d-flex justify-content-center align-items-center bg-dark m-l-1">
              <div class="logo"><img src="/icons/ton-symbol.svg" alt="ton-symbol"></div>
          </div>
        </div>
    </div>
  </main>
  <footer class="footer"><a class="d-flex align-items-center"><span class="text-regular"> Based on </span><img class="w-20 m-l-1" src="/icons/ton-logo-light.svg" alt="Logo"></a></footer>
`
