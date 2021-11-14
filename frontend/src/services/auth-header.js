const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authoriazation: `Bearer${user.accessToken}` };
    // eslint-disable-next-line no-else-return
  } else {
    return {};
  }
};

export default authHeader;
