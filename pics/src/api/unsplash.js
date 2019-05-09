import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 14e19f08fa6f7857cb78366c61dc9fd19fa2ba0c8e6cc1888596f70f35b8e37f'  
    }  
})