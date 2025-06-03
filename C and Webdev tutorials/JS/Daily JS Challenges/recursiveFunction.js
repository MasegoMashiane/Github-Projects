function recursiveFunction(n){
    if (n === 0 || n === 1){
        return 1;
    }

    return n*recursiveFunction(n-1);
}


console.log(recursiveFunction(1))