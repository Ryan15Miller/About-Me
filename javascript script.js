function showPass() {
	//<input type="checkbox" onclick="showPass()">Show Password
	var x = document.getElementById("password");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}
function dow(){
	var day = document.getElementById("day").value;
		var dayIs="";
		switch (day){
			case 0:
				dayIs="Sunday";
				break;
			case 1:
				dayIs="Monday";
				break;
			case 2:
				dayIs="Tuesday";
				break;
			case 3:
				dayIs="Wednesday";
				break;
			case 4:
				dayIs="Thursday";
				break;
			case 5:
				dayIs="Friday";
				break;
			case 6:
				dayIs="Saturday";
				break;
			case 7:
				
				break
			default:
				dayIs='*Invalid Data*';
		}
}
function showPass() {
	var x = document.getElementById("password");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}
function userCheck(){
	var name = document.getElementById("userName").value;
	var pw = document.getElementById("password").value;
  
	if (name=="me" && pw=="123"){
		document.getElementById("perm").innerHTML = "Access Granted";
	}
	else { 
		document.getElementById("perm").innerHTML = "Access Denied";
	}
}
function countMoney(hun,fif,twen,ten,five,one,q,d,n,p){
	var hun=document.getElementById("100").value
	var fif=document.getElementById("50").value
	var twen=document.getElementById("20").value
	var ten=document.getElementById("10").value
	var five=document.getElementById("5").value
	var one=document.getElementById("1").value
	var q=document.getElementById("Quarters").value
	var d=document.getElementById("Dimes").value
	var n=document.getElementById("Nickels").value
	var p=document.getElementById("Pennies").value
	var money = (hun*100)+(fif*50)+(twen*20)+(ten*10)+(five*5)+(one*1)+
		(q*.25)+(d*.10)+(n*.05)+(p*.01)
	var money2 = money.toFixed(2)
	var out1 = numberWithCommas(money2)
	var out = Number(money2).toLocaleString('en', {useGrouping:true})
	document.getElementById("line").innerHTML="$"+out1
}
function findMaxParameter(){
	var i,max;
	max=-Infinity;
	for (i=0;i<arguments.length;i++){
		if (arguments[i]>max){
			max=arguments[i]
		}
	}
	return max;
}
function findMinParameter(){
	var i,min;
	min=Infinity;
	for (i=0;i<arguments.length;i++){
		if (arguments[i]<min){
			min=arguments[i]
		}
	}
	return min;
}
function numberWithCommas(x) {
	//Not My Code
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}