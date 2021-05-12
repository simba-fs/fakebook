import styles from '../styles/Home.module.css';

import Link from 'next/link';

export default function Card({ children, linkTo }){
	if(linkTo) return (
		<Link href={linkTo} as={linkTo} passHref={true}>
			<a className={styles.card}>
				<div>
					{children}
				</div>
			</a>
		</Link>
	);
	return (
		<div className={styles.card}>
			{children}
		</div>
	);
}
