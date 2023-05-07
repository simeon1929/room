console.log('loops started');
console.log('for loops started');

for(let num = 0 ; num < 5; num++){
    console.log('Numbers are', num);
   // console.log('Loops checked');
}

console.log('for loop ended');

console.log('Array using for loops');

const names = ['Simoen', 'Beulah', 'Evania', 'Abram']
console.log('Names =', names);
console.log('Array length', names.length);
for( let i = 0; i < names.length; i++) {
    console.log('for loop tested', names[i]);

    let html = `<div>${names[i]}</div>`
    console.log('Html Tag', html);
}

names.forEach(element => {
    console.log(element);
});


console.log('While loop');
let i = 0
while(i< 10) {
    i++
    console.log('while loop numbes', i);
}

console.log('while loop arrays ');

const whiNames = ['Simeon', 'Beulah', 'Evania', 'Abaram']
console.log('While loop Names');

let whiInt = 0 
while(whiInt < whiNames.length){
    console.log('While Array Values ', whiNames[whiInt]);
    whiInt++
}