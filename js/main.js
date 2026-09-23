
document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".menu-btn"), nav=document.querySelector(".nav-links");
 if(menu) menu.addEventListener("click",()=>{
   nav.style.display = nav.style.display==="flex" ? "" : "flex";
   if(nav.style.display==="flex"){nav.style.position="absolute";nav.style.top="72px";nav.style.left="12px";nav.style.right="12px";nav.style.flexDirection="column";nav.style.alignItems="stretch";nav.style.background="#fff";nav.style.border="1px solid #e8e8e8";nav.style.borderRadius="22px";nav.style.padding="10px";nav.style.boxShadow="0 20px 50px rgba(0,0,0,.12)"}
 });
 document.querySelectorAll("[data-modal]").forEach(b=>b.addEventListener("click",()=>document.getElementById(b.dataset.modal)?.classList.add("open")));
 document.querySelectorAll(".modal .close").forEach(b=>b.addEventListener("click",()=>b.closest(".modal").classList.remove("open")));
 document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("open")}));
 document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".modal.open").forEach(m=>m.classList.remove("open"))});
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity="1";e.target.style.transform="translateY(0)";observer.unobserve(e.target)}}),{threshold:.08});
 document.querySelectorAll(".reveal").forEach(el=>{el.style.opacity="0";el.style.transform="translateY(24px)";el.style.transition="opacity .7s ease,transform .7s ease";observer.observe(el)});
 document.querySelectorAll("form[data-demo]").forEach(form=>form.addEventListener("submit",e=>{
   e.preventDefault(); const notice=form.querySelector(".notice"); if(notice){notice.textContent="Thank you. Your request has been received. A DREAMTECH CONSTRUCTION representative will contact you shortly.";notice.classList.add("show")} form.reset();
 }));
});
