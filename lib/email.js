function createHeader(name, lastName, gender) {
	let string = "Hola ";
	string += gender === 'male' ? 'señor ': 'señora ';
	string += name 
	string += ' ';
	string += lastName;
	string += ',';
	return string;
}

function pretty (amount) {
	const negativeSign = amount > 0 ? "" : "-";
	let result = "";
	amount = Math.floor(amount * 100).toString();
	result = ',' + amount.slice(-2);
	amount = amount.substring(0, amount.length-2);
	while (amount.length > 3) {
		result = '.' + amount.slice(-3) + result;
		amount = amount.substring(0, amount.length-3);
	}
	result = amount + result;
	return result;
}


function createBody(balance) {
	
	let negative = 'Sentimos informale que sus fondos de inversion han bajado ';
	let positive = 'Estamos encantados de informale que sus fondos de inversion han subido ';
	let string = balance > 0 ? positive : negative;
	string += pretty(balance) + ' €.';

	return string;
}


function createFooter(agent) {
	
	let string = 'Un saludo,';
	string += '\n';
	string += '\n';
	string += agent;

	return string;
}

function createEmail(user, balance, agent) {
	let email = '\n';
	email += createHeader(user.name, user.lastName, user.gender);
	email += '\n';
	email += '\n';
	email += createBody(balance);
	email += '\n';
	email += '\n';
	email += createFooter(agent);

	return email;
}

export {
	createEmail,
	createHeader,
	createBody,
	createFooter
}
