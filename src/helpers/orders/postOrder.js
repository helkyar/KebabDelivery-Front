import axios from "axios";

const postOrder = async (order, jwt) => {
  if (typeof order !== "object") {
    throw new TypeError("is not a Object");
  }
  console.log(order);
  try {
    const post = await axios.post(
      `${process.env.REACT_APP_API_URL}/orders/add`,
      order,
      {
        headers: {
          authorization: jwt,
        },
      },
    );
    return post;
  } catch (error) {
    return error;
  }
};

export default postOrder;
