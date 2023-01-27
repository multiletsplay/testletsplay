import axios from "axios";


const MEMBER_API_URL = "http://localhost:8787/"

class ApiService {

  fetchMember() {
    return axios.get(MEMBER_API_URL);
  }

  fetchMemberByID(ID) {
    return axios.get(MEMBER_API_URL + '/' + ID);
  }

  deleteMember(ID) {
    return axios.delete(MEMBER_API_URL + '/' + ID);
  }

  addMember(MEMBER) {
    return axios.post(MEMBER_API_URL, MEMBER);
  }

  editMember(MEMBER) {
    return axios.put(MEMBER_API_URL + '/' + MEMBER.ID, MEMBER);
  }

}


export default ApiService();