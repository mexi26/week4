function big()
{
    var inputdata = document.getElementById("input");
    inputdata.style.fontSize ="24pt";
}
function check()
{
    var fancy = document.getElementById("fancy")
    if(fancy.checked == true)
    {
        var inputdata = document.getElementById("input");
        inputdata.style.fontWeight = "bold";
        inputdata.style.color = "blue";
        inputdata.style.textDecoration = "underline";
    }
}
function check2()
{
    var boring = document.getElementById("boring")
    if(boring.checked == true)
    {
        var inputdata = document.getElementById("input");
        inputdata.style.fontWeight = "normal";
        inputdata.style.color = "black";
        inputdata.style.textDecoration = "none";
    }
}
function Moo()
{
    var inputdata = document.getElementById("input");
    var string1 = document.getElementById("input").value;
    inputdata.value = string1.toUpperCase();
    var string2 =document.getElementById("input").value;
    var sentence = string2.split(".");
    var moo = sentence.join("-MOO.");
    inputdata.value = moo;
}