//1
randomok = [];
for (let i = 0; i < 100; i++) {
    randomok.push(Math.floor(Math.random() * 6)+ 1);
    
}
console.log(randomok);
let db = 0;
for (let j = 1; j <= 6; j++) 
{
    db = 0;  
    for (let i = 0; i < randomok.lenght; i++)
    {
        if (randomok[i] == j)
        {
            db++;
        }
        
    }
    console.log(`${j} - ${db} db`);  
}

let osszeg = 0;
for (let i = 0; i < randomok.lenght; i++)
{
    osszeg += randomok[i];
}
console.log(`átlag: ${osszeg / randomok.lenght}`);

let felett = 0;
for (let i = 0; i < randomok.lenght; i++)
{
    if (randomok[i] > osszeg / randomok.lenght)
        {
            felett++;
        }
}
console.log(`átlag felett: ${felett}db`);

//2
let tomb = [];
for (let i = 0; i < 100; i++) {
    tomb.push(Math.floor(Math.random() * 101)-50);
}
//a
let max = 0;
let index = 0;
for (let i = 0; i < tomb.lenght; i++)
{
    if (tomb[i] > max)
    {
        max = tomb[i];
        index = i;
    }
}
console.log(`${max} - ${index}`);
//b
let ossz
for (let i = 0; i < tomb.length; i++) {
    ossz += tomb[i];    
}
console.log(`elemek összege: ${ossz}`)
//c
let paros = 0;
let plan = 0;
for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] % 2 == 0)
    {
        paros++;
    }
    else
    {
        plan++;
    }
    
}
console.log(`páros: ${paros}db, páratlan: ${plan}db`);
//d
let van = false;
for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] % 7 == 0)
    {
        van = true;
    }
}
if (van)
    {
        console.log("van 7-el osztható");}
if (!van)
    {
        console.log("nincs 7-el osztható");}
//e
let van2 = false;
for (let i = 0; i < tomb.length; i++) 
    {
        if (tomb[i-1] < 0 && 0 < tomb[i+1]){
            van2 = true;
        }
    }
if (van2) {
    console.log("van tömbben olyan elem, amelynek mindkét szomszédja negatív");
}
if (!van2) {
    console.log("nincs tömbben olyan elem, amelynek mindkét szomszédja negatív");
}
//f
let van3 = false;
for (let i = 0; i < tomb.length; i++) 
    {
        if (tomb[i-1] + tomb[i+1] > tomb[i])
        {
            van3 = true;
        }
    }
if (van3) {
    console.log("van tömbben olyan elem, amelynek mindkét szomszédja nagyobb");
}
if (!van3) {
    console.log("nincs tömbben olyan elem, amelynek mindkét szomszédja nagyobb");
}