import axios from 'axios'
import tokenManager from 'commons/utils/token'
import environment from 'commons/utils/environment'




const retailOutlet = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();
	
	return axios.post(`${environment.rootApi}/call/retailoutlet`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default retailOutlet
