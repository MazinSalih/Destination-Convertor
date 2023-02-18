// This is my first working project {=_=} //

document.getElementById('convert').addEventListener('submit', function(event) {
    event.preventDefault();
    let distance = parseFloat(document.getElementById('distance').value);
    // distance = parseFloat(distance);
    // let roundedConversion = conversion.toFixed(3); 
    
    if (distance) {
        let conversion = (distance * 1.609344).toFixed(3); 
        let answer = document.getElementById('answer');
        answer.innerHTML = `<h2>${distance} mile distance conveted to kilometers is ${conversion}</h2>`;
        // alert(conversion); 
    } else {
        answer.innerHTML = "<h2>Enter a number</h2>";
    }
    
})

// ============ Advance Distance Convertor ============================

let convertType = "miles";
let heading = document.querySelector('h1');
let intro  = document.querySelector('p');
let answerDiv = document.getElementById('answer');
let form = document.getElementById('convert');

document.addEventListener('keydown', function(event){
    let key = event.code;

    if (key === "KeyK") {
        // Change the heading
        // Change the intro paragraph
        // Change the value of the convertType variable
        convertType = "kilometers";
        heading.innerHTML = "Kilometers to miles convertor";
        intro.innerHTML = "Type in a number of Kilometers and click the button to convert the distance to Miles.";
        
        
        
    } else if (key === "KeyM") {
        convertType = "miles";
        heading.innerHTML = "Miles to Kilometers convertor";
        intro.innerHTML = "Type in a number of Miles and click the button to convert the distance to Kilometers.";
        
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let distance = parseFloat(document.getElementById('distance').value);

    if (distance) {
        if (convertType == "miles") {
            let converted = (distance * 1.609344).toFixed(3);
            answe.innerHTML = `<h2>${distance} converted to miles is ${converted} kilometers.</h2>`;
        } else {
            let converted = (distance * 0.621371192).toFixed(3);
            answer.innerHTML = `<h2>${distance} converted to kilometers is ${converted} miles.</h2>`;
        }

    } else {
        answer.innerHTML = "<h2>Enter a number</h2>";
    }

})

