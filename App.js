// //#region EventsEmitter

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();


// eventEmitter.on('log in',(name="monis")=>{
//     console.log(`You have logged in with the user name ${name}`);

// })


// eventEmitter.emit('log in');
// console.log('hello world')
// //#endregion
// //#region extending event emiiter Class


// class Person extends EventEmitter {
//     constructor(name){
//         super();
//         this.name=name; 
//     }
//     greetingsWithName () {
//       console.log(`Hello ${this.name}`);
        
//     }
// }
// const Monis = new Person('Monis');


// Monis.on('greetings',Monis.greetingsWithName);

// Monis.emit('greetings');

// //#endregion
// //#region ReadLine
// const ReadLine = require('readline');

// const rl=ReadLine.createInterface({input:process.stdin,
//                           output:process.stdout    
// });

// let num1 =4;
// let num2 =5;
// let answer =num1+num2;


// rl.question(`What is ${num1} + ${num2} ?`,(userInput) => {
//     if(parseInt(userInput.trim()) === answer){
//         console.log('correct');
//         rl.close();
//     }
//     else{
//         rl.setPrompt(`'Your Answer of ${userInput} is inccorect \n'`);
//         rl.prompt();
//         rl.on('line',(userInput) => {
//             if(parseInt(userInput.trim()) === answer){
//                 console.log('correct');
//                 rl.close();
//             }
//             else{
                
//                 rl.setPrompt(`'Your Answer of ${userInput} is inccorect \n`);
//                 rl.prompt();
//             }
//         });

//     }
// })


// rl.on('close', ()=>{
//     console.log("You have got 1 point by answering it right");
// })


// //#endregion
// // #region FileSystem In Nodejs
// const fs = require('fs');
// fs.writeFile('Exampl.txt','I will never do a shame in My life again In Sha Allah',(err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('You have sucessfully overritten the file');
//         fs.readFile('Exampl.txt', (err,file) => {
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         })
//     }
// }) 
// //#endregion 
// var http =require (


// function implementingFilter(array,callback){
//     let arrayNew=[];
//     for(let i=0; i<array.length; i++){
//         if(callback(array[i]!=null)){
//             arrayNew.push(callback(array[i]));
//         }
//         console.log(arrayNew);
//     }
//     // return arrayNew;
// }
// let a=implementingFilter([1,2,3,4,5],(data) => {
//     if(data!==2){
//         return data;
//     }
//     else
//     null;
// })
// console.log(a);
 let posts =[{postid:1,post:'This is post no1'},{postid:1,post:'This is post no1'},];
function getPost(){
    posts.forEach(element => {
     console.log(element.post);   
    });
}
createPost = (postData) => {
    posts=[...posts,postData];
}
// setTimeout(() => createPost({postid:1,post:'This is post no1'}),3000);
const  hello = () => {
    return new Promise((resolve,reject) => {
    setTimeout(() =>{
            createPost({postid:1,post:'This is post no1'});
            let erros =false;
            return erros ? 
            reject('reject'): resolve('resolved');
    },5000);
})};
let  answer =  async () => {
    let me= await hello();
    console.log(me);
    console.log("yaar nai chala")
};
answer();
console.log("hello");



