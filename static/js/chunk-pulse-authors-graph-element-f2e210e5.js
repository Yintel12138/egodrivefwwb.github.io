System.register(["./chunk-vendor.js","./chunk-band.js","./chunk-tip.js","./chunk-frameworks.js"],(function(){"use strict";var t,a,r,e,n,s,o,i,l,c,d,h,u;return{setters:[function(e){t=e._,a=e.t,r=e.c},function(t){e=t.b,n=t.r},function(t){s=t.g,o=t.m,i=t.j,l=t.D,c=t.z,d=t.s},function(t){h=t.m,u=t.aX}],execute:function(){const g=h((async function(t){const a=await u(t,{headers:{accept:"application/json"}});return await a.json()}));let m=class PulseAuthorsGraphElement extends HTMLElement{async connectedCallback(){const t=this.graph,a=t.getAttribute("data-url");if(a){for(const a of t.querySelectorAll("svg.viz"))a.remove();t.classList.add("is-graph-loading"),t.classList.remove("is-graph-load-error","is-graph-empty");try{const r=await g(a);t.classList.remove("is-graph-loading"),null!=r&&r.unusable?t.classList.add("is-graph-without-usable-data"):null!=r&&0===r.length||null!=r&&null!=r.summary&&0===r.summary.total||null!=r[0]&&null!=r[0].weeks&&0===r[0].weeks.length?t.classList.add("is-graph-empty"):function(t,a){const r=a.slice(0,15),h={top:20,right:0,bottom:30,left:25},u=Math.round(t.getBoundingClientRect().width)-h.left-h.right,g=Math.round(t.getBoundingClientRect().height)-h.top-h.bottom,m=e().domain(n(15)).rangeRound([0,u]).padding(.2),p=s().domain([0,o(r,(t=>t.commits))]).range([g,0]),f=i(p).ticks(3).tickSize(-u).tickFormat((t=>t<1e3?t:l(",~s")(t))),b=c().attr("class","svg-tip").offset([-10,0]).html((function(t){const a=t.login||t.name;return`<strong>${t.commits}</strong> ${1===t.commits?"commit":"commits"} authored by <strong>${a}</strong>`})),v=d(t).append("svg").attr("class","viz").attr("width",u+h.left+h.right).attr("height",g+h.top+h.bottom).append("g").attr("transform",`translate(${h.left}, ${h.top})`).call(b);v.append("g").attr("class","y axis").call(f);const w=v.selectAll(".bar").data(r).enter().append("g").attr("class",`bar ${t.getAttribute("data-bar-class")}`).attr("transform",((t,a)=>`translate(${m(a)}, 0)`));w.append("rect").attr("width",m.bandwidth()).attr("height",(t=>g-p(t.commits))).attr("y",(t=>p(t.commits))).on("mouseover",b.show).on("mouseout",b.hide),w.append("a").attr("xlink:href",(function(t){if(null!=t.login)return`/${t.login}`})).attr("data-hovercard-type","user").attr("data-hovercard-url",(t=>t.hovercard_url)).append("image").attr("y",g+5).attr("alt",(t=>t.login||"")).attr("xlink:href",(t=>t.gravatar)).attr("width",m.bandwidth()).attr("height",m.bandwidth())}(t,r)}catch(r){throw t.classList.remove("is-graph-loading"),t.classList.add("is-graph-load-error"),r}}}};t([a],m.prototype,"graph",void 0),m=t([r],m)}}}));
//# sourceMappingURL=chunk-pulse-authors-graph-element-49475087.js.map