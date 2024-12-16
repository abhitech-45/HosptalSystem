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
     
     
      getPhysicianListByPatientId(patientId)
      {
        return axios.get(baseURL+"/api/appointment/physicianList/"+patientId);

      }
     
     
      getPhysicianByAppointmentId(appointmentId)
      {
        return axios.get(baseURL+"/api/appointment/Listphysician/"+appointmentId);

      }
      getNursesByPatientId(patientId)
      {
        return axios.get(baseURL+"/api/patients/nursesList/"+patientId);

      }
      getPatientByAppointmentId(appointmentId)
      {
        return axios.get(baseURL+"/api/appointment/Listpatient/"+appointmentId);
      }
  
      getNursesByPatientId(patientId)
      {
        return axios.get(baseURL+"/api/patients/nursesList/"+patientId);

      }


      getPatientByAppointmentId(appointmentId)
      {
        return axios.get(baseURL+"/api/appointment/Listpatient/"+appointmentId);

      }

      

}

export default ApiService;