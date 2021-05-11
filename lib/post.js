import { getUserInfo } from './user.js';

export function getAllPosts(){
	return fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		// .then(res => res.map(i => i.id));
}

export function getPostsByUserId(id){
	return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
		.then(res => res.json());
}

export async function getPostById(id){
	let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
	let author = await getUserInfo(post.userId);
	return {
		...post,
		author
	};
}
