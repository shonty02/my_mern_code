const nums = [1,2,3,4,5];


for(let e of nums){
    console.log(e*2);
}


new_arr= nums.map((e) => {return e*2})

console.log(new_arr);