const API_BASE_URL = "https://euteec-api.herokuapp.com";

export const API_ADD_MEMBER = `${API_BASE_URL}/api/users/add`;
export const API_users_GET_ALL = `${API_BASE_URL}/api/users/all`;

export const API_MEMBER_DELETE = userId => {
  let base = `${API_BASE_URL}/api/users/${userId}`;

  if (userId) {
    return base;
  }
};

export const API_MEMBER_GET_ONE = userId => {
  let base = `${API_BASE_URL}/api/users/${userId}`;

  if (userId) {
    return base;
  }
};
export const API_UPDATE_MEMBER = userId => {
  let base = `${API_BASE_URL}/api/users/${userId}`;

  if (userId) {
    return base;
  }
};
export const API_MEMBERS_GET_ALL = `${API_BASE_URL}/api/users/all`;
