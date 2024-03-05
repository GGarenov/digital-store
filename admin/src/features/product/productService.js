import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${base_url}api/product-list`);

  return response.data;
};

const productService = {
  getProducts,
};

export default productService;
