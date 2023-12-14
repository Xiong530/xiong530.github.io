function showAlert() {
    alert("Hello, world!");
}

function makeBigger() {
    showAlert(); // Call the function to show the alert
    document.getElementById("inputText").style.fontSize = "24pt";
}

function styleChange(){
    var textBox = document.getElementById("inputText");
    var FancyShmancy = document.getElementById("FancyShmancy");

    if(FancyShmancy.checked){
        textBox.style.color="blue";
        textBox.style.fontWeight="bold";
        textBox.style.fontWeight="bold";
        textBox.style.textDecoration="underline";
        textBox.style.textDecorationStyle="double";
    } else {
        textBox.style.color="black";
        textBox.style.fontWeight="normal";
        textBox.style.textDecoration="none";
    }
}

function addMoo(){
    var textBox = document.getElementById("inputText");
    var text = textBox.value;


    document.getElementById('Moo').onclick = capitalizeAll()
    

    var sentence = text.split(".");
    for( var i = 0; i < sentence.length; i++){
        sentence[i] = sentence[i].trim() + "-Moo";
    }
    text = sentence.join(".");
    textBox.value = text.toUpperCase(); 
}

function capitalizeAll(){
    var textBox = document.getElementById("inputText");
    var text = textBox.value;

    textBox.value = text.toUpperCase();
}
