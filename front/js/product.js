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
                let productItem = document.createElement("item");
                document.querySelector(".limitedWidthBlock").appendChild(productItem);
                productItem.href = `http://localhost:3000/api/products/${resultatAPI}`;

                // Insertion de l'élément "article"
                let productArticle = document.createElement("article");
                productItem.appendChild(productArticle);

                // Insertion de l'image
                let productImg = document.createElement("img");
                productArticle.appendChild(productImg);
                productImg.src = article.imageUrl;
                productImg.alt = article.altTxt;
                document.querySelector('.item__img').appendChild(productImg);

                let productName = document.createElement("h1");
                productName.setAttribute("#title");
                productArticle.appendChild(productName);
                productName = article.name;
                document.querySelector('.item__content__titlePrice').appendChild(productName);






            };


        }).catch((error) => {
            console.log("Erreur de la requête API");
        });
}
function getproduit(article) {
    console.log(article);
};