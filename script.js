const input = document.getElementById("input");
const btnSave = document.getElementById("btnSave");
const btnErase = document.getElementById("btnErase");
const textInput = document.getElementById("textInput");
//Local storage variable
const storedInput = localStorage.getItem("namn")

//Skriver ut och sparar local storage
btnSave.addEventListener("click", () =>{
    textInput.textContent = input.value;
    document.getElementById("input").value = "";

    saveLocalStorage();
});

const saveLocalStorage = () =>{
    localStorage.setItem("namn", textInput.textContent);
};

if(input){
    textInput.textContent = storedInput;
}

btnErase.addEventListener("click", () =>{
    localStorage.removeItem("namn");
    location.reload();
});