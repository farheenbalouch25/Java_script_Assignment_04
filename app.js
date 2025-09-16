// chapter 17 to 20

// 01

// var arr= [[],[] ];
// console.log(arr);


// 02

// var arr = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];

 
// for (var i = 0; i < arr.length;i++){
//  console.log(arr[i]);
  
//  }

// 03

// for(var num= 0; num<=10;num++){
//   console.log(num);
  
// }

// 04

// var num= prompt("Enter Number to show its multiplication table")

// for(i = 1; i<=10;i++ ){
//   document.write(num +"x "+ i+ "=" +(num*i)+ "<br>")
  
// }

// 05
// var arr= ["apple "+ "<br>"+ "banana"+"<br>"+ "mango"+"<br>"+ "orange"+ "<br>"+ "strawberry" +"<br>"];
// document.write(arr +"<br>")
// document.write("Element at index 0 is apple <br>")
// document.write("Element at index 1 is banana <br>")
// document.write("Element at index 2 is mango <br> ")
// document.write("Element at index 3 is orange <br> ")
// document.write("Element at index 4 is Straberry  <br>")

// 6

// var numbers= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// document.write("<b> Counting" +"<br>")
// document.write(numbers +"<br>")

// for ( var num = 10; num >= 1; num--) {
  
//   document.write(num + "<br>");
// }

// var even =[0,2,4,6,8,10,12,14,16,18]
// document.write("<br>"+ even)

// var odd=[1,3,5,7,9,11,13,15,17,19]

// document.write( "<br>"+ odd)


// var series = [];

// for (var i = 2; i <= 20; i += 2 ) {
//   series.push(i   +  "k");   
// }

// document.write(series.join( ", " ) );

// 07

// var Order = ["cake", "apple pie", "cookie", "chips", "patties"];


// var userInput = prompt("Welcome What do you want to order?").toLowerCase();

// var found = false;  

// for (var i = 0; i < Order.length; i++) {
//   if (Order[i] === userInput) {
//     alert(userInput + " is available at index " + i + " in our bakery ");
//     found = true;
//     break;  
//   }
// }

// if (!found) {
//   alert("Sorry, " + userInput + " is not available ");
// }

// 08
// var numbers=[24,53,78, 91,12];

// var largest = numbers[0];

// for(var i = 1;i<numbers.length; i++){
//   if(numbers[i]> largest){
//     largest=numbers[i];
//   }
// }
// console.log("larges number is: " +largest);
        
// 09

//  var numbers=[24,53,78, 91,12];

//  var smallest = numbers[0];

//  for(var i = 1;i<numbers.length; i++){
//    if(numbers[i]< smallest){
//      smallest=numbers[i];
//    }
//  }
//  console.log("smallest number is: " +smallest);

// 10

// for (var i = 5; i <= 100; i += 5) {
//   document.write(i + "<br>");
// }



// chapter 21 to 25

// 1
// var name1=prompt("Enter first name")
// var name2=prompt("Enter last name")


// var fullName = name1 + " " + name2; 
// console.log(fullName);


// 02

// var mobile = prompt("Enter your favorite mobile phone model");

// document.write("Your favorite phone is: " + mobile + "<br>");
// document.write("Length of your input is: "+mobile.length )

// 03

// var word = "pakistani";

// var index=0;
// for(var i = 0; i< word.length; i++){
//   if(word[i]=== "n"){
//     index=i;

//   }
// }
//     document.write("String: " + word + "<br>");
//     document.write("Index of 'n': " + index);

// 04

//     var word = "Hello World";

// var index=0;
// for(var i = 0; i< word.length; i++){
//   if(word[i]=== "l"){
//     index=i;

//   }
// }
//     document.write("String: " + word + "<br>");
//     document.write("Index of 'l': " + index);


    // 5

//   var word = "Pakistani";
//  var index = 3;
//  var letter = word[index]; 
//     document.write("String: " + word + "<br>");
//     document.write("Index of '3': " + letter);

    