var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");
const colorSelect = document.querySelector('#colors');
const quantiteSelect = document.querySelector('#quantity');
//console.log(idProduct);
getArticle();

function getArticle() {
    fetch(`http://localhost:3000/api/products/${idProduct}`)
        .then((res) => {
            return res.json();
        })

        // Répartition des données de l'API dans le DOM
        .then(async function (resultatAPI) {
            article = await resultatAPI;

            //insertion de l'image
            let productImg = document.createElement("img");
            document.querySelector(".item__img").appendChild(productImg);
            productImg.src = article.imageUrl;
            productImg.alt = article.altTxt;

            //modification du titre
            let productName = document.getElementById('title');
            productName.innerHTML = article.name;

            //modification du prix
            let productPrice = document.getElementById('price');
            productPrice.innerHTML = article.price;

            //modication de la description
            let productDescription = document.getElementById('description');
            productDescription.innerHTML = article.description;

            //insertion de la couleur
            for (let colors of article.colors) {
                let productColors = document.createElement("option");
                document.querySelector("#colors").appendChild(productColors);
                productColors.value = colors;
                productColors.innerHTML = colors;
                console.log(article);
            }
            //appel de la fonction pour mettre en place le panier
            addPanier(article);



        }).catch((error) => {
            // console.log("Erreur de la requête API");
        });
}
function addPanier(article) {
    const buttonaddpanier = document.querySelector('#addToCart');
    //Ecouter le panier avec 2 conditions couleur non nulle et quantité entre 1 et 100
    buttonaddpanier.addEventListener("click", (event) => {
        if (quantiteSelect.value > 0 && quantiteSelect.value <= 100 && quantiteSelect.value != 0) {

            //Recupération du choix de la couleur
            let choixCouleur = colorSelect.value;

            //Recupération du choix de la quantité
            let choixQuantite = quantiteSelect.value;

            //Récupération des options de l'article à ajouter au panier
            let optionsProduit = {
                idProduit: idProduct,
                couleurProduit: choixCouleur,
                quantiteProduit: Number(choixQuantite),
                nomProduit: article.name,
                prixProduit: article.price,
                descriptionProduit: article.description,
                imgProduit: article.imageUrl,
                altImgProduit: article.altTxt
            };

            //Initialisation du local storage
            let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

            //fenêtre pop-up
            const popupConfirmation = () => {
                if (window.confirm(`Votre commande de ${choixQuantite} ${article.name} ${choixCouleur} est ajoutée au panier
Pour consulter votre panier, cliquez sur OK`)) {
                    window.location.href = "cart.html";
                }
            }

            //Importation dans le local storage
            //Si le panier comporte déjà au moins 1 article
            if (produitLocalStorage) {
                const resultFind = produitLocalStorage.find(
                    (el) => el.idProduit === idProduct && el.couleurProduit === choixCouleur);
                //Si le produit commandé est déjà dans le panier
                if (resultFind) {
                    let newQuantite =
                        parseInt(optionsProduit.quantiteProduit) + parseInt(resultFind.quantiteProduit);
                    resultFind.quantiteProduit = newQuantite;
                    localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
                    console.table(produitLocalStorage);
                    popupConfirmation();
                    //Si le produit commandé n'est pas dans le panier
                } else {
                    produitLocalStorage.push(optionsProduit);
                    localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
                    console.table(produitLocalStorage);
                    popupConfirmation();
                }
                //Si le panier est vide
            } else {
                produitLocalStorage = [];
                produitLocalStorage.push(optionsProduit);
                localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
                console.table(produitLocalStorage);
                popupConfirmation();
            }
        }
    });
    console.log(article);
}