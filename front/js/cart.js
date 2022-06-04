/**
 * Gère l'affichage et les interactions de la page cart
 */
fillSection("#cart__items");

// Récupération des articles de l'API
async function getArticles() {
    var articlesCatch = await fetch("http://localhost:3000/api/products")
    return await articlesCatch.json();
}

// Répartition des données de l'API dans le DOM
async function fillSection("#cart__items") {
    var result = await getArticles()
        .then(function (resultatAPI) {
            const articles = resultatAPI;
            console.table(articles);
            for (let article in articles) {

                // Insertion de l'élément "a"
                let productCart = document.createElement("cart");
                document.querySelector(".cart__item");
                productCart = `product.html?id=${resultatAPI[article]._id}`;

                // Insertion de l'image
                let productImg = document.createElement("img");
                productArticle.appendChild(productImg);
                productImg.src = resultatAPI[article].imageUrl;
                productImg.alt = resultatAPI[article].altTxt;

                // Insertion du titre "h3"
                let productName = document.createElement("h2");
                productArticle.appendChild(productName);
                productName.classList.add("cart__item__content__description");
                productName.innerHTML = resultatAPI[article].name;

                // Insertion de la description "p"
                let productDescription = document.createElement("p");
                productArticle.appendChild(productDescription);
                productDescription.classList.add("cart__item__content__description");
                productDescription.innerHTML = resultatAPI[article].description;

                // Insertion de l'élément "article"
                let productArticle = document.createElement("article");
                productLink.appendChild(productArticle);
            }
        })
        .catch((erreur) => console.log('Accès aux Produits impossible'))
};