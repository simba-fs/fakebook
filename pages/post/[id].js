import useSWR from 'swr';

import getPosts from '../../lib/post.js';
import { getUserInfo } from '../../lib/user.js';

import Loading from '../../components/loading.js';
import ErrorMsg from '../../components/errorMsg.js';

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
	const { data: post, postError } = useSWR('getPost', () => getPosts({ id }))

	if(postError) return <ErrorMs>{postError}</ErrorMs>;
	if(!post) return <Loading />;
	return <Post post={post} />;
}

export async function getStaticPaths(){
	// console.log('getStaticPaths');
	const posts = await getPosts();
	// console.log({ posts });
	const postIDs = posts.map(i => i.id);
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
