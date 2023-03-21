function display(val)
{
    document.getElementById('cdf').value+=val
}

function clearDisplay()
{
    document.getElementById('cdf').value=null
}
function show()
{
    var text=document.getElementById('cdf').value
    var result=eval(text)
    document.getElementById('cdf').value=result
}
