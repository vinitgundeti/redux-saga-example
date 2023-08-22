import axios from 'axios'
export const API = {
product : () => axios.get('https://dummyjson.com/products'),
}