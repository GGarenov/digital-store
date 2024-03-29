import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${base_url}brand/`);

  return response.data;
};
const createProduct = async (brand) => {
  const response = await axios.post(`${base_url}brand/`, brand, config);

  return response.data;
};

const brandService = {
  getProducts,
  createProduct,
};

export default brandService;
