// Configure and export Axios object to make http request
import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:8080',
});
