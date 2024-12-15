import axios from "axios"

let baseURL="http://localhost:8080"
class ApiService
{

    bookAppointment(appointmentDto)
    {
      return axios.post(baseURL+"/api/appointment",appointmentDto)
    }

    getAllAppointments()
    {
     return axios.get(baseURL+"/api/appointment")
    }

    getAppointmentsByStartTo(startTo) {
        return axios.get(baseURL+"/api/appointment/"+startTo);
      }

      getNurseByAppointmentId(appointmentId)
      {
        return axios.get(baseURL+"/api/appointment/nurse/"+appointmentId);

      }
      getExaminationRoomByAppointmentId(appointmentId)
      {
        return axios.get(baseURL+"/api/appointment/examinationRoom/"+appointmentId);

      }
      getPhysicianByAppointmentId(appointmentId)
      {
        return axios.get(baseURL+"/api/appointment/Listphysician/"+appointmentId);

      }
  

}

export default ApiService;