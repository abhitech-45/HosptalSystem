import axios from "axios"

let baseURL="http://localhost:8080"
class ApiService
{

    bookAppointment(appointmentDto)
    {
return axios.post(baseURL+"/api/appointment",appointmentDto)
    }
}

export default ApiService;