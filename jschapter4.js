for(let i=0;i<5;i++){
    console.log(i);
}

for(let j=5;j>0;j--){
    console.log(j);
}

for(let i=0;i<25;i++){
    if(i%2==0){
    console.log("even no are " ,i);
    }
    else{
         console.log("odd no are " ,i);
    }
}

for(let i=5;i<=50;i++){
   if(i%5==0){
    console.log(i);
   }

}

/*let n=prompt("enter your no");
n=parseInt(n);
for(let i=n;i<=n*10;i=i+n){
   if(i%n==0){
    console.log(i);
   }

}*/

for(let i=0;i<=3;i++){
    console.log("inner loop");
    for(let j=1;j<=3;j++){
    console.log(i,j);
    }
}

let a=0;
while(a<=5){
    console.log(a);
    a++;
    if(a==3){
        break;
    }
    
}
 console.log("we brake at 3");


let favmovie="kakan";
let guess=prompt("enter a movie name");
while((guess!=favmovie)&&(guess!="quit")){
guess=prompt("wrong please try again");
}
if(guess==favmovie){
    console.log("congarts");
}


let fruits=["mango","apple","banana","litche","pineapple"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

for(let j=fruits.length-1;j>0;j--){
    console.log(j,fruits[j]);
}

let color=[["pink","white"],["black","ywllow"]];
for(let z =0;z<fruits.length;z++){
        console.log(color[z]);
        for(let y=0;y<color[z];y++){
            console.log(color[y]);
        }
}


let dress=["jeans","top","pant","shirt"];
for(dresss of dress){
      console.log(dresss);
}

let heroes=[["pink","white"],["black","ywllow"]];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}

let todo = [];
let req = prompt("please enter your request");

while (true) {
    if (req === "quit") {
        console.log("quitting app");
        break;
    }

    if (req === "list") {
        console.log("--------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("--------------");
    } 
    else if (req === "add") {
        let task = prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    } 
    else if (req === "del") {
        let ind = parseInt(prompt("please enter index"));
        todo.splice(ind, 1);
        console.log("task deleted");
    } 
    else {
        console.log("wrong request");
    }

    // 🔁 yahi sabse important tha
    req = prompt("please enter your request");
}
