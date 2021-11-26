// Load Fake data
const loadData = (url) => {
  let data1;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data1 = data;
    });
  // console.log(data1);
  return data1;
};
export default loadData;
