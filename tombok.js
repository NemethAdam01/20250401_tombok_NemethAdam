//1
randomok = [];
for (let i = 0; i < 100; i++) {
    randomok.push(Math.floor(Math.random() * 6)+ 1);
    
}
console.log(randomok);
let db = 0;
for (let i = 1; i <= 6; i++) 
{
    db = 0;  
    for (let j = 0; j < randomok.length; j++)
    {
        if (randomok[j] == i)
        {
            db++;
        }
        
    }
    console.log(`${i} - ${db} db`);  
}

let osszeg = 0;
for (let i = 0; i < randomok.length; i++)
{
    osszeg += randomok[i];
}
console.log(`átlag: ${osszeg / randomok.length}`);

let felett = 0;
for (let i = 0; i < randomok.length; i++)
{
    if (randomok[i] > osszeg / randomok.length)
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
for (let i = 0; i < tomb.length; i++)
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
        if (tomb[i-1] < 0 && 0 > tomb[i+1]){
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
        if (tomb[i-1] + tomb[i+1] < tomb[i])
        {
            van3 = true;
        }
    }
if (van3) {
    console.log("van a tömbben olyan elem,amely  nagyobb, mint két szomszédjának összege");
}
if (!van3) {
    console.log("nincs a tömbben olyan elem, amely nagyobb, mint két szomszédjának összege");
}
//g
let ind = 0;
for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] % 3 == 0 && !tomb[i] % 5 == 0)
    {
        ind = i;
    }
}
console.log(`utolsó 3-mal osztható, de 5-tel nem osztható:${tomb[ind]}`);
//h
let db2 = 0;
let van4 = false;
for (let i = 0; i < tomb.length; i++) 
{
    db2 = 0;
    for (let j = i + 1; j < tomb.length; j++)
    {
        if (tomb[j] == tomb[i])
        {
                db2++;
        }
    }
    if (db2 >= 3)
        {
            van4 = true;
        }
        
}
if (van4) {
    console.log("Van a tömbben 3 egyforma szám")
}
if (!van4) {
    console.log("Nincs a tömbben 3 egyforma szám")
}
//i
let van5 = false;
for (let i = 0; i < tomb.length; i++) 
{
    if (tomb[i] == tomb[i+1] ||tomb[i] == tomb[i -1]) {
        van5 = true;
        break;
    }
}
if (van5) {
    console.log("Van a tömbben 2 egymás melletti egyforma szám")
}
if (!van5) {
    console.log("Nincs a tömbben 2 egymás melletti egyforma szám")
}
//j
for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] % 10 == 0)
        {
            console.log(`10 többszöröseinek indexe:${i}`);
        }
    
}
//k
let tombossz = 0;
for (let i = 0; i < tomb.length; i++) {
    tombossz += tomb[i];
}
let atlagalatt = 0;
for (let i = 0; i < tomb.length; i++) 
{
    if (tomb[i] < tombossz / tomb.length)
        {
            atlagalatt++;
        }
}
console.log(`atlag alatt:${atlagalatt}db`);


let autok = ["Mercedes", "BMW", "Audi", "Volvo", "Renault", "BMW"];
autok.sort();
console.log(autok);
autok.reverse();
console.log(autok);