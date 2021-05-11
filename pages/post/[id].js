import useSWR from 'swr';

import { getAllPosts, getPostById } from '../../lib/post.js';
import { getUserInfo } from '../../lib/user.js';
import styles from '../../styles/Home.module.css';

function Post({ post }){
	return (
		<div>
			<h1>{post.title}</h1>
			<h4>{`${post.author.name} <${post.author.username}>`}</h4>
			<p>{post.body}</p>
		</div>
	);
}

export default function PostPage({ id }){
	const { data: post, postError } = useSWR('getPost', () => getPostById(id))

	if(postError) return <div>Error: {postError}</div>;
	if(!post) return <h1>Loading ......</h1>;

	return (
		<Post post={post} />
	);
}

export async function getStaticPaths(){
	const postIDs = await (getAllPosts().then(res => res.map(i => i.id)));
	// console.log({ postIDs });
	const paths = postIDs.map(i => ({ params: { id: i.toString() } }) );
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }){
	return {
		props: { id: params.id }
	};
}
