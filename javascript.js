
//******************************PRODUCTS**************************


 //ARRAY OF PRODUCTS
let products = 
[
{id:1,name:'Legacy T-Shirt',color:'Red',price:'£7.99',stock:'good-stock',image:'images/tshirts/tshirt1.jpg',description:'Perfect for those graduating this year. Get a bargain whilst we have the stock.'},
{id:2,name:'Legacy T-Shirt',color:'Green',price:'£7.99',stock:'last-few',image:'images/tshirts/tshirt2.jpg',description:'Limited stock. Grab these nostalgic items before they make their way onto eBay.'},
{id:3,name:'Legacy T-Shirt',color:'Blue',price:'£7.99',stock:'out-of-stock',image:'images/tshirts/tshirt3.jpg',description:'Sadly we are sold out of this legendary item. Keep an eye out for future stock.'},
{id:4,name:'Legacy T-Shirt',color:'Cyan',price:'£7.99',stock:'good-stock',image:'images/tshirts/tshirt4.jpg',description:'Perfect for those graduating this year. Get a bargain whilst we have the stock.'},
{id:5,name:'Legacy T-Shirt',color:'Magenta',price:'£7.99',stock:'out-of-stock',image:'images/tshirts/tshirt5.jpg',description:'Sadly we are sold out of this legendary item. Keep an eye out for future stock.'},
{id:6,name:'Legacy T-Shirt',color:'Yellow',price:'£7.99',stock:'last-few',image:'images/tshirts/tshirt6.jpg',description:'Limited stock. :Grab these nostalgic items before they make their way onto eBay.'},
{id:7,name:'Legacy T-Shirt',color:'Black',price:'£7.99',stock:'out-of-stock',image:'images/tshirts/tshirt7.jpg',description:'Sadly we are sold out of this legendary item. Keep an eye out for future stock.'},
{id:8,name:'Legacy T-Shirt',color:'Grey',price:'£7.99',stock:'good-stock',image:'images/tshirts/tshirt8.jpg',description:'Perfect for those graduating this year. Get a bargain whilst we have the stock.'},
{id:9,name:'Legacy T-Shirt',color:'Burgundy',price:'£7.99',stock:'last-few',image:'images/tshirts/tshirt9.jpg',description:'Limited stock. Grab these nostalgic items before they make their way onto eBay.'},
];

//****************************************************************
//******************************PRODUCTS PAGE*********************
//****************************************************************

//DISPLAY PRODUCTS
function displayProducts(productList){     //accepts argument so that we can filter out of stock later
 		const container=document.getElementById('products');
        container.innerHTML="";
 
 productList.forEach(product=>{
		
	let productDiv='<div style="border:4px solid #BE1622; padding:10px; margin:10px;">';
	
		productDiv +='<div style= padding:10px; margin:10px;">';
		productDiv += '<img src="'+ product.image + '"style=width=100; height=200; display:block; object-fit:contain;">';
		productDiv +='</div>';
		
		productDiv +='<h3 style="color:#BE1622; text-decoration:underline;">'+product.name + '</h3>';
		productDiv += '<p style="color:#BE1622;"> Color: ' +product .color + '</p>';
		productDiv += '<p style="color:#BE1622;">Price:  ' + product.price + '</p>';
		productDiv += '<p style="color:#BE1622;">Stock:  ' + product.stock + '</p>';
		productDiv += '<p style="color:#BE1622;">Description: ' + product.description + '</p>';
		
		
		productDiv += '<button id="cartButton" onclick="addToCart(' + product.id+ ')">Add to Cart</button>';
		productDiv += '<br/> <br/> <button id="detailsButton" onclick="viewDetails(' + product.id+ ')">View Details</button>';
		
		productDiv += '</div>'; //close div
		container.innerHTML+=productDiv;
	  });
}


//ADD PRODUCTS TO CART

function addToCart(id)
{
    let product = products.find(p => p.id === id);
    
    // Get existing cart or create new
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart) {
        cart = [];
    }
    
	
    cart.push(product);
    
    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert('Added to cart!');
}

//****************************************************************
//******************************CART PAGE*********************
//****************************************************************

//VIEW CART

 if (document.getElementById("cartItems")) {
	 let cart = JSON.parse(localStorage.getItem('cart'));
	 
	 if(cart && cart.length > 0) {
		 let total = 0;

		 cart.forEach(item => {
			 document.getElementById('cartItems').innerHTML += 
				'<p> Item:' + item.name+"<br>" +
					'Colour:' +item.color+ "<br>"  +
					'Price:'	 +' - ' +  item.price +"<br>" +
					'<img src="'+ item.image + '"width="200" height="auto" "align">'; "<br>" + 
						 +item.description+'</p>';
				 
			 total += parseFloat(item.price.replace("£",""));
		 });
		 document.getElementById('cartItems').innerHTML += 
			 '<h3 style="text-align:right;">Total: £' + total + '</h3>';
		
		
	 } else {
		 document.getElementById('cartItems').innerHTML = '<p>Cart is empty</p>';
	 }
 }
 
 //FILTER STOCK
 function showProducts(){
	
//Description:addEventListener, "change" and option selection
//Author:Jack Daniels
//Date:2015
//Source:https://stackoverflow.com/questions/24875414/addeventlistener-change-and-option-selection
	
   document.getElementById("stockFilter").addEventListener("change", showProducts );  //stock filter is the select id

   const stockFill=document.getElementById("stockFilter").value; //from the drop down-value=the different options

    let stockProducts; // new variable for selected products
	
    if(stockFill==="all")
	{
		stockProducts=products;	//display all products in the array
	}
	else 
	{
//Description:Array.prototype.filter()
//Author:Java Script tutorial
//Date:2009
//Source:https://www.javascripttutorial.net/javascript-array-filter/
	
	stockProducts=products.filter(p=>p.stock===stockFill); //filter creates a new array with tshirts that their stock key is equal to the option in the dropdown metjod
		
	}
	displayProducts(stockProducts); //call function displayProducts but with only these products
	}
	

//****************************************************************
//******************************ITEM PAGE*********************
//****************************************************************

//VIEW DETAILS
function viewDetails(id){
	

	    let selectedProduct = products.find(p => p.id === id);
    
    sessionStorage.setItem('item', JSON.stringify(selectedProduct));
	window.location.href="item.html";
    
}

if (document.getElementById("selectedProduct")) {
	
	let item = JSON.parse(sessionStorage.getItem("item"));
	
		let selectedDiv='<div style="border:5px solid #BE1622; padding:30px; margin:10px; text-align:center;font-size:25px;">';

	
     selectedDiv += '<p> Item:' + item.name+"<br>" ;
	 selectedDiv +='Colour:' +item.color+ "<br>"  ;
	selectedDiv += 'Price:'+' - ' +  item.price +"<br>" ;
	 selectedDiv +='Description:'  +item.description+"<br>";
	selectedDiv +='<img src="'+ item.image + '"width="400" height="auto" "align">'; '</p>';
	selectedDiv += '<button id="cartButton" onclick="addToCart(' + item.id+ ')">Add to Cart</button>';

	selectedDiv += '</div>';
	
document.getElementById('selectedProduct').innerHTML+=selectedDiv;
	
}


//****************************************************************
//****************************** BUTTONS *********************
//****************************************************************

//Description: Scroll Back to top
//Author:W3Schools
//Date:2020
//https://stackoverflow.com/questions/11235127/javascript-document-getelementsbyclassname-returning-undefined



function topFunction(){
	document.documentElement.scrollTop=0; //vertical scroll position of the body=0 for modern browsers
}

//****************************************************************
//****************************** BURGER MENU *********************
//****************************************************************

//Description: getElementsByClassName returns undefined
//Author:Amir Kh
//Date:2020
//https://stackoverflow.com/questions/11235127/javascript-document-getelementsbyclassname-returning-undefined

function toggleMenu(){
	let navigation=document.getElementsByClassName("fullScreen")[0]; //returns the first element 
	
	if(!navigation) return;
	
	
//Description: hide/display elements
//Author:Geeks for geeks
//Date:2025
//https://www.geeksforgeeks.org/javascript/how-to-toggle-between-hiding-and-showing-an-element-using-javascript/
	
	if(navigation.style.display==="flex") //in css fullscreen if set to flex to be responsive
	{
	navigation.style.display="none";
	}
	else
	{
	navigation.style.display="flex";
	}
}




