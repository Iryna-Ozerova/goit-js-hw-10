import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{i as o}from"./assets/vendor-A92OCY9B.js";const r=document.querySelector(".form");r.addEventListener("submit",n);function n(e){e.preventDefault();const i=parseInt(this.elements.delay.value),s=this.elements.state.value;m(i,s).then(t=>{o.success({title:"Fulfilled",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{o.error({title:"Rejected",message:`❌ Rejected promise in ${t}ms`,position:"topRight"})}),r.reset()}function m(e,i){return new Promise((s,t)=>{setTimeout(()=>{i==="fulfilled"?s(e):t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
