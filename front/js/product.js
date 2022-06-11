var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");
console.log(idProduct);
getArticle();

function getArticle() {
    fetch(`http://localhost:3000/api/products/${idProduct}`)
        .then((res) => {
            return res.json();
        })

        // Répartition des données de l'API dans le DOM
        .then(async function (resultatAPI) {
            article = await resultatAPI;
            console.log("ok");
            console.log(resultatAPI);
            if (article) {
                getproduit(article);
            }

        })
        .catch((error) => {
            console.log("Erreur de la requête API");
        })
}
function getproduit(article) {
    console.log(article);


}