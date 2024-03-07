const e=async e=>{let o=`https://api.themoviedb.org/3/movie/${e}?api_key=e7c930d9ee21da94f8fc3257d387eced`;try{let c=await fetch(o),t=await c.json();console.log(`Movie ID ${e}:`,t)}catch(o){console.error(`Error fetching movie ID ${e}:`,o)}};["123","456","789"].forEach(o=>e(o));
//# sourceMappingURL=index.e805a093.js.map
