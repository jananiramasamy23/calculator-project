const display=document.getElementById("display")
function appendToDisplay(input)
{
display.value+=input;   
}

function clearDisplay()
{
display.value=""
}

function CalculateResult()
{
    try{
    display.value=eval(display.value)
    }
    catch{
        display.value="Error"
    }
}
function clearLastElement()
{
    display.value=display.value.slice(0,-1)
}

