var grade01 = parseFloat(prompt("Digite sua primeira nota"));
var grade02 = parseFloat(prompt("Digite sua segunda nota"));
var grade03 = parseFloat(prompt("Digite sua terceira nota"))

if (grade01 > 0 || grade02 > 0 || grade03 > 0) {
	var p = document.createElement("p")
	nota = 	((grade01*2 + grade02*3 + grade03*5)/10)
	p.append("A média ponderada do aluno é " + nota)
	document.body.appendChild(p)
}else {
	document.body.append("Não é possivel realizar a média")
}


