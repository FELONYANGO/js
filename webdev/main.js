

let no=['red ','blue','white'];
console.log(no);
//working on the comparisons

const result = 20 === '20' ? 'values match':'values do not match';
console.log(result);
result;

//working on conditional statements
let checkingValue;
if(20==20){
        checkingValue= 'the values are actually matching';

}else{
    checkingValue = 'values do not match';

}
// console.log(checkingValue);

// // //=======challenge two==========
// // const valueOne  = 0;
// // valueOne++;
// // valueOne++;
// // valueOne++;

// // console.log(valueOne);

// // ========challenge two=======
// const firstNumber = 20;
// const secondNumber = '20';

// const answer = firstNumber === secondNumber;
// console.log(answer);

// //=========challenge three two====
// const expression1 = 100%5;
// const expression2 =100/50;
// const expression3 = expression1<expression2;
// const expression4 = expression3 && 300+5 === 305
// const expression5 = !expression4
// console.log(expression4);
//======challenge four=====

const myobjct ={
    pop1: 'this is pop one',
    pop2 : 20

};
const myArray = [40,50,2];
const answerInFour = myobjct.pop2 ===(myArray[0]/myArray[2]);
console.log(answerInFour);

//=========challenge five========
const myObject = {
    myObjectOne :{
        price :100,
        nomber :2
    },
    myObjectTwo:{
        price :150,
        nomber :4
    }
};
const myarray = [myObject.myObjectOne,myObject.myObjectTwo];
const answerFive = (myarray[0].price*myarray[1].nomber);
console.log(answerFive);
//trial of mmediately invocked function

(function felix(){
    console.log("hello redington");    
})();

//arrow function=========
const arrowFunction=()=>{
    console.log("this is an arrow function");
}
arrowFunction();
//=========SWITCH STATEMENT======
function getPlanetName(id){
    var name;
    switch(id){
        case 1:
            name='mercury';
  console.log(name);
            break;
        case 2:
            name= 'venus';
              console.log(name);
            break;
        case 3:
            name  = 'earth';
              console.log(name);
            break;
        case 4:
            name =  'mars';
            console.log(name);
            break;
        case 5:
            name='jupiter';
              console.log(name);
            break;
  console.log(name);
        case 6:
            name = 'satan';
              console.log(name);
            break;
        case 7:
            name = 'urenus';
              console.log(name);
            break;
        case 8:
            name = "neptune";
              console.log(name);
            break;

        case 9:
            name='pluto';
              console.log(name);
            break;


        default:
            name="please enter valid id btwn 1-9";
            getPlanetName();
  console.log(name);
    }
    return name;
  
}
getPlanetName(6)
