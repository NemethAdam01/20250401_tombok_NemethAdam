let betuk = new Set(['a', 'b', 'c', 'd']);
for (let elem of betuk) {
    console.log(elem);
    }

betuk.add('e')

let fBetu = "f"
betuk.add(fBetu)
for (let elem of betuk) {
    console.log(elem);
    }

let cBetu = "c"
if (betuk.has(cBetu))
    {
        console.log(`Ez van a halmazban ${cBetu}`)
    }

betuk.delete("e")
for (let elem of betuk) {
    console.log(elem);
    }

let iterator = betuk.values();
console.log(iterator)
console.log(iterator.next().value)
for (let elem of betuk)
    {
        console.log(iterator.next().value)
    }
//1
let A = new Set([]);
let B = new Set([]);
for (let i = 0; i < 20; i++) {
    A.add(Math.floor(Math.random() * 100)+ 1);
    
}
for (let i = 0; i < 20; i++) {
    B.add(Math.floor(Math.random() * 100)+ 1);
    
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript
//a
console.log(A.difference(B))
//b
console.log(A.intersection(B))
//c
console.log(A.union(B))
//d
console.log(A.isSubsetOf(B))
//e
let be = prompt("egy számot(1-100): ")
let igen = false
for (let i = 0; i < A.length; i++) {
    if(A[i] == be) van = true;
    
}
if (igen) console.log(`${be} van a halmazba`)