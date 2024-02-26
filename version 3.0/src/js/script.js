let inputIn = document.querySelector('.A');
let inputIni = document.querySelector('.B');
let inputInii = document.querySelector('.C');
let button = document.querySelector('button');
button.onclick = function(){
	var a = inputIn.value;
	var b = inputIni.value;
	var c = inputInii.value;
	a = parseFloat(a);
	b = parseFloat(b);
	c = parseFloat(c);
	var D;
	var x1, x2, x0;
	var message = 'Нет Корней!'; 
	var message1 = 'Дискриминант (D) =';
	var message2 = 'Первый корень (x1) =';
	var message3 = 'Второй корень (x2) =';
	var message4 = 'Единственный корень (x0) =';
	if(a == 0){
		alert ("Коэффициент a не может быть равен 0");
		}
		else if(isNaN(a)){
			alert("Коэффициент a не может быть словом, только числом");	
		}
		else if(isNaN(b)){
			alert("Коэффициент b не может быть словом, только числом");
		}
		else if (isNaN(c)){
			alert("Коэффициент c не может быть словом, только числом");
		}
		else if (b == 0){
			x1 = (-c/a)**(1/2);
			x2 = (c/a)**(1/2);
			document.getElementById("1stx1").innerHTML = (x1.toFixed(2));
			document.getElementById("x1").innerHTML = (message2);
			document.getElementById("2ndx2").innerHTML = (x2.toFixed(2));
			document.getElementById("x2").innerHTML = (message3);
		}
		else if (c == 0){
			x1 = 0;
			x2 = (-b/a);
			document.getElementById("1stx1").innerHTML = (x1.toFixed(2));
			document.getElementById("x1").innerHTML = (message2);
			document.getElementById("2ndx2").innerHTML = (x2.toFixed(2));
			document.getElementById("x2").innerHTML = (message3);
		}
		else if (a > 32000004234234423423){
			alert('Большое число a');
		}
		else if (b > 32000004234234423423){
			alert('Большое число b');
		}
		else if (c > 32000004234234423423){
			alert('Большое число c');
		}
		else if (a < -32000004234234423423){
			alert('Маленькое число a');
		}
		else if (b < -32000004234234423423){
			alert('Маленькое число b');
		}
		else if (c < -32000004234234423423){
			alert('Маленькое число c');
		}
		else if (b**2 > 32000004234234423423){
			alert('Большое число ввода');
		}
		else if (4*a*c > 32000004234234423423){
			alert('Большое число ввода');
		}
		else if (b**2 < -32000004234234423423){
			alert('Маленькое число ввода');
		}
		else if (4*a*c < -32000004234234423423){
			alert('Маленькое число ввода');
		}
		else{
		D = ((b**2) - (4*a*c)); //Посчитанный дискриминант
		document.getElementById("letter").innerHTML = (message1);
		document.getElementById("Disk").innerHTML = (D.toFixed(2));
		console.log(D);
		} 
		if (D < 0) {
			document.getElementById("Nosqrt").innerHTML = (message);
		}
		else if (D == 0){
			x0 = ((-b)/(2*a));
			document.getElementById("Zerox0").innerHTML = (x0.toFixed(2));
			document.getElementById("x0").innerHTML = (message4);
			 console.log(x0);
		} 
		else{
			x1 = (+(-b + D**(1/2))/(2*a)) //Первый корень
			x2 = ((-b - D**(1/2))/(2*a)); //Второй корень
			document.getElementById("1stx1").innerHTML = (x1.toFixed(2));
			document.getElementById("x1").innerHTML = (message2);
			document.getElementById("2ndx2").innerHTML = (x2.toFixed(2));
			document.getElementById("x2").innerHTML = (message3);
			console.log(x1);
			console.log(x2);
		}
}