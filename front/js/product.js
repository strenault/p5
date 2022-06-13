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
            console.log(resultatAPI);
            if (article) {
                getproduit(article);
            }

            for (let idProduct in article) {
                // Insertion de l'élément "article"
                let productArticle = document.createElement("article");
                document.querySelector(".item").appendChild(productArticle);
                productArticle.href = `http://localhost:3000/api/products/${resultatAPI}`;

                // Insertion de l'élément "produit"
                let productProduit = document.createElement("produit");
                productArticle.appendChild(productProduit);

                // Insertion de l'image
                let productImg = document.createElement("img");
                productProduit.appendChild(productImg);
                productImg.src = article.imageUrl;
                productImg.alt = article.altTxt;

            }


        }).catch((error) => {
            console.log("Erreur de la requête API");
        })
}
function getproduit(article) {
    console.log(article);
};