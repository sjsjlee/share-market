import axios from 'axios'

export const join = ({username, password, email, addr}) => axios.post('/join', {username, password, email, addr});
export const login = ({username, password}) => axios.post('/login', {username, password});
export const getUser = (JWT) => axios.get('/user/api/check', {key:'X-AUTH-TOKEN', value: JWT} );

export const writePost = ({title, content, category, price, deposit}) => axios.post('/user/api/posts', {title, content, category, price, deposit});
export const uploadFiles = ({post_id, formData, config}) => axios.post(`/uploadMultipleFiles/${post_id}`, formData, config);
export const getPost = ({post_id})=> axios.get(`/api/posts/${post_id}`);
export const getFiles = ({post_id})=> axios.get(`/post/${post_id}/files`);