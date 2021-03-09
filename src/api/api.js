import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "22e21f3e-6bb5-426a-add7-5f9b22cb16b4",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
}