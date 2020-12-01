function analyze(){

        
    var text = document.querySelector('#text');
    // console.log(text);
    
    var rData = text.value;
    var rowData = rData.toUpperCase();
    // console.log(rowData);
    
    var words = rowData.split(" ");
    console.log(words.length);
    
    
    console.log(words);
    var hash = new Map();
    // hash.push({"jay":1},{'kripal':2});
    // console.log(hash[0].jay);
    
    if(words.length > 1){
        words.forEach((key) => {
            if(hash.has(key)){
                hash.set(key,hash.get(key)+1);
            }
            else{
                hash.set(key,1);
            }
            
        });
        var ul = document.querySelector("#showlist");
        ul.innerHTML=" ";
        for(let [key,value] of hash.entries()){
            
            const li = document.createElement("li");
            const w = document.createTextNode(key);
    
            const c = document.createTextNode(value);
            const div = document.createElement("div");
            div.classList.add("row");
            const col1 = document.createElement("div");
            col1.classList.add("col");
            col1.classList.add("col-6");
            const col2 = document.createElement("div");
            col2.classList.add("col");
            col2.classList.add("col-6");
            const h4 = document.createElement("h4");
            const h42 = document.createElement("h4");
            h4.appendChild(w);
            h42.appendChild(c);
            col1.appendChild(h4);
            col2.appendChild(h42);
            div.appendChild(col1);
            div.appendChild(col2);
            ul.appendChild(div);
        
        };
    
    }
    else{
        console.log("enter something");
    }
    
    
    
        
    
    
}
    
var text = document.querySelector('#text');
// console.log(text);

var rData = text.value;
var rowData = rData.toUpperCase();
// console.log(rowData);

var words = rowData.split(" ");
console.log(words.length);


console.log(words);
var hash = new Map();
// hash.push({"jay":1},{'kripal':2});
// console.log(hash[0].jay);

if(words.length > 1){
    words.forEach((key) => {
        if(hash.has(key)){
            hash.set(key,hash.get(key)+1);
        }
        else{
            hash.set(key,1);
        }
        
    });
    var ul = document.querySelector("#showlist");
    ul.innerHTML=" ";
    for(let [key,value] of hash.entries()){
        
        const li = document.createElement("li");
        const w = document.createTextNode(key);

        const c = document.createTextNode(value);
        const div = document.createElement("div");
        div.classList.add("row");
        const col1 = document.createElement("div");
        col1.classList.add("col");
        col1.classList.add("col-6");
        const col2 = document.createElement("div");
        col2.classList.add("col");
        col2.classList.add("col-6");
        const h4 = document.createElement("h4");
        const h42 = document.createElement("h4");
        h4.appendChild(w);
        h42.appendChild(c);
        col1.appendChild(h4);
        col2.appendChild(h42);
        div.appendChild(col1);
        div.appendChild(col2);
        ul.appendChild(div);
    
    };

}
else{
    console.log("enter something");
}



    

