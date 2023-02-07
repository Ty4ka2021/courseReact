import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { "API-KEY": "a2b31488-3730-4f0a-8f59-b425789e4727" }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}






// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//   return axios.get(`users?page=${currentPage}&count=${pageSize}`,
//     {
//       withCredentials: true
//     })
//     .then(response => {
//       return response.data
//     })
// }

