import axios from 'axios'

// link to server/DB
export default axios.create({
    baseURL: "https://desolate-shore-53301.herokuapp.com/"
})