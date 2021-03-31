let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Original",
        price: "$3.00",
        image: "images/Original.jpg",
        alt: "Original flavor cinnamon rolls picture",
    
    },
    {
        name: "Blackberry",
        price: "$4.00",
        image: "images/Blackberry-Cinnamon-Rolls.jpg",
        alt: "Blackberry Cinnamon Rolls picture",
    
    },
    {
        name: "Walnut",
        price: "$3.50",
        image: "images/Walnut-Cinnamon-Rolls.jpg",
        alt: "Walnut Cinnamon Rolls picture",
    
    },
    {
        name: "Original (Gluten-free)",
        price: "$3.50",
        image: "images/Original-gluten-free.jpg",
        alt: "Original gluten free cinnamon rolls picture",
    
    },
    {
        name: "Pumpkin Spice",
        price: "$4.00",
        image: "images/pumpkin-cinnamon-rolls.jpg",
        alt: "pumpkin cinnamon rolls picture",
    
    },
    {
        name: "Caramel Pecan",
        price: "$4.00",
        image: "images/Caramel-Pecan-Cinnanmon-Rolls.jpg",
        alt: "Caramel Pecan Cinnanmon Rolls picture",
    
    }
]

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })
}

function viewNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers !=0){
        document.getElementById('item_length').innerText = productNumbers;
    }
    else{
        document.getElementById('item_length').innerText = 0;
    }
}


function updateNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers !=null){
        localStorage.setItem('cartNumbers', productNumbers + 1);   
        }
    else{
        localStorage.setItem('cartNumbers',1);
    } 
    viewNumbers();
}

// var items = [];

// function addItem(){
//     items.push("hahah");
//     console.log(items);
	
// }

// function showlLength(){
//     items.length;
//     console.log(items);
	
// }

function Size() {  
    var mylist1 = document.getElementById("myList1");

    // document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
    } 

function Glazing() {  
    var mylist2 = document.getElementById("myList2");  
    // document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
    } 

