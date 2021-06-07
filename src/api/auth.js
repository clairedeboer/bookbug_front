const apiUrl = process.env.REACT_APP_APIURL || "http://localhost:3000";

export const login = (newCurrentUser) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCurrentUser),
  }).then((response) => response.json());
};

export const signup = (newSignup) => {
  return fetch(`${apiUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSignup),
  }).then((response) => response.json());
};
