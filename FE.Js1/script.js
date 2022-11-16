/*let laptops = [                            // _______1
        {
            mark : "Acer",
            price : 25000
        },
        {
            mark : "Apple",
            price : 37000
        },
        {
            mark : "Asus",
            price : 125500,
        },
        {
            mark : "HP",
            price : 42000
        },
        {
            mark : "Samsung",
            price : 52000
        }
    ]
    */




    /*for (let i = 0; i < laptops.length; i++) {
        
            console.log(laptops[i].mark)
    }
*/


/*for (let i = 0; i < laptops.length; i++) {
        
            console.log(`

<div class= "laptop"> 
     
     <p>${laptops[i].mark}</p> 
     
</div> 
`)
}*/



/*for (let i = 0; i < laptops.length; i++) {
if(laptops[i].price>40000) {
    console.log(`
    <div class= "laptop"> 
     
     <p>${laptops[i].mark}</p> 
     
</div> 
   `) 
}
} */  



/*let laptopsSecond = [                               //___________2
{  
    mark : "Acer",  
    category : ["laptop", "tech"],  
    price : 25000  
    },  
    {  
    mark : "Apple",  
    category : ["notebook", "tech"],  
    price : 37000  
    },  
    {  
    mark : "Asus",  
    category : ["computer", "premium"],  
    price : 125500,  
    },  
    {  
    mark : "HP",  
    category : ["computer", "tech"],  
    price : 42000  
    },  
    {  
    mark : "Samsung",  
    category : ["notebook", "premium"],  
    price : 52000 } ]




for (let i = 0; i < laptopsSecond.length; i++) {
     if   (laptopsSecond[i].category[0]==="laptop"){
    console.log(`
        <div class= "laptop">
        <p>${laptopsSecond[i].mark}</p> 
        <p>${laptopsSecond[i].category}</p>
        <p>${laptopsSecond[i].price}</p>
</div> 
`)       
}
}



for (let i = 0; i < laptopsSecond.length; i++) {
    if   (laptopsSecond[i].category[1]==="premium"){
   console.log(`
    <div class= "laptop"> 
    <p>${laptopsSecond[i].mark}</p> 
    <p>${laptopsSecond[i].category}</p>
    <p>${laptopsSecond[i].price}</p>
</div> 
`)
}
}



for (let i = 0; i < laptopsSecond.length; i++) {
   if   (laptopsSecond[i].category[1]==="tech"){
  console.log(`
    <div class= "laptop"> 
    <p>${laptopsSecond[i].mark}</p>
    <p>${laptopsSecond[i].category}</p>
    <p>${laptopsSecond[i].price}</p>
</div> 
`)
}
}                                           
*/

/*let laptops =[]                            //___________3

let arr={}

for (let i = 0; i <3; i++){
    arr[1]=prompt("enter mark")
    arr[2]=prompt("enter price")
laptops.push({
        "mark":arr[1],
        "price":arr[2]
            })
}
console.log(laptops)*/




let laptopsSecond = [                               //________4
{  
    mark : "Acer",  
    category : ["laptop", "tech"],  
    price : 25000  
    },  
    {  
    mark : "Apple",  
    category : ["notebook", "tech"],  
    price : 37000  
    },  
    {  
    mark : "Asus",  
    category : ["computer", "premium"],  
    price : 125500,  
    },  
    {  
    mark : "HP",  
    category : ["computer", "tech"],  
    price : 42000  
    },  
    {  
    mark : "Samsung",  
    category : ["notebook", "premium"],  
    price : 52000 } ]


    
    /*let price = prompt("enter price") 
        for (let i = 0; i < laptopsSecond.length; i++) {
        if(laptopsSecond[i].price==price){
            console.log(`
            <div class= "laptop"> 
            <p>${laptopsSecond[i].mark}</p>
            <p>${laptopsSecond[i].category}</p>
            <p>${laptopsSecond[i].price}</p>
        </div> 
        `)
        }
        } */         
        
        let mark = prompt("enter mark") 
        for (let i = 0; i < laptopsSecond.length; i++) {
        if(laptopsSecond[i].mark==mark){
            console.log(`
            <div class= "laptop"> 
            <p>${laptopsSecond[i].mark}</p>
            <p>${laptopsSecond[i].category}</p>
            <p>${laptopsSecond[i].price}</p>
        </div> 
        `)
        }
        }  

   
    
    
    /*for (let i = 0; i <laptopsSecond.length; i++){
    if(laptopsSecond[i].price<=50000){
    console.log(`
    <div class= "laptop"> 
    <p>${laptopsSecond[i].mark}</p>
    </div>
    `)
    }
    }
*/