let carts = document.querySelectorAll('.add-cart');


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

function Size() {  
    // var mylist1 = document.getElementById("myList1");

    // document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
    } 

function Glazing() {  
    var mylist2 = document.getElementById("myList2");  
    // document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
    } 


/*** Object Constructors ***/
function Original() {
    this.name = "Original";
    this.price = "$3.00";
    this.image = "images/Original.jpg";
    this.alt = "Original flavor cinnamon rolls picture";
    document.getElementById("cinnanmon-img").setAttribute("src", this.image);
    console.log("ADSFds");
    document.getElementById("cinnanmon-img").setAttribute("alt", this.alt);
  }

function Blackberry() {
    this.name = "Blackberry";
    this.price = "$4.00";
    this.image = "images/Blackberry-Cinnamon-Rolls.jpg";
    this.alt = "Blackberry Cinnamon Rolls picture";
  }

function Walnut() {
    this.name = "Walnut";
    this.price = "$3.50";
    this.image = "images/Walnut-Cinnamon-Rolls.jpg";
    this.alt = "Walnut Cinnamon Rolls picture";
  }

function Original_free() {
    this.name = "Original (Gluten-free)";
    this.price = "$3.50";
    this.image = "images/Original-gluten-free.jpg";
    this.alt = "Original gluten free cinnamon rolls picture";
  }

function Pumpkin_Spice() {
    this.name = "Pumpkin Spice";
    this.price = "$4.00";
    this.image = "images/pumpkin-cinnamon-rolls.jpg";
    this.alt = "pumpkin cinnamon rolls picture";
  }

function Caramel_Pecan() {
    this.name = "Caramel Pecan";
    this.price = "$4.00";
    this.image = "images/Caramel-Pecan-Cinnanmon-Rolls.jpg";
    this.alt = "Caramel Pecan Cinnanmon Rolls picture";
  }
  
  /*** Global Variables ***/
//   var cinnanmons = [new Original(), new Blackberry(), new Walnut(), new Original_free(), Pumpkin_Spice(), Caramel_Pecan()];
  
  /*** Functions ***/
  // generates either a Cat, Dog, or Bird with a random name and random age
  function generateCinnanmon(number) {

    var cinnanmonType = cinnanmons[number];
  
    if (cinnanmonType instanceof Cat) 
    {
      return new Cat(generateRandomName(), generateRandomAge());
    } 
    else if (cinnanmonType instanceof Dog) 
    {
      return new Dog(generateRandomName(), generateRandomAge());
    } 
    else if (cinnanmonType instanceof Bird) 
    {
      return new Bird(generateRandomName(), generateRandomAge());
    }
  }
  
  /*** Document Load ****/
  function onLoad(number) {
    // generate a random animal when the document opens
    var cinnanmon = generateCinnanmon(number);
    console.log(cinnanmon)
    // update the page based on the animal properties
    document.getElementById("cinnanmon_name").textContent = cinnanmon.name + "  " + animal.age + "years old";
    document.getElementById("animal-properties").textContent = cinnanmon.name + "  " + animal.age + "years old";
    document.getElementById("animal-properties").textContent = cinnanmon.name + "  " + animal.age + "years old";
    document.getElementById("changable_picture").setAttribute("src", cinnanmon.image)
  
  };
