const getUserInfo = () => {
  fetch('/api/test')
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

export default getUserInfo;
