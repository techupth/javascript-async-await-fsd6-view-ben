//Exercise #1

let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
const onSuccess = (data) => {
  console.log(data);
};
const onFailure = (error) => {
  console.log(error);
};
getJohnProfile().then(onSuccess).catch(onFailure);
