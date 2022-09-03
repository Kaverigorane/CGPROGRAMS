function isprime(n:number):boolean{
    let i:number;
    let flag:boolean=true;
    for(i=2;i<n;i++){
        if(n%i==0)
        {flag=false;
        break;}
    }
    if(flag==true)
    {
        return(true);
    }
    else {
        return (false);
    }
    }
let n:number=19;
//let prime=isprime(n);
console.log(isprime(n));