import axios from "axios";

const getClientOrders = async (id) => {
  try {
    console.log(id);
    const get = await axios.get(
      `${process.env.REACT_APP_API_URL}/order/client/${id}`,
    );
    console.log(get);
  } catch (error) {}
  return;
};

export default getClientOrders;
