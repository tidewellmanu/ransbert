
document.addEventListener("DOMContentLoaded",()=>{
 const id=Number(new URLSearchParams(location.search).get("id"))||1, p=properties.find(x=>x.id===id)||properties[0];
 document.title=`${p.title} | DREAMTECH CONSTRUCTION`;
 document.querySelector("#detail").innerHTML=`
 <div class="details-grid">
  <div><div class="gallery-main"><img id="main-img" src="${p.image}" alt="${p.title}"></div>
  <div class="thumb-row"><button class="thumb active" data-img="${p.image}"><img src="${p.image}" alt=""></button><button class="thumb" data-img="https://images.unsplash.com/photo-1767311615636-58c7bd39cbb0?auto=format&fit=crop&fm=jpg&q=82&w=1800"><img src="https://images.unsplash.com/photo-1767311615636-58c7bd39cbb0?auto=format&fit=crop&fm=jpg&q=82&w=1800" alt=""></button><button class="thumb" data-img="https://images.unsplash.com/photo-1767311615636-58c7bd39cbb0?auto=format&fit=crop&fm=jpg&q=82&w=1800"><img src="https://images.unsplash.com/photo-1767311615636-58c7bd39cbb0?auto=format&fit=crop&fm=jpg&q=82&w=1800" alt=""></button></div>
  <div style="margin-top:35px"><span class="tag">${p.type} · ${p.location}</span><h2>${p.title}</h2><p class="lead">${p.description}</p><h3 style="margin-top:30px">Amenities</h3><div class="category-grid" style="margin-top:15px">${p.amenities.map(a=>`<div class="category"><small>Included</small><h3>${a}</h3></div>`).join("")}</div></div></div>
  <aside class="details-panel"><span class="tag">${p.status}</span><h3>${p.title}</h3><div class="price">${money(p)}</div><p class="meta">${p.location}</p>
   <div class="specs">${p.bedrooms?`<div class="spec"><b>Bedrooms</b>${p.bedrooms}</div><div class="spec"><b>Bathrooms</b>${p.bathrooms}</div>`:""}<div class="spec"><b>Parking</b>${p.parking}</div><div class="spec"><b>Size</b>${p.size}</div></div>
   <div style="display:grid;gap:8px;margin-top:20px"><a class="btn btn-red" href="schedule-inspection.html?property=${encodeURIComponent(p.title)}">Schedule an Inspection</a><a class="btn btn-light" href="contact.html">Enquire About Property</a></div>
  </aside>
 </div>`;
 document.querySelectorAll(".thumb").forEach(t=>t.addEventListener("click",()=>{document.querySelector("#main-img").src=t.dataset.img;document.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active"));t.classList.add("active")}));
 const rel=document.querySelector("#related"); if(rel) rel.innerHTML=properties.filter(x=>x.id!==p.id).slice(0,3).map(propertyCard).join("");
});
