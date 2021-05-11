function pick(data, list){
	let result = {};
	list.forEach(i => result[i] = data[i]);
	return result;
}

export function getAllUsers(){
	return fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(res => res.map(i => pick(i, ['id' , 'name', 'username', 'email'])));
};

export function getUserInfo(id){
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(res => res.json());
}
