import useSWR from 'swr';
import { getAllUsers } from '../../lib/user.js';
import getPosts from '../../lib/post.js';

import PostsList from '../../components/postsList.js';
import Loading from '../../components/loading.js'
import ErrorMsg from '../../components/errorMsg.js';

export default function User({ id }){
	const { data, error } = useSWR('getAllUsers', () => getPosts({ userId: id }));

	if(error) return <ErrorMsg>{ error }</ErrorMsg>;
	if(!data) return <Loading />;
	return (
		<>
			<h1>{`${data[0].author.name} <${data[0].author.username}>`}</h1>
			<PostsList posts={data} />
		</>
	);
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
