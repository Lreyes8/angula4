var ducks: string[] = ['Hugo', 'Paco', 'Luis'];

ducks.forEach(
	(duck) => console.log('Duck nme: ' + duck)
);

var ducksList: string = `Los patos son: ${ducks[0]}, ${ducks[1]}, ${ducks[2]}`;

console.log(ducksList);

var template = `
<h1>Pato aventuras</h1>
${ducksList}
`

console.log('++++++++++++++++++++');

console.log(template);