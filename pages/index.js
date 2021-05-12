import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.grid}>
			<h1>Fakeboook</h1>
			<Link href="./user">
				<a className={styles.card}>User</a>
			</Link>
			<Link href="./post">
				<a className={styles.card}>Post</a>
			</Link>
		</div>
	);
}
