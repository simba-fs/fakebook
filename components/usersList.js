import styles from '../styles/Home.module.css';

import Link from 'next/link';
import Card from './card.js';

export default function UserList({ users }){
	return (
		<div className={styles.grid}>
			{users.map(i =>
			<Card key={i.id} linkTo={`/user/${i.id}`}>
				<h2>{i.name}</h2>
				<p>{i.username}</p>
				<p>{i.email}</p>
			</Card>
			)}
		</div>
	);
}
