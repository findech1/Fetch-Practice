// api url
const api_url = 
	"https://datausa.io/api/data?drilldowns=Nation&measures=Population";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab = 
		`<tr>
		<th>ID Nation</th>
		<th>Nation</th>
		<th>ID Year</th>
		<th>Year</th>
        <th>Population</th>
        <th>Slug Nation</th>
		</tr>`;

	// Loop to access all rows 
	for (let r of data.list) {
		tab += `<tr> 
	<td>${r.IDNation} </td>
	<td>${r.Nation}</td>
	<td>${r.IDYear}</td> 
	<td>${r.Year}</td>
    <td>${r.Population}</td>
    <td>${r.SlugNation}</td>		 
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("data").innerHTML = tab;
}
