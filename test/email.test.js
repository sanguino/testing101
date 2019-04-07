import {createEmail, createHeader, createBody, createFooter} from '../lib/email.js';

describe('Header tests', () => {
	
	test('Given a Male user, header should contains "señor"', () => {
		expect(createHeader("John", "Doe", "male")).toMatch('señor John Doe');
	});

	test('Given a Female user, header should contains "señora"', () => {
		expect(createHeader("Jane", "Doe", "female")).toMatch('señora Jane Doe,');
	});

});

describe('Body', () => {
	
	test('Given a Positive balance, body should start "Estamos encantados..."', () => {
		expect(createBody(1)).toMatch('Estamos encantados');
		expect(createBody(1)).toMatch('han subido 1,00 €.');
	});

	test('Given a Negative balance, body should start "Sentimos informale..."', () => {
		expect(createBody(-1)).toMatch('Sentimos informale');
		expect(createBody(-1)).toMatch('han bajado -1,00 €.');
	});

	test('Given a Long balance, body should pretty correctly the balance', () => {
		expect(createBody(10000000000)).toMatch('10.000.000.000,00 €.');
	});

});


describe('Footer', () => {

	test('Given an agent, footer should contains it at end ', () => {
		expect(createFooter('Mark Smith')).toMatch('Mark Smith');
	});

});


const user = {
	name: "John",
	lastName: "Doe",
	gender: "male"
}
	
const entireEmail = `
Hola señor John Doe,

Estamos encantados de informale que sus fondos de inversion han subido 23.432,00 €.

Un saludo,

Mark Smith`;

describe('Entire email', () => {
	test('Given an user, balance and agent, it should create email correctly', () => {
		expect(createEmail(user, 23432, 'Mark Smith')).toBe(entireEmail);
	});

});