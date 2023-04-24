





        /*alert("Roni Das");
        document.write("Name : Roni Das Phone: 0182781668")


        

    var num = 20
     num = toString(num)
    console.log(typeof(num))

    var num = "3.56"
    num = parseFloat(num)
   console.log(typeof(num))*/


      var num = 2.5689;
    
   console.log(num.toFixed(2))
   console.log(num.toPrecision(2))

   console.log(Number("12"))
   console.log(Number("12.5"))
   console.log(Number(true))
   console.log(typeof(Number("12")))



   //how to add or concatenate strings
   /*var frist = "My"
   var middle = "Roni"
   var last = "Das"

   document.write(frist + " Name is " + middle +" "+ last)*/



   //Library functions for string

   /*var off = prompt("Enter your nume:  ");

   document.write("My nume is " + off.length )*/



    //Library functions for string
   /*var fff = "bangladesh"
   document.write(fff.charAt(2))
   var ddd = "roni Das"
   text = ddd.toUpperCase();
   text1 = ddd.toLowerCase();


   document.write(text)
   document.write(text1)


   var na = "Roni"
   var ni= " das"
   var ip = na.concat(ni)
   document.write(ip)


   var nt = "Roni das"
   th = nt.slice(1,3)
   document.write(th)*/






   //Arithmetic and assignment operator


   /* + , - , / , % , * , ++ , -- Arithmetic
   assignment +=, -=, /=, %=, *=
  var x = 6;
  x+=6;
  console.log(x)*/




  ///Make your own calculator


  /*var num1 = prompt("Enter Your First Number : ");
  var num2 = prompt("Enter Your Secound Number : ");

  num1 = parseInt(num1);
  num2 = parseInt(num2);

   var result;
   
  result = num1+num2;
  document.write(num1 + " + "+ num2 +" = "+result + "<br/>");


  result = num1-num2;
  document.write(num1 + " - "+ num2 +" = "+result + "<br/>");


  result = num1*num2;
  document.write(num1 + " * "+ num2 +" = "+result + "<br/>");


  result = num1/num2;
  document.write(num1 + " / "+ num2 +" = "+result + "<br/>");


  result = num1%num2;
  document.write(num1 + " % "+ num2 +" = "+result + "<br/>");*/


  // how to make temperature converter


  /*var farn = parseFloat(prompt("Emter Your farhenhight : "))

  var cels = (farn-32) * (5/9);


  document.write("Fahenhight : " + cels);*/



  
  /*var cels = parseFloat(prompt("Emter Your Cels : "))

  var farren = (cels * 9/5) + 32;


  document.write("cels : " + farren);*/


  //Relational and Logical Operator


  /*document.write(20>15);
  document.write(20<35);
  document.write(10>=10);
  document.write(15<=15);
  document.write(20!=15);
  // == operator chack valu
  document.write(20==20);
  // === operator chack valu and data type
  document.write(20==="20");

  // != operator chack valu
  document.write(30!=20);
    // !== operator chack valu and data type


//logical operator
// && and operator two valu true or output true
document.write(30>=30  && 30>20);


// || or operator one valu true or any valu false output true
document.write(30>30  ||  30>20);

// ! not operator true ke false and false ke true
document.write(!(30>=30));
document.write(!(50>60));*/


/// if, else if, else

/*var marks = prompt("Enter You Marks Here: ")

if(marks>=80)
document.write("Congratulation Got You A+ ")

else if(marks>=70)
document.write(" You  got A ");
else if(marks>=60)
document.write(" You  got A- ");
else if(marks>=50)
document.write(" You  got B ");
else if(marks>=40)
document.write(" You  got C ");
else if(marks>=33)
document.write(" You  got D ");
else
document.write("Failed")*/




/// logical operator use and, or, not...



/*var marks = prompt("Enter You Marks Here: ")

if (marks > 100  || marks < 0)
document.write("Invalid Marks")

else if(marks>=80 && marks<=100)
document.write("Congratulation Got You A+ ")

else if(marks>=70 && marks<=79)
document.write(" You  got A ");
else if(marks>=60 && marks<=69)
document.write(" You  got A- ");
else if(marks>=50 && marks<=59)
document.write(" You  got B ");
else if(marks>=40 && marks<=49)
document.write(" You  got C ");
else if(marks>=33 && marks<=39)
document.write(" You  got D ");
else
document.write("Failed")*/


/// large number

/*var num1 = prompt("Enter num1: ")
var num2 = prompt("Enter num2: ")
var num3 = prompt("Enter num3: ")


if(num1>num2 && num1>num3)
   document.write("Large Num = " + num1);

else if(num2>num1 && num2>num3)
   document.write("Large Num = " + num2);

else
   document.write("Large Num = " + num3);*/


   //vowel & consonant


/*var latter = prompt("Enter you letter : ")


latter = latter.toLowerCase();

if (latter == "a"  || latter == "e" || latter == "i" || latter == "o" || latter == "u")
   document.write("Vowel");


else
document.write("Consonant");*/


/// switch,case,break,defalut use number output


/*var digit = prompt("Enter any digit:  ")


switch(digit){
   case "0":
      document.write("Zero");
      break;
   case "1":
      document.write("One");
      break;
   case "2":
      document.write("Two");
      break;
   case "3":
      document.write("Three");
      break;
   case "4":
      document.write("Four");
      break;
   case "5":
      document.write("Five");
      break;
   case "6":
      document.write("Six");
      break;
   case "7":
      document.write("Seven");
      break;
   case "8":
      document.write("Eight");
      break;
   case "9":
      document.write("Nine");
      break;
   default:
      document.write("Not a digit");           
}*/


/// switch,case,break,defalut use vowel & consonant

/*var latter = prompt("Enter you letter : ")


latter = latter.toLowerCase();

switch(latter){
   case "a":
   case "e":
   case "i":  
   case "o":
   case "u":
      document.write("Vowel");
      break;
   default:
      document.write("Consonant");
}*/



  



