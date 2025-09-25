const login = () => {
  return new Promise((resolve) => {
    resolve({
      token: "some fake token",
    });
  });
};

const getCurrentUser = () => {
  return new Promise((resolve) => {
    resolve({
      data: { name: "DJ", email: "fake@example.com", _id: "fake-id" },
    });
  });
};

export { login, getCurrentUser };
