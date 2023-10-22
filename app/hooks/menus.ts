import axios from "axios";
import { stringify } from "querystring";

export default async function getMenu(menuId: string) {
    try {
      const response = await axios.get(`${process.env.WP_URL}/wp-json/custom/menu/${menuId}`);
      const menuDetails = response;
      console.log(menuDetails)
      return menuDetails;
    } catch (error) {
      throw error;
    }
  }