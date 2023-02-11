

// challenge 2
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "./articles.json");
myRequest.send();
// myRequest.onreadystatechange = function () {
//     if (this.status === 200 && this.readyState === 4) {
//         console.log(this.responseText);
//         console.log("Data Loaded");
//     }
// }




// challenge 3
myRequest.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
        let mainData = JSON.parse(this.responseText);
        for (let i = 0; i < mainData.length; i++) {
            mainData[i].category = "All";
        }
        console.log(mainData)
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData)
        // challenge 4
        let div = document.createElement("div");
        div.setAttribute("id","data");
        for (let i = 0; i < mainData.length; i++) {
            div.innerHTML = div.innerHTML + `
            <div>
            <h2>${mainData[i].title}</h2>
            <p>${mainData[i].body}</p>
            <p>Author:${mainData[i].author}</p>
            <p>Category:${mainData[i].category}</p>
            </div>
        `
        }
        document.body.appendChild(div);
    }
}



