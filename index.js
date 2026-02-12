const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password = ""
function randomPasswordGenerator(){
    password = ""
    for(let i = 0 ; i < 11 ; i++){
        password += characters[Math.floor(Math.random()*characters.length)];
    }
    return password
}
function startGenerate(){
    let pass1 = randomPasswordGenerator();
    let pass2 = randomPasswordGenerator();

    let pass1El = document.getElementById("pass1-el");
    let pass2El = document.getElementById("pass2-el");

    pass1El.textContent = pass1;
    pass2El.textContent = pass2;
}


 
