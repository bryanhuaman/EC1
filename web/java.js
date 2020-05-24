function getData(){
	let codigo = document.getElementById('s').value;
	let contra = document.getElementById('ss').value;

	a= '';
	b=new String("D12345678")
	c=new String("12345678")

	if (codigo == a || contra == a) {
		alert("Falta rellenar un campo")
	}else if (codigo != b || contra != c) {
		alert("Codigo y/o contraseña incorrecta")
	}else if (codigo == b || contra == c) {
		alert("Correcto Ingresando a la pagina")
		window.location.assign('menu.html')
	}
}

