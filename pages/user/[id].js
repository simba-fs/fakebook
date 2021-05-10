import Link from 'next/link';
import styles from'../../styles/Home.module.css';
import { getAllUser } from '../../lib/user.js';
import { getPostsByUserId } from '../../lib/post.js';

export default function User({ posts }){
	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{posts.map(i =>
				<Link href={'/post/' + i.id}>
					<div key={i.id} className={styles.card}>
						<h2>{i.title}</h2>
						<p>{i.body}</p>
					</div>
				</Link>
				)}
			</div>
		</div>
	);
};

export async function getStaticPaths(){
	const users = await getAllUser();
	const paths = users.map(i => ({ params: { id: i.id.toString() } }) );

	return {
		paths,
		fallback: false
	};
};

export async function getStaticProps({ params }){
	const posts = await getPostsByUserId(params.id);
	console.log({ posts });

	return {
		props: { posts }
	};
};
