// challenge 1

let myRequest = new XMLHttpRequest();

let getData = (apiLink) => {
    return new Promise((resolve,reject)=> {
        myRequest.open("GET",apiLink);
        myRequest.send();
        myRequest.onload = function () {
            if(this.status === 200 && this.readyState === 4) {
                resolve(JSON.parse(this.responseText));
            }else {
                reject(Error("Connection failed"));
            }
        }
    })
}


getData("/main.json").then(
    (result) => {
        result.length = 5;
        return result;
    }
).then(
    (result) => {
        let div = document.createElement("div");
        for(let i = 0 ; i < result.length ; i++) {
            div.innerHTML = div.innerHTML + `
            <div>
            <h3>${result[i].title}</h3>
            <p>${result[i].description}</p>
            </div>
            `
        }
        document.body.appendChild(div)
    }
)
// ================================================
// ================================================
console.log("=".repeat(30));
console.log("=".repeat(30));
// ================================================
// ================================================
// challenge 2

fetch("./main.json").then(
    (result)=>{
        result = result.json();
        return result
    }
).then(
    (result)=>{
        result.length = 5;
        return result
    }
).then(
    (result) => {
        let div = document.createElement("div");
        for(let i = 0 ; i < result.length ; i++) {
            div.innerHTML = div.innerHTML + `
            <div>
            <h3>${result[i].title}</h3>
            <p>${result[i].description}</p>
            </div>
            `
        }
        document.body.appendChild(div)
    }
)