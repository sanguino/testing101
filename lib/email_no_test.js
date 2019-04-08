let data = {};

export function setUser(user) {
	data.user = user;
}

export function setAgent(agent) {
	data.agent = agent;
}

export function setBalance(balance) {
	data.balance = balance;
}

export function createEmail() {

	let string = '\n';
	string += "Hola ";
	string += data.user.gender === 'male' ? 'señor ': 'señora ';
	string += data.user.name 
	string += ' ';
	string += data.user.lastName;
	string += ',';
	string += '\n';
	string += '\n';
	
	if (data.balance > 0)
		string += 'Estamos encantados de informale que sus fondos de inversion han subido ';
	else
		string += 'Sentimos informale que sus fondos de inversion han bajado '

	const negativeSign = data.balance > 0 ? "" : "-";
	let result = "";
	let amount = data.balance.toString()
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
	string += data.agent;

	return string;
}
