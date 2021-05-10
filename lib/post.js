export function getAllPostsID(){
	return fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(res => res.map(i => i.id));
}

export function getPostsByUserId(id){
	return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
		.then(res => res.json());
}

export function getPostById(id){
	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then(res => res.json());
}
