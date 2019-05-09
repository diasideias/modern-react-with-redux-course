import axios from 'axios'

const KEY = 'AIzaSyAwUZYfqlJ7HQHc5Lbt6ggzK8gMenLxGz0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }  
})