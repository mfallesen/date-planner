import axios from 'axios';
const LOCAL = 'https://localhost:3002'

export default {
    // basic call
    findDateLocation: function(dateLocation){
        return axios.get(LOCAL + '/api/call')
        
    }


}