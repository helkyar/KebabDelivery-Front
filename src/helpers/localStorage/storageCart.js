const getStorageCart = () => {
  const getStorage = JSON.parse(localStorage.getItem("cart"));

  return {
    from: getStorage?.from || "",
    to: getStorage?.to || "",
  };
};
const setStorageCart = (packet) => {
  localStorage.setItem("cart", JSON.stringify(packet));
};
export { getStorageCart, setStorageCart };
