const e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE"}},t=t=>fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${t}`,e).then(e=>e.json()).catch(e=>console.error(e)),o=t=>fetch(`https://api.themoviedb.org/3/movie/${t}?language=en-US`,e).then(e=>e.json()).catch(e=>console.error(e)),i=document.querySelector(".movie__list"),n=document.querySelector("#prev"),r=document.querySelector("#next"),a=document.querySelector("#current");let c=1;t(1).then(e=>s(e)).catch(e=>console.error(e));const s=e=>{console.log(e),e.results.forEach(async e=>{try{let t=(await o(e.id)).genres.map(e=>e.name).join(", "),n=`<li class="movie-card">
        <a href="${e.poster_path}">
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
      </li>`;i.insertAdjacentHTML("afterbegin",n)}catch(e){console.error("Error fetching movie details:",e)}})};r.addEventListener("click",async()=>{try{c++;let e=await t(c);i.innerHTML="",s(e),a.innerHTML=c}catch(e){console.error("Error fetching popular movies:",e)}}),n.addEventListener("click",async()=>{try{if(c>1){c--;let e=await t(c);i.innerHTML="",s(e),a.innerHTML=c}}catch(e){console.error("Error fetching popular movies:",e)}});const l=e=>{let t=JSON.parse(localStorage.getItem("queueMovies"))||[];t.includes(e)||(t.push(e),localStorage.setItem("queueMovies",JSON.stringify(t)))};document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("add-to-queue");e&&e.addEventListener("click",()=>{l(e.getAttribute("data-movie-id"))})});const d=e=>{let t=JSON.parse(localStorage.getItem("watchedMovies"))||[];t.includes(e)||(t.push(e),localStorage.setItem("watchedMovies",JSON.stringify(t)))};document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("add-to-watched");e&&e.addEventListener("click",()=>{d(e.getAttribute("data-movie-id"))})});
//# sourceMappingURL=index.00144204.js.map
