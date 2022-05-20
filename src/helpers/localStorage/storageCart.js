const getStorageCart = () => {
  const modelStorage = {
    from: "",
    to: "",
    id_client: "",
    id_delivered: "",
    pick_up_date: "",
    pick_up_time: "",
    delivered_time: "",
    pakage: "",
    letter: "",
    comment: "",
  };
  const getStorage = JSON.parse(localStorage.getItem("cart"));

  return getStorage ? getStorage : modelStorage;
};
const postStorageCart = (packet) => {
  localStorage.setItem("cart", JSON.stringify(packet));
};

export { getStorageCart, postStorageCart };
