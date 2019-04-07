export function createEmail(user, balance, agent) {

	let string = '\n';
	string += "Hola ";
	string += user.gender === 'male' ? 'señor ': 'señora ';
	string += user.name 
	string += ' ';
	string += user.lastName;
	string += ',';
	string += '\n';
	string += '\n';
	
	if (balance > 0)
		string += 'Estamos encantados de informale que sus fondos de inversion han subido ';
	else
		string += 'Sentimos informale que sus fondos de inversion han bajado '

	const negativeSign = balance > 0 ? "" : "-";
	let result = "";
	let amount = balance.toString()
	result = ',' + amount.slice(-2);
	amount = amount.substring(0, amount.length-2);
	while (amount.length > 3) {
		result = '.' + amount.slice(-3) + result;
		amount = amount.substring(0, amount.length-3);
	}
	result = amount + result;

	string += result + ' €.';
	string += '\n';
	string += '\n';
	string += 'Un saludo,';
	string += '\n';
	string += '\n';
	string += agent;

	return string;
}
