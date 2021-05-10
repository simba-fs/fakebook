import Link from 'next/link';
import { getAllUser } from '../lib/user';
import styles from '../styles/Home.module.css';

export default function User({ users }){
	return (
		<div className={styles.container}>
			<main className={styles.grid}>
				{ users.map((i, index) =>
				<Link href={'/user/' + i.id}>
					<div key={index} className={styles.card}>
						<h2>username: { i.username }</h2>
						<p>name: { i.name } </p>
						<p> email: { i.email }</p>
					</div>
				</Link>
				) }
			</main>
		</div>
	);
};

export async function getStaticProps(){
	return {
		props: {
			users: await getAllUser()
		}
	};
};

