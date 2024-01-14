//To close the offer bar
var offerBar = document.getElementById("offer-bar");
var closeOffer = document.getElementById("offer-close");

closeOffer.addEventListener("click", function (){
    offerBar.style.display = "none";
})

//Selecting Side Navbar, MenuIcon
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("close-nav");

menuicon.addEventListener("click", function (){
    sidenav.style.left = 0;
})

closenav.addEventListener("click", function (){
    sidenav.style.left = "-50%";
})

const products = [
    {
        id:1,
        name:"Floral Summer Shirt",
        src:"images/f1.jpg",
        desc:"",
        price:220,
        tags:["new","blue","summer"]
    },

    {
        id:2,
        name:"Summer Green",
        src:"images/f2.jpg",
        desc:"",
        price:260,
        tags:["new","green","beach"]
    },

    {
        id:3,
        name:"Party Floral Shirt",
        src:"images/f3.jpg",
        desc:"",
        price:399,
        tags:["old","red","party"]
    },

    {
        id:4,
        name:"Floral Summer Shirt",
        src:"images/f4.jpg",
        desc:"",
        price:399,
        tags:["old","white","beach"]
    },
    {
        id:5,
        name:"Beach Shirt",
        src:"images/f5.jpg",
        desc:"",
        price:579,
        tags:["old","white","beach"]
    }
    ,
    {
        id:6,
        name:"Shirt Party Red",
        src:"images/f6.jpg",
        desc:"",
        price:579,
        tags:["old","red","party"]
    },

    {
        id:7,
        name:"Party Floral Shirt",
        src:"images/f7.jpg",
        desc:"",
        price:399,
        tags:["old","red","party"]
    },
    {
        id:8,
        name:"Shirt Party Red",
        src:"images/f8.jpg",
        desc:"",
        price:579,
        tags:["old","red","party"]
    },
    {
        id:9,
        name:"Floral Summer Shirt",
        src:"images/f9.jpg",
        desc:"",
        price:220,
        tags:["new","blue","summer"]
    },
]

//Collection Search Functionality
var search = document.getElementById("search");
var productContainer = document.getElementById("product-container");

//close search functionality
var inputClose = document.getElementById("input-close");

search.addEventListener("input", function () {
    inputClose.style.display="inline";
    inputClose.style.position="absolute";
    var searchTerm = search.value.toLowerCase(); // Convert the input to lowercase for case-insensitive search
    var products = productContainer.getElementsByClassName("product");

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productName = product.getElementsByTagName("h1")[0].innerText.toLowerCase();
        var tags = product.getElementsByTagName("tags")[0].innerText.toLowerCase();

        // Check if the product name or tags contain the search term
        if (productName.includes(searchTerm) || tags.includes(searchTerm)) {
            product.style.display = "block"; // Show the product
        } else {
            product.style.display = "none"; // Hide the product
        }
    }
});

//To clear the search input field
inputClose.addEventListener("click", function (){
    inputClose.style.display = "none";
    search.value = '';
    var clearProductContainer = document.getElementById("product-container");
    var clearProducts = clearProductContainer.getElementsByClassName("product");
    for (var i = 0; i < clearProducts.length; i++) {
        var clearProduct = clearProducts[i];
        clearProduct.style.display = "block"; // Show the product
    }
})

var container=document.querySelector(".products")
products.forEach((product)=>{
    console.log("product.src",product.src);
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img style="width: 20vw;" src="https://yogapriya-star.github.io/Nostra-Website/${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`
    container.append(createItem)
})

var filterList =[]
var tags = document.getElementsByName("tags")
tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{
        if(e.target.checked)
        {
            filterList.push(e.target.value)
            update()
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()
        }
    })
})


function update()
{
    var productList = document.querySelectorAll(".product")
    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        var temp=product.querySelector("tags").innerHTML
        const tempFilterArray = temp.split(',');
        filterList.forEach((j)=>{
            tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })
        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }
    };
}

//clear checkbox filter
function clearFilter() {
    // Clear the checkbox
    var clearTags = document.getElementsByName("tags");
    for (var i = 0; i < clearTags.length; i++) {
        clearTags[i].checked = false;
    }
    var clearFilterProductContainer = document.getElementById("product-container");
    var clearFIlterProducts = clearFilterProductContainer.getElementsByClassName("product");
    for (var i = 0; i < clearFIlterProducts.length; i++) {
        var clearFilterProduct = clearFIlterProducts[i];
        clearFilterProduct.style.display = "block"; // Show the product
    }
}
