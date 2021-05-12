import { getAllUsers } from '../lib/user';
import useSWR from 'swr';

import UserList from '../components/usersList.js';
import Loading from '../components/loading.js'
import ErrorMsg from '../components/errorMsg.js';

export default function UserPage(){
	const { data, error } = useSWR('getAllUser', getAllUsers);
	if(error) return <ErrorMsg>{ error }</ErrorMsg>;
	if(!data) return <Loading />;

	return <UserList users={data} />;
};
