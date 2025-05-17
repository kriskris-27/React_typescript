console.log("Hello World");
// const msg:string="Hello"
// msg()

// let naame: string = "Kris";
// let numar:number[]=[1,2,3,4,5,5,]
// let names : Array<string> = ["k","r","i","s","kris"]

// let unknwndata:any="42";

//functions
// function greetUser(name:string){
//     console.log("hi " + name);
// }

// greetUser("kris")

// function numres(mynum:number):number{
//     console.log(mynum);
//     return mynum;
// }

// numres(42);

// async function getdata():Promise<string>{
//     const response: Response = await fetch("https:///example.com")
//     console.log("data received");
    
//     return "data received"
// }
// getdata();


//objects

function forobj(pt:{x:number,y:number}){
    console.log(pt.x,pt.y);
    return (pt.x,pt.y)
}

forobj({x:10,y:12})