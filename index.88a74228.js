const e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE"}},t=t=>fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${t}`,e).then(e=>e.json()).catch(e=>console.error(e)),i=t=>fetch(`https://api.themoviedb.org/3/movie/${t}?language=en-US`,e).then(e=>e.json()).catch(e=>console.error(e)),o=document.querySelector(".movie__list"),a=document.querySelector("#prev"),s=document.querySelector("#next"),r=document.querySelector("#current"),c=document.querySelector(".modal-window"),n=document.querySelector(".modal-overlay");let l=1;t(1).then(e=>d(e)).catch(e=>console.error(e));const d=e=>{console.log(e),e.results.forEach(async e=>{try{let t=(await i(e.id)).genres.map(e=>e.name).join(", "),a=`<li class="movie-card">
        <a href="${e.poster_path}" data-movie-id="${e.id}">
          <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}"/>
        </a>
        <div class="info">
          <p class="info-item">
            <b> ${e.title}</b>
          </p>
          <div class="details">
          <p class="info-item">
          <b>${t}</b>
        </p>
          <p class="info-item">
            <b>| ${e.release_date.slice(0,4)}</b>
          </p>
          </div>
        </div>
      </li>`;o.insertAdjacentHTML("afterbegin",a)}catch(e){console.error("Error fetching movie details:",e)}})};o.addEventListener("click",async e=>{e.preventDefault();let t=e.target.closest("a").dataset.movieId;console.log("Clicked on movie with ID:",t);try{let e=await i(t);console.log(e);let o=`
        <div>
          <div>
            <button id="close-modal">
              <svg width="30" height="30">
                <use href="./images/icons.svg#icon-close" />
              </svg>
            </button>
            <div>
              <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}" width="375" height="478" />
            </div>
            <div>
              <h1>${e.title}</h1>
              <div>
                <div>
                  <p>Vote/Votes</p>
                  <p>Popularity</p>
                  <p>Original Title</p>
                  <p>Genre</p>
                </div>
                <div>
                  <p>${e.vote_average} / ${e.vote_count}</p>
                  <p>${e.popularity}</p>
                  <p>${e.original_title}</p>
                  <p>${e.genres.map(e=>e.name).join(", ")}</p>
                </div>
              </div>
              <h2>About</h2>
              <p>${e.overview}</p>
            </div>
          </div>
        </div>
      `;c.innerHTML=o,c.classList.remove("hidden"),document.querySelector("#close-modal").addEventListener("click",()=>{c.classList.add("hidden"),n.classList.remove("active")}),n.classList.add("active")}catch(e){console.error("Error fetching movie details:",e)}}),document.addEventListener("keydown",e=>{"Escape"===e.key&&m()});const m=()=>{c.classList.add("hidden"),n.classList.remove("active")};s.addEventListener("click",async()=>{try{l++;let e=await t(l);o.innerHTML="",d(e),r.innerHTML=l}catch(e){console.error("Error fetching popular movies:",e)}}),a.addEventListener("click",async()=>{try{if(l>1){l--;let e=await t(l);o.innerHTML="",d(e),r.innerHTML=l}}catch(e){console.error("Error fetching popular movies:",e)}});const p=e=>{let t=JSON.parse(localStorage.getItem("queueMovies"))||[];t.includes(e)||(t.push(e),localStorage.setItem("queueMovies",JSON.stringify(t)))};document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("add-to-queue");e&&e.addEventListener("click",()=>{p(e.getAttribute("data-movie-id"))})});const v=e=>{let t=JSON.parse(localStorage.getItem("watchedMovies"))||[];t.includes(e)||(t.push(e),localStorage.setItem("watchedMovies",JSON.stringify(t)))};document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("add-to-watched");e&&e.addEventListener("click",()=>{v(e.getAttribute("data-movie-id"))})});const h=document.querySelector(".header-home-form"),u=document.querySelector(".movie__list"),g=async(e,t)=>{let i=new URLSearchParams({api_key:"e7c930d9ee21da94f8fc3257d387eced",query:e,page:t}),o=await fetch(`https://api.themoviedb.org/3/search/movie?${i}`);return(await o.json()).results},y=e=>(console.log("Movies",e),e.map(({poster_path:e,original_title:t,genre_ids:i,release_date:o})=>`<li class="movie-card">
        <a href="${e}">
          <img src="https://image.tmdb.org/t/p/w500/${e}" alt="${t}"/>
        </a>
        <div class="info">
          <p class="info-item">
            <b> ${t}</b>
          </p>
          <p class="info-item">
            <b> ${o.slice(0,4)}</b>
          </p>
          <p class="info-item">
            <b>  ${i.slice(0,2)}</b>
          </p>
        </div>
      </li>`).join("")),f=async e=>{e.preventDefault();let t=e.target.elements.searchQuery.value.trim();console.log(t),await g(t,1).then(e=>{let t=y(e);u.innerHTML=t}).catch(e=>console.log(e))};h.addEventListener("submit",f);
//# sourceMappingURL=index.88a74228.js.map
