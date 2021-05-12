// import { getUserInfo } from './user.js';
import { stringify } from 'qs';

const sourceUrl = 'https://jsonplaceholder.typicode.com'

function insertAuthor(post){
	return fetch(`${sourceUrl}/users/${post.userId}`)
		.then(res => res.json())
		.then(author => ({
			...post,
			author
		}));
}

export default async function getPost(query){
	let id;
	if(!!query && !!query.id){
		id = query.id;
		delete query.id;
	}
	// console.log({ id, query });

	let queryString = `${sourceUrl}/posts`;
	if(id) queryString += `/${id}`;
	if(query) queryString += `?${stringify(query)}`;
	
	// console.log({ queryString });

	let posts = await fetch(queryString)
		.then(res => res.json());
	
	// console.log({ queryString, posts });

	if(Array.isArray(posts)){
		return Promise.all(posts.map(i => insertAuthor(i)));
	}else{
		return insertAuthor(posts);
	}
}
