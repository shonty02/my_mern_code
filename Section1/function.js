const add = function(a,b){
    console.log(a+b);

}


add (23,45);


function addv2(a,b){
    return a+b;
}

ans = addv2(233,45)
console.log(ans);



const checkPrime = (n) => {
    isPrime = true;
    var msg = "this should not be visible";
    console.log(msg);

    for(let i=2;i<n;i++){
        if(n%i == 0){
            isPrime = false;
            break;
        }

    }

    if (isPrime){
        console.log("Prime");
    }else{
        console.log("not Prime");
    }

};

checkPrime(17);
console.log("Not Prime");



const fact = (n) => {
    let f = 1;


    for (let i = 2; i<=n; i++) {
        f = f*i;
    }
    return f;
}

const ans = fact(8);
console.log(ans);

