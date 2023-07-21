console.log("hello");
console.log("hii");
console.warn("this is a warning");
console.error("this is an error");
//integer
variable_one = 1000;
console.log(variable_one);
//string using ' ' // " " //` ` 
variable_two  = "this is a string" ;
console.log(variable_two) ;
console.log(typeof(variable_one));
console.log(typeof(variable_two));
//boolean
variable_three = false ;
console.log(variable_three);
console.log(typeof(variable_three)) ;
//null
variable_four = null ;
console.log(variable_four);
console.log(typeof(variable_four)) ;
//undefined
variable_five = undefined ;
console.log(variable_five);
console.log(typeof(variable_five)) ;

//console.log(variable_six);
//conditional statements
demo = 2 ;
if(demo >= 0)
{
    console.log(demo + " is a positive number") ;
}
else{
    console.log(demo + " is a negative number") ;
}

demo1 = 3 ;
demo1 >= 0 ?     console.log(demo1 + " is a positive number") :
console.log(demo1 + " is a negative number") ;

demo2 = -10 ;
demo2 >= 0 ? console.log(`${demo2} is a positive`): console.log(`${demo2} is a positive`);

flag = true ;
if(flag)
{
    var a = 100 ;
    
    console.log(`this value is inside if block is ${a} `);
}
else
{
    b = 200 ;
}
console.log(a);
//loops 
for(let i = 0 ; i < 5 ; i++)
{
    console.log(i);
}
let i = 0 ;
while(i < 5)
{
  console.log(i) ;
  i ++ ;  
}
//non-primitive datatypes 
//arrays 
//contiguous []
// first method
let numbers = [10,20,30,40,50] ;
console.log(numbers);

let arr = [10,20,30,40,50];
for(let i = 0 ; i< 5 ;i++)
{
    console.log(arr[i]);
}
//second method 
 let arr1 = [] ;
 console.log(arr1);
//third method
let d = 10 ;
console.log(d);
if(true)
{
    let d = 10 ;
    console.log(d);
}
const w = 28;
console.log(w);
let p;
p = 123422222222222222222222222222222222222n ;
console.log(p) ;
console.log(typeof(p));
//creating objects 
let var1 = {
    a : 3 ,
    b : 4 
}
console.log(var1.a + " " + var1.b) ;

let greet = {
    hii : "how are you" ,
    hey : "whassup ? "
}
console.log(greet .hii ) ;
console.log(greet.hey);
let array = [4,5,8,10 , false ,"hiii"];
console.log(array) ;
console.log(array[0])
console.log(array[7])
console.log("length of this array is ", array.length)
array[0] = 100 ;
array[6] = 500 ;
console.log(array) ;
array.push("woahhh",85,"eeee") ;
console.log(array) ;
array.unshift("going good");
console.log(array) ;
array.pop() ;
console.log(array) ;
array.shift()
console.log(array) ;
array.splice(1, 3) ;
console.log(array) ;
array.splice(3,0,82,89);
console.log(array) ;
