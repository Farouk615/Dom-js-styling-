document.body.style="display:grid;grid-template-rows:100px 1fr auto;margin:0"
/* header section */
let header = document.createElement("header")
header.style = "display : flex ; justify-content : space-between ; align-items:center"

let headerNav = document.createElement("nav")
let headerNavUl = document.createElement("ul")
headerNavUl.style="display : flex ; list-style:none ; gap:10px ; margin-right:20px"
let headerNavUlListItemsTitle = ["Home","About","Service","Contact"]
for (let i=0;i<4;i++){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(headerNavUlListItemsTitle[i]))
    li.style="color:gray"
    headerNavUl.appendChild(li);
}
headerNav.appendChild(headerNavUl)
let headerH1 = document.createElement("h1")
headerH1.style="margin:0 0 0 10px;color:green"
let headerH1Text = document.createTextNode("Elzero")
headerH1.appendChild(headerH1Text)

header.appendChild(headerH1)
header.appendChild(headerNav)

document.body.prepend(header)

/* end header section */

/* body section */

let main = document.createElement("main")
main.style="display:grid;grid-template-columns: repeat(auto-fill,minmax(300px,1fr));gap:30px;background-color:#EEEE;padding:2rem"
document.getElementsByTagName("header")[0].after(main)
for(let i=1;i<16;i++){
    let productCard = document.createElement("div")
    productCard.style="background-color:white;text-align:center"
    let productNumber = document.createElement("h2")
    let productText = document.createElement("p")

    let productNumberContent = document.createTextNode(i)
    let productTextContent = document.createTextNode("product")

    productText.appendChild(productTextContent)
    productNumber.appendChild(productNumberContent)

    productCard.appendChild(productNumber)
    productCard.appendChild(productText)

    main.appendChild(productCard)
}

/* body section end */

let footer = document.createElement("footer")
footer.style="background-color:#0080009e;text-align:center;color:white"
let footerCopyrights = document.createElement("h3")
let footerCopyrightsContent = document.createTextNode("Copyright 2021")
footer.appendChild(footerCopyrights)
footerCopyrights.appendChild(footerCopyrightsContent)
main.after(footer)
/* footer section */




