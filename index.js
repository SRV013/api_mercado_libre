
function mostrarResultados(results){
    const c = document.querySelector('.results');
    const t = document.querySelector('#result-items-template');  
  
    for(const r of results) {
        const titleEl = t.content.querySelector('.result-item-title');
        const conditionEl = t.content.querySelector('.result-item-condition');
        const countEl = t.content.querySelector('.result-item-shell-count');
        const priceEl = t.content.querySelector('.result-item-price');
        const imgEl = t.content.querySelector('.result-item-img');
        titleEl.textContent = r.title; 
        conditionEl.textContent =r.id;
        countEl.textContent =r.sold_quantity;
        priceEl.textContent =r.price;
        imgEl.src = r.thumbnail;
        const modo = document.importNode(t.content,true);
        c.appendChild(modo);
    }
}

function main(){
    const formEl = document.querySelector('.search-from');
        formEl.addEventListener('submit', function(e){
         e.preventDefault();
         const valbuscar = e.target.buscar.value;
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + valbuscar)
        .then((response) => response.json())
        .then((data)=>mostrarResultados(data.results));
});
}

main();
