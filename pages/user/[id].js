import useSWR from 'swr';
import { getAllUsers } from '../../lib/user.js';
import { getPostsByUserId } from '../../lib/post.js';

import PostsList from '../../components/postsList.js';

export default function User({ id }){
	const { data, error } = useSWR('getAllUsers', () => getPostsByUserId(id));
	
	if(error) return <div>Error: {error}</div>;
	if(!data) return <h1>Loading ......</h1>;
	return <PostsList posts={data} />;
}

export async function getStaticPaths(){
	const users = await getAllUsers();
	const paths = users.map(i => ({ params: { id: i.id.toString() } }) );

	return {
		paths,
		fallback: false
	};
};

export async function getStaticProps({ params }){
	return {
		props: { id: params.id }
	};
};
