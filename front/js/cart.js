/**
 * Gère l'affichage et les interractions de panier
 */
//Initialisation du local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
const PosEmptyCarty = document.querySelector('#cart__items');

produitpanier();

function produitpanier() {

    //panier vide -> localStorage eest  vide
    if (produitLocalStorage === null || produitLocalStorage == 0) {
        const emptyCard = '<p> panier est vide </p>';
        PosEmptyCarty.innerHTML = emptyCard;
    }
    // s'il y' a des produits
    else {
        for (let produit in produitLocalStorage) {
            let productArticle = document.createElement("article");
            document.querySelector("#cart__items").appendChild(productArticle);
            productArticle.className = "cart__item";
            productArticle.setAttribute('data-id', produitLocalStorage[produit].idProduit)

            // insertion de div qui contient la photo
            let productDivImg = document.createElement("div");
            productArticle.appendChild(productDivImg);
            productDivImg.className = "cart__item__img";

            let productImg = document.createElement("img");
            productDivImg.appendChild(productImg);
            productImg.src = produitLocalStorage[produit].imgProduit;
            productImg.alt = produitLocalStorage[produit].altImgProduit;

            // insertion element div
            let productItemContent = document.createElement("div");
            productArticle.appendChild(productItemContent);
            productDivImg.className = "cart__item__content";

            //

            let productItemContentTitlePrice = document.createElement("div");
            productItemContent.appendChild(productItemContentTitlePrice);
            productItemContentTitlePrice.className = "cart__item__content__description";

            // titre
            let productTitle = document.createElement('h2');
            productItemContentTitlePrice.appendChild(productTitle);
            productTitle.innerHTML = produitLocalStorage[produit].nomProduit;

            // couleur
            let productColor = document.createElement('p');
            productItemContentTitlePrice.appendChild(productColor);
            productColor.innerHTML = produitLocalStorage[produit].couleurProduit;

            // prix
            let productPrice = document.createElement('p');
            productItemContentTitlePrice.appendChild(productPrice);
            productPrice.innerHTML = produitLocalStorage[produit].prixProduit + " € ";

            // settings
            let productItemContentSettings = document.createElement("div");
            productItemContent.appendChild(productItemContentSettings);
            productItemContentSettings.className = "cart__item__content__settings";

            // Insertion de l'élément "div"
            let productItemContentSettingsQuantity = document.createElement("div");
            productItemContentSettings.appendChild(productItemContentSettingsQuantity);
            productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";


            // Insertion de "Qté : "
            let productQte = document.createElement("p");
            productItemContentSettingsQuantity.appendChild(productQte);
            productQte.innerHTML = "Qté :";

            // insertion input

            let productQuantity = document.querySelector("input");
            productItemContentSettingsQuantity.appendChild(productQuantity);
            productQuantity.value = produitLocalStorage[produit].quantiteProduit;
            productQuantity.className = "itemQuantity";
            productQuantity.setAttribute("type", "number");
            productQuantity.setAttribute("min", "1");
            productQuantity.setAttribute("max", "100");
            productQuantity.setAttribute("name", "itemQuantity");

            //insertion de l'élément div
            let productItemContentSettingsDelete = document.createElement("div");
            productItemContentSettings.appendChild(productItemContentSettingsDelete);
            productItemContentSettingsDelete.className = "cart__item__content__settings__delete";


            let productSup = document.createElement("p");
            productItemContentSettingsDelete.appendChild(productSup);
            productSup.className = "deleteItem";
            productSup.id = produitLocalStorage[produit].idProduit;
            console.log(productSup.id);
            productSup.couleur = produitLocalStorage[produit].couleurProduit;
            console.log(productSup.couleur);
            productSup.innerHTML += `<p class="deleteItem" onclick="deleteItem(' ${productSup.id} ',' ${productSup.couleur} ')">Supprimer</p>`;



            // si le panier est null
            function getCart() {
                let items = [];
                if (localStorage.getItem("panier") != null) {
                    items = JSON.parse(localStorage.getItem("panier"));
                }
                return items;
            }
            // Dans LocalStorage : suppression de l'article sélectionné 
            function deleteItem(id, color) {
                let items = getCart();
                for (i = 0; i < items.length; i++) {
                    if (idProduit === items[i][0] && couleurProduit === items[i][1]) {
                        items.splice(i, 1);
                        localStorage.setItem("panier", JSON.stringify(items));
                        window.location.reload();
                    }
                }
            }

        };


    }



}




