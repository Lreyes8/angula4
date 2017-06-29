var fullName = 'Luis Miguel';

function setName(name: string): void{
	
	fullName = name;
}

setName('Jorge');

console.log(fullName);


class Person{
	name: string;
	lastName: string;
	age: number;

	greet(){
		console.log('Hola: ' + this.name);
	}


	addAge(add){
		this.age = this.age + add;
		console.log('Mi nombe es: ' + this.name + ' y mi edad nueva es: ' + this.age  );
	}
}

var person: Person;

person = new Person();

person.name = 'Luis';
person.age = 23;
person.addAge(5);


class Report {
	data: string[];

	constructor(data: string[]){
		this.data = data;
	}

	run(){
		this.data.forEach(function(line){
			console.log(line)
		})
	}
}

var report: Report = new Report([
	'Primera Linea',
	'Segunda Linea',
	'Tercera Linea',
	]);

report.run();

class TabbedReport extends Report {

	headers: string[];

	constructor(headers: string[], values: string[]){
		super(values);
		this.headers = headers;
	}

	run() {
		console.log(this.headers);
		super.run();
	}
}

var	headers: string[] = ['nombre'];

var data: string[] = ['Jorge', 'Daniel', 'Luis'];

var tabbedReport: TabbedReport = new TabbedReport(headers, data);
tabbedReport.run();

