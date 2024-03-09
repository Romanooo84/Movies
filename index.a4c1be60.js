var e=globalThis,r={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,i.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,r){t[e]=r},e.parcelRequired7c6=i),i.register;var o=i("f4Zwh");const s=document.querySelector(".movie__list");(0,o.fetchPopularMovies)(1).then(e=>a(e)).catch(e=>console.error(e));const a=e=>{e.results.forEach(async e=>{try{let r=(await (0,o.fetchMoviesByID)(e.id)).genres.map(e=>e.name).join(", "),t=`<li class="movie-card">
        <a href="${e.poster_path}">
          <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}"/>
        </a>
        <div class="info">
          <p class="info-item">
            <b> ${e.title}</b>
          </p>
          <p class="info-item">
            <b> ${e.release_date.slice(0,4)}</b>
          </p>
          <p class="info-item">
            <b>  ${r}</b>
          </p>
        </div>
      </li>`;s.insertAdjacentHTML("afterbegin",t)}catch(e){console.error("Error fetching movie details:",e)}})};
//# sourceMappingURL=index.a4c1be60.js.map
