import { getAllUsers } from '../lib/user';
import useSWR from 'swr';

import styles from '../styles/Home.module.css';

import Link from 'next/link';
import UserList from '../components/usersList.js';
import Layout from '../components/layout.js';

export default function UserPage(){
	const { data, error } = useSWR('getAllUser', getAllUsers);
	if(error) return <h1>Error: {error}</h1>;
	if(!data) return <h1>Loading...</h1>;
	
	return <UserList users={data} />;
};
