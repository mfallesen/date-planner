import axios from 'axios';
const LOCAL = 'https://date-application-api.herokuapp.com'

export default {
    // basic call
    findDateLocation: async function(dateLocation){
        console.log(dateLocation);
        return await axios.post(LOCAL + '/api/call', {
            city: dateLocation
        })
        
    }


}