var e=matchMedia(`(prefers-reduced-motion: reduce)`).matches,t=class{root;timers=[];constructor(e){this.root=e}q(e){return this.root.querySelector(e)}qa(e){return[...this.root.querySelectorAll(e)]}later(e,t){this.timers.push(window.setTimeout(t,e))}on(e,t=`on`){this.qa(e).forEach(e=>e.classList.add(t))}type(t,n=34){let r=this.q(t),i=r.dataset.text??``;e?r.textContent=i:(r.classList.add(`typing`),[...i].forEach((e,t)=>this.later(t*n,()=>{r.textContent=i.slice(0,t+1)})),this.later(i.length*n,()=>r.classList.remove(`typing`)))}stream(t,n=55){let r=this.q(t),i=(r.dataset.text??``).split(` `);e?r.textContent=i.join(` `):i.forEach((e,t)=>this.later(t*n,()=>{r.textContent=i.slice(0,t+1).join(` `)}))}fill(e){let t=this.q(e);t.textContent=t.dataset.text??``}clear(){this.timers.forEach(clearTimeout),this.timers=[],this.qa(`.on, .done, .typing, .lit`).forEach(e=>e.classList.remove(`on`,`done`,`typing`,`lit`)),this.qa(`[data-text]`).forEach(e=>{e.textContent=``})}},n=(e,t)=>`<i class="fav" style="background:${e}">${t}</i>`,r=`<svg viewBox="0 0 12 12" width="10" height="10"><path d="M2.5 6.2l2.2 2.2 4.8-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,i=(e,t=``)=>`<div class="ga-bar"><i></i><i></i><i></i><b>${e}</b>${t}</div>`,a={chatgpt:{loop:11e3,html:`<div class="ga ga-gpt">${i(`ChatGPT`,`<span class="ga-pill">Search</span>`)}
      <div class="ga-body">
        <div class="ga-hello">What can I help with?</div>
        <div class="ga-user"><span data-text="Which agency is best for GEO in B2B SaaS?"></span></div>
        <div class="ga-think"><span class="spin"></span><span class="lbl">Searching the web</span><span class="lbl2">Read 3 sources</span></div>
        <div class="ga-srcs"><span class="src">${n(`#ff492c`,`G`)}g2.com</span><span class="src">${n(`#ff4500`,`r`)}reddit.com</span><span class="src">${n(`#2b2b2b`,`F`)}forbes.com</span></div>
        <p class="ga-ans" data-text="Based on reviews, community threads and expert lists, the most recommended options are:"></p>
        <ol class="ga-list">
          <li class="me"><b>1</b><span class="nm">YourBrand</span><span class="cites"><i>1</i><i>2</i><i>3</i></span></li>
          <li><b>2</b><span class="sk" style="width:46%"></span></li>
          <li><b>3</b><span class="sk" style="width:38%"></span></li>
        </ol>
      </div>
      <div class="ga-input"><span class="ph">Ask anything</span><span class="tx" data-text="Which agency is best for GEO in B2B SaaS?"></span><i></i></div></div>`,beats:[[150,e=>{e.on(`.ga-input`),e.type(`.ga-input .tx`,32)}],[1650,e=>e.on(`.ga-input i`,`lit`)],[1900,e=>{e.q(`.ga-input`).classList.remove(`on`),e.q(`.ga-input .tx`).textContent=``,e.on(`.ga-hello`,`done`),e.on(`.ga-user`),e.fill(`.ga-user span`)}],[2300,e=>e.on(`.ga-think`)],[2700,e=>e.qa(`.ga-srcs .src`).forEach((t,n)=>e.later(n*260,()=>t.classList.add(`on`)))],[3700,e=>e.on(`.ga-think`,`done`)],[3900,e=>{e.on(`.ga-ans`),e.stream(`.ga-ans`)}],[5200,e=>e.qa(`.ga-list li`).forEach((t,n)=>e.later(n*220,()=>t.classList.add(`on`)))],[6100,e=>{e.on(`.ga-list .me`,`lit`),e.on(`.ga-srcs .src`,`lit`)}]]},perplexity:{loop:11500,html:`<div class="ga ga-ppx">${i(`Perplexity`)}
      <div class="ga-body">
        <div class="ppx-home"><div class="hi">What do you want to know?</div><div class="box"><span class="ph">Ask anything...</span><span class="tx" data-text="How does Perplexity choose the sources it cites?"></span><i></i></div></div>
        <div class="ppx-q"><span data-text="How does Perplexity choose the sources it cites?"></span></div>
        <ul class="ppx-steps">
          <li><s>${r}</s>Understanding the question</li>
          <li><s>${r}</s>Searching the web <em>12 sources</em></li>
          <li><s>${r}</s>Ranking sources by clarity, authority, freshness</li>
        </ul>
        <div class="ppx-cards">
          <div class="card me">${n(`#0070e0`,`Y`)}<b>yourbrand.com</b><span class="sk"></span><em>1</em></div>
          <div class="card">${n(`#ff4500`,`r`)}<b>reddit.com</b><span class="sk"></span><em>2</em></div>
          <div class="card">${n(`#3a3a3a`,`W`)}<b>wikipedia.org</b><span class="sk"></span><em>3</em></div>
        </div>
        <p class="ppx-ans"><span data-text="Perplexity searches the live web, keeps the clearest and most trusted pages, then writes one answer and cites them inline."></span><sup>1</sup><sup>2</sup></p>
      </div></div>`,beats:[[150,e=>{e.on(`.ppx-home .box`),e.type(`.ppx-home .tx`,30)}],[1700,e=>e.on(`.ppx-home i`,`lit`)],[1950,e=>{e.on(`.ppx-home`,`done`),e.on(`.ppx-q`),e.fill(`.ppx-q span`)}],[2300,e=>e.qa(`.ppx-steps li`).forEach((t,n)=>{e.later(n*520,()=>t.classList.add(`on`)),e.later(n*520+440,()=>t.classList.add(`done`))})],[3900,e=>e.qa(`.ppx-cards .card`).forEach((t,n)=>e.later(n*200,()=>t.classList.add(`on`)))],[4700,e=>{e.on(`.ppx-ans`),e.stream(`.ppx-ans span`,50)}],[6200,e=>{e.on(`.ppx-ans sup`),e.on(`.ppx-cards .me`,`lit`)}]]},webflow:{loop:12e3,html:`<div class="ga ga-wf">${i(`Home · acme.com`,`<span class="wf-pub">Publish</span>`)}
      <div class="wf-main">
        <div class="wf-canvas"><i class="b nav"></i><i class="b hero"></i><i class="b l1"></i><i class="b l2"></i><span class="cards"><i class="b"></i><i class="b"></i><i class="b"></i></span></div>
        <div class="wf-panel"><div class="ph">SEO settings</div>
          <div class="row"><span class="k">Title tag</span><span class="v" data-text="Acme | B2B SaaS SEO"></span><s>${r}</s></div>
          <div class="row"><span class="k">Meta description</span><span class="v" data-text="Rank on Google and in AI answers."></span><s>${r}</s></div>
          <div class="row"><span class="k">Schema</span><span class="v" data-text="Organization, FAQ"></span><s>${r}</s></div>
          <div class="row"><span class="k">Sitemap</span><span class="v" data-text="Auto-generated"></span><s>${r}</s></div>
          <div class="row"><span class="k">Alt text</span><span class="v" data-text="12 of 12 images"></span><s>${r}</s></div>
        </div>
      </div>
      <div class="wf-toast">${r} Published to acme.com</div>
      <div class="wf-serp">
        <div class="ai"><b>AI Overview</b><span>cites acme.com</span></div>
        <div class="res">${n(`#146ef5`,`A`)}<div><small>acme.com</small><h5>Acme | B2B SaaS SEO</h5><p>Rank on Google and in AI answers.</p></div></div>
      </div></div>`,beats:[[200,e=>e.qa(`.wf-canvas .b`).forEach((t,n)=>e.later(n*90,()=>t.classList.add(`on`)))],[1100,e=>e.qa(`.wf-panel .row`).forEach((t,n)=>{e.later(n*700,()=>{t.classList.add(`on`),e.type(`.wf-panel .row:nth-of-type(${n+2}) .v`,26)}),e.later(n*700+560,()=>t.classList.add(`done`))})],[4900,e=>e.on(`.wf-pub`)],[5300,e=>e.on(`.wf-toast`)],[6300,e=>e.on(`.wf-serp`)],[7100,e=>e.on(`.wf-serp .ai`,`lit`)]]}};document.querySelectorAll(`.gx[data-gx]`).forEach(n=>{let r=a[n.dataset.gx],i=n.querySelector(`.gx-app`);if(!r||!i)return;i.innerHTML=r.html,n.classList.add(`gx-on`);let o=new t(i);if(e){r.beats.forEach(([,e])=>e(o)),o.qa(`.ga-think, .ppx-steps li, .wf-panel .row`).forEach(e=>e.classList.add(`done`));return}let s=!1,c=0,l=()=>{o.clear(),r.beats.forEach(([e,t])=>o.later(e,()=>t(o))),o.later(r.loop-500,()=>i.classList.add(`fade`)),c=window.setTimeout(()=>{i.classList.remove(`fade`),l()},r.loop)},u=()=>{clearTimeout(c),o.clear(),i.classList.remove(`fade`)},d=()=>{let e=s&&document.visibilityState===`visible`;e&&!c&&l(),!e&&c&&(u(),c=0)};new IntersectionObserver(([e])=>{s=e.isIntersecting,d()},{threshold:.2}).observe(n),document.addEventListener(`visibilitychange`,d)});