let emptyArray=[];
let hobbies=["Painting","Singing","Playing Piano","Reading","tennis","foorball"];
let number=[2, 34, 20, 100, 1];
console.log (number[1]);
console.log(hobbies.length);
hobbies.push("Fake Hobby");
console.log(hobbies[6]);
//console.log([hobbies.length-1])
console.log(hobbies.length);
hobbies.splice(-2);
// alternative way; hobbies.splice(hobbies.length-2);
//hobbies.pop(5); it is remove only the last element ;
console.log(hobbies.length);
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
console.log(hobbies[3]);
console.log(hobbies[4]);
hobbies=[];