function myFunction()
{
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = document.getElementById("c").value
    var detal = b*b-4*a*c;
    if (a =="")
    {
        alert("Hãy nhập vào số!")
    } else if (b =="")
    {
        alert("Hãy nhập vào số!")
    } else if (c =="")
    {
        alert("Hãy nhập vào số!")
    }
    else if (detal < 0)
    {
        document.getElementById("hienthi").innerHTML = "Phương trình vô nghiệm"
    }
    else if (detal == 0){
        var x = -b/(2*a)
        document.getElementById("hienthi").innerHTML = ("Phương trình có nghiệm kép là x1 = " + "x2 = " + x)
    }
    else if (detal > 0){
        var x1 = (-b + Math.sqrt(detal))/(2*a)
        var x2 = (-b - Math.sqrt(detal))/(2*a)
        document.getElementById("hienthi").innerHTML =("Phương trình có hai nghiệm phân biệt là x1 = " + x1 + " và x2 = " + x2)
}
}
function mydoia()
{
        var a= document.getElementById("a").value;
    document.getElementById('A').innerHTML = a;

}
    function mydoib()
{
        var b = document.getElementById("b").value;
    document.getElementById('B').innerHTML = b;
}
    function mydoic()
{
        var c= document.getElementById("c").value;
    document.getElementById('C').innerHTML = c;
}
