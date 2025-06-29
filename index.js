
let generate = document.getElementById("btn");
let output = document.getElementById("op");
let keys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*_+";

generate.onclick = function generate() {
    let inputValue = Number(document.getElementById("ip").value);
    let password = "";

    if (inputValue <= 7) {
        output.textContent = `Password length should be at least 8 characters`;
    } else {
        for (let i = 0; i < inputValue; i++) {
            let randomInt = Math.floor(Math.random() * keys.length);
            password += keys[randomInt];
        }
        output.textContent = `Generated password: ${password}`;
    }
}

    
    



