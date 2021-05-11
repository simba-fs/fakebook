import useSWR from 'swr';
import getPosts from '../lib/post.js';

import styles from '../styles/Home.module.css';

import PostsList from '../components/postsList.js';

export default function User(){
	const { data, error } = useSWR('getAllUser', () => getPosts());

	if(error) return <div>Error: {error}</div>;
	if(!data) return <h1>Loading...</h1>;
	
	return <PostsList posts={data} />;
};
