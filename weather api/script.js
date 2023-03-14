const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '85870f6403msh2fd190dedfda809p1d70dejsna5e28f5d46b2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
function run(){
	const city=document.getElementById('search-bar').value;
	const s=city;
	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${s}`, options)
		.then(response => response.json())
		.then(response => {
			const name=response.location.name;
			const region=response.location.region
			const tempc=response.current.temp_c;
			const tempf=response.current.temp_f;
			const res=response.current.condition.text;
			const icon=response.current.condition.icon;
			document.getElementById('name').innerHTML=name
			document.getElementById('region').innerHTML=region
			document.getElementById('res').innerHTML=" "+res
			document.getElementById('temp-f').innerHTML="F°  "+tempf
			document.getElementById('temp-c').innerHTML="C°  "+tempc
			document.getElementById('icon').style.display="block"
			document.getElementById('icon').src=icon;
			console.log(response);
		})
		.catch(err =>{
			alert("The city you entered is not exist...")
		});
}


