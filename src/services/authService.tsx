const getUserInfo = () => {
  fetch('https://5f2f427b6b05e900163bca23.mockapi.io/news')
    .then((res) => {
      if (!res.ok) {
        throw new Error('error while fetching news: ' + res.statusText);
      }

      return res.json();
    })
    .catch((e) => console.log(e));
};

export default getUserInfo;
