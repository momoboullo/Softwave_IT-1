// log message
console.log('Welcome to Node JS');

// student obj
let student = {
    name : 'Naveen Saggam',
    age : 31,
    course : 'MCA',
    address : 'Hyderabad',
    hobbies : ['eating','coding','sleeping']
};
console.log(student);

// print Numbers
let printNumbers = () =>  {
    let result = '';
    for(let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            result += `${i}`;
        }
        result += '\n';
    }
    console.log(result);
};
printNumbers();

// print Message
let msg = "NAVEEN SAGGAM";
let printMessage = function(str) {
    let tempStr = '';
    for(let i=1; i<=str.length;i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    console.log(tempStr);
};
printMessage(msg);

/*
    1
    12
    123
    1234
    12345

 */

/*
    12345
    1234
    123
    12
    1

 */

/*
    54321
    5432
    543
    54
    5

 */

/*
    55555
    4444
    333
    22
    1

 */

/*
   GOOD
   GOO
   GO
   G

 */

/*
   GOOD
    OOD
     OD
      D
 */

/*
       D
      OD
     OOD
    GOOD

 */






