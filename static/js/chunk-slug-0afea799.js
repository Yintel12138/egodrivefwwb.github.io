System.register(["./chunk-frameworks.js","./chunk-vendor.js"],(function(){"use strict";var e,t,n;return{setters:[function(n){e=n.E,t=n.o},function(e){n=e.f}],execute:function(){e(".js-business-name",(function(e){const t=e.target,u=document.querySelector(".js-business-slug[data-auto-update]");u instanceof HTMLInputElement&&(u.value=t.value.trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s/g,"-"),n(u,"input"))})),t(".js-business-slug[data-auto-update]",(function(e){e.removeAttribute("data-auto-update");const t=document.querySelector(".js-name-slug-sync-icon");t&&t.remove()}))}}}));
//# sourceMappingURL=chunk-slug-5306d65b.js.map