var a = + prompt("Enter Yours Physics Marks")
var b = + prompt("Enter Yours Computer/Chemistry Marks")
var c = + prompt("Enter Yours Mathematics / Biology Marks")
var d = + prompt("Enter Yours Urdu Marks")
var e = + prompt("Enter Yours English Marks")

var f = a+b+c+d+e

var g = f/500 *100

alert("Total Percentage " + g + "%")



if( g >= 90){
    alert("Grade A1")
}else if( g >= 70){
    alert("Grade A")
}
else if( g >= 60){
    alert("Grade B")
}
else if( g >= 50){
    alert("Grade C")
}
else if( g >= 40){
    alert("Grade D")
}
else if( g >= 30){
    alert("Grade Fail")
}