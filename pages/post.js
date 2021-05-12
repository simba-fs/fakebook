import useSWR from 'swr';
import getPosts from '../lib/post.js';

import PostsList from '../components/postsList.js';
import Loading from '../components/loading.js'
import ErrorMsg from '../components/errorMsg.js';

export default function User(){
	const { data, error } = useSWR('getAllUser', () => getPosts());

	if(error) return <ErrorMsg>{ error }</ErrorMsg>;
	if(!data) return <Loading />;

	return <PostsList posts={data} />;
};
