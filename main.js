//console.log("Hello World");
        // let firstname,lastname = "Daily tuition", Age=24;
        // console.log(firstname);
        // console.log(lastname);
        // console.log(Age);

        // let Goal = "Tutorial make Happy" // this is a literal = "Tutorial make Happy"
        // let reference = Goal;
        // console.log(Goal);
        // console.log(reference);

        // const blue = Symbol();
        // const white = Symbol("color white");
        // console.log(blue===white);

        //primitive data type

        // let Myvalue;

        // Myvalue=null;
        // Myvalue=19.4;
        //Myvalue=undefined;

        //console.log(Myvalue);

        // Object
         
        // const obj = {
        //     name:"Rajshekar",
        //     age:28
        // }
        // console.log(obj.name);
        // console.log(obj.age);

        //Deleting object properties
        // const obj = {
        //     name:"Rajshekar",
        //     age:28
        // }

        // delete(obj.age);
        // console.log(obj.age);

        // Creating a array with different data types
            
        // const a1 = [1,2,3,4,5,];
        // const a2 = [1,2,null,5,'five'];
        // const a3 = ['hello','world','array'];

        //have an array containing array

        // const a4 = [
        //     [1,2,3],
        //     [4,5,6]
        // ];

        //get array length

        //console.log(a3.length);
        // change array element
        // a3[0]="welcome";
        // console.log(a3[0]);
        //console.log(a3);

        //displaying date

        // const now = new Date();
        // console.log(now);
        
        // const dt = new Date(2018,08,09,15,00);
        // console.log(dt);
        
        // representing string
        //  let str = 'iam from,"prostack academy"';
        //  let str1 = "iam from bijapur";

         //displays error,but we have to use backslash and string literal to correct it... 
         //let strerror = "we took back bag from him,he said \"Don\'t touch my bag\"";

        // string concatenation
        
        // let temp = 20.5;
        // let strcap =`weather of india is ${temp}\u00b0c`;

        // console.log(strcap);

        // printing next line \n 

        // let str = "One line\n Second line";
        // console.log(str);

        // multiline code with back tick

        // let str = `One line \n Second line`;
        // console.log(str);

        // let str1 = 5*'5';
        // let srt2 = 5+'5';
        // console.log(str1);
        // console.log(str2);

        // control statements
        //if statement

        // let time = 8;

        // if(time<10){

        //     console.log("Good Morning");
        // }else{
        //     console.log("Wrong time")
        // }

        // nested if and else statements

        // let time = 9;

        // if(time<10)
        // {
        //     console.log("Good Morning");
        //     if(time==8)
        //     {
        //          console.log("Have a nice day");   
        //     }
        // }
        // else if(time<17)
        // {
        //     console.log("Wrong time")
        // }
        // else{
        //     console.log("go to hell");
        // }
        
        //switch statement

        /*
        example
        which language do you choose
        1)javascript 2)python 
        3)Java  4)Asp.net 

        let ans = 1;

        switch(ans){
            case 1:
                console.log("you have selected javascript");
            break;
            case 2:
                console.log("you have selected python");
            break;
            case 3:
                console.log("you have selected Java");
            break;
            case 4:
                console.log("you have selected Asp.net");
            break;
            default:
                console.log("youn have not selected any language");
            break;
            }
                */

            //while loop
            
            // let count = 0;
            // while(count<10){
            //     console.log(count);
            //     count++;
            // }

            // let count = 10;
            // while(count>=0){
            //     console.log(count);
            //     count--;
            // }

            //do while loop

            // let count = 0
            // do{         //execute this block atleast once
            //     console.log("count value" + count);//print count variable value on console
            //     count++         //increase count variable value by 1
            // }while(count<5); //evaluate expression

            //for loop

            /* print 0 to 4 on the console */
            // for(let count=0; count<5; count++){
            //     console.log("Number is "+ count);
            // }

            // for(let i=0,j=5;i<5;i++,j--){
            //     console.log(i+" and "+ j);
            // }
            
            //for in loop

            // const obj = {a:5,b:6,c:8,h:10}

            // for(let o in obj)
            // {
            //     // console.log("o" + obj[o]);
            //     // console.log(obj[o]);
            //     console.log(o + " : " + obj[o]);
                
            // }
            // for...of loop

            // let array = [1,2,3,4,5];
            // for(let value of array)
            // {   //value+=1 //increaseing value of array 
            //     console.log(value);
            // }
            
            //Js Expressions
            // let y,j;  //Declare variable y
            // j = y = 4*5;//combine three expressions multiplication (*) and assignment(=)
            // j=y=20;// Evaluate multiplication
            // j=20; //assign 20value to variable to Y
            //         //j is still undefined
            // 20;//assign 20 variable value to the variable j
            // console.log(y);
            // console.log(j);

            //JS Operator's

            //Addition
            //console.log(5+3);
            
            //Substraction
            //console.log(5-2);

            //multiplication
            //console.log(6*8);
            
            //division
            //console.log(10/5);
            
            //Reminder
            //console.log(10%3);// will be 1
            
            //unary negation
            //if y=10 then -y will be -10
            
            //unary plus
            //if y=-10 then +y will be +10
            
            //pre and post increment
            // let j,
            // x = 5;
            // j = ++x;//Pre-increment
            // console.log(j + "with Pre increment");//will be 6

            // let j,
            // x = 5;
            // j = x++;//Post-increment
            // console.log(j + " with Post increment");//will be 5
            // j = x++;//Post-increment
            // console.log(j + " with Post increment");//will be 6

            //Logical Operator
            
            // let x= 10;
            //     y =10;
            // if(x===10 && y===10){
            //     console.log("true");
            // }else{
            //     console.log("false");
            // }
            
            //OR Operator
            
            // let x= 10;
            //     y =10;
            // if(x===10 || y===10){
            //     console.log("true");
            // }else{
            //     console.log("false");
            // }

            //NOT Operator

             let x = true;
            console.log(!x);//invert value of the z boolean variable to false
