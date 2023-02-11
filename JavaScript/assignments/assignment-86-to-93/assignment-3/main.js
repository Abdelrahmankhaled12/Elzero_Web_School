
let inputValue = document.getElementsByTagName("input")[0];
let result = document.querySelector("div");

inputValue.oninput = ()=> {
        let value = inputValue.value;
        result.textContent = `{${value}} USD Dollar = {${(value* 15.6).toFixed(2)}} Egyptian Pound`
}
