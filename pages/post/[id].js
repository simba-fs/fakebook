import { getAllPostsID, getPostById } from '../../lib/post.js';
import { getUserInfo } from '../../lib/user.js';
import styles from '../../styles/Home.module.css';

export default function Post({ post, author }){
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<h1 className={styles.title}>{ post.title }</h1>
				<h4>{ author.name }</h4>
				<p>{ post.body }</p>
			</div>
		</div>
	);
}

export async function getStaticPaths(){
	const postIDs = await getAllPostsID();
	console.log({ postIDs });
	const paths = postIDs.map(i => ({ params: { id: i.toString() } }) );
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }){
	const post = await getPostById(params.id);
	const author = await getUserInfo(post.userID);
	return {
		props: { post, author }
	};
}
