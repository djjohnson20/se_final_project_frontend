const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    resolve({
      token: "some fake token",
    });
  });
};

const getCurrentUser = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "DJ", email: "fake@example.com", _id: "fake-id" },
    });
  });
};

export { login, getCurrentUser };
