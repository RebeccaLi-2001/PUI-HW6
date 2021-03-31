let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Original",
        price: "$4.00",
        image: "images/shopping-bag.png",
        alt: "shopping bag icon",
    
    },
    {
        name: "Blackberry",
        glazing: "None",
        inCart:0
    },
    {
        name: "Walnut",
        glazing: "None",
        inCart:0
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

