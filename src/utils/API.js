import axios from 'axios';
const LOCAL = 'http://localhost:3002'

export default {
    // basic call
    findDateLocation: async function(dateLocation){
        console.log(dateLocation);
        return await axios.post(LOCAL + '/api/call', {
            city: dateLocation
        })
        
    }


}