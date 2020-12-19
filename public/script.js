const search = document.querySelector('#form');
const inputVal = document.querySelector('input');
var titleinp =document.querySelector('.title');
const magnetlnk =document.querySelector('.magnet');

search.addEventListener('submit',(e) => {
	e.preventDefault();
	const searchTerm = inputVal.value.trim();
	console.log(searchTerm)
     titleinp.textContent='Loading..';
	const url = `/tors?address=${searchTerm}`;
	fetch(url).then((res)=>{
		res.json().then((dat)=>{
			console.log(dat)
			console.log(dat[1].title)
			titleinp.textContent='';

			for(var i=1;i<dat.length;i++){
				const list = document.createElement('li');
				const magnet = document.createElement('ul');
				list.innerHTML =dat[i].title;
				magnet.innerHTML=dat[i].magnet;
				titleinp.appendChild(list);
				list.appendChild(magnet);
			}
			// if(dat.error){
			// 	titleinp.textContent =dat.error;
			// }
			// else{
			// console.log(dat)
			// console.log(dat.title)
			// console.log(dat.magnet)
			// // titleinp.textContent =dat.title;
			// for(const p in dat.title){
			// 	const list =document.createElement('li');
			// 	list.innerHTML = dat.title[p];
			// 	titleinp.appendChild(list);
			// }

			// }

		})

	})
});