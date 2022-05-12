const getStorageCart = () => {
  const modelStorage = {
    from: "",
    to: "",
    package: "",
    letter: "",
    date: "",
    time: "",
    comment: "",
  };
  const getStorage = JSON.parse(localStorage.getItem("cart"));

  return getStorage ? getStorage : modelStorage;
};
const postStorageCart = (packet) => {
  localStorage.setItem("cart", JSON.stringify(packet));
};

export { getStorageCart, postStorageCart };
