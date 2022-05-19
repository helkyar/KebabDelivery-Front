import axios from "axios";

const getAllOrders = async (order) => {
  if (typeof order !== "object") {
    throw new TypeError("is not a Object");
  }
  try {
    console.log(order);
    const post = await axios.get(
      `${process.env.REACT_APP_API_URL}/orders/add`,
      order,
    );
    console.log(post);
  } catch (error) {}
  return;
};

export default getAllOrders;
