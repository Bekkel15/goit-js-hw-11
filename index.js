import{a as u,i as c}from"./assets/vendor-JbMoS2r0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";const y="49705532-1e2ede49dc369f58ee6a018a1",g=r=>({params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}});function L(r){return new Promise((o,s)=>{u.get("",g(r)).then(a=>{if(a.data.total!==0){o(a.data.hits);return}else{s(`Sorry, there are no images matching your ${r}. Please try again!`);return}}).catch(a=>{s(a.massage)})})}const b=new Simplelightbox(".item a",{captions:!0,captionsData:"alt",captionsDelay:1e3});function q(r,o){const s=r.map(({largeImageURL:e,webformatURL:t,tags:i,likes:m,views:f,comments:p,downloads:h})=>`
      <li class= "item">
        <a href="${e}">
          <img class= "item-img" src="${t}" alt="${i}" />
          <div class = "item-descrp">
            <table>
              <tr>
                <th>Likes</th>
                <th>Views</th>
                <th>Comment</th>
                <th>Downloads</th>
              </tr>
              <tr>
                <td>${m}</td>
                <td>${f}</td>
                <td>${p}</td>
                <td>${h}</td>
              </tr>
            </table>
          </div>
        </a>
      </li>
      `).join("");o.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".item-img").forEach(e=>e.onload=()=>e.classList.add("loaded")),b.refresh()}function v(){const r=document.querySelector(".gallery");r&&r.replaceChildren()}const n=document.querySelector(".form"),S=document.querySelector(".gallery"),d=document.querySelector(".loader");function $(){d.classList.add("active")}function O(){d.classList.remove("active")}const l=()=>n.reset();n.addEventListener("submit",r=>{r.preventDefault(),v();const o=n.querySelector('[name="search-text"]').value.trim();if(o!=="")$(),L(o).then(s=>{q(s,S)}).catch(s=>{c.error({message:s,position:"center",timeout:2e3})}).finally(()=>{O(),l()});else{c.warning({message:"Field must not be empty!",position:"center",timeout:2e3}),l();return}});
//# sourceMappingURL=index.js.map
