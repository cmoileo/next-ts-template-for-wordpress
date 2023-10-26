import axios from "axios";
import { MenuItem } from "../type";

export default async function getMenu(menuId: string) {
  try {
    const response = await axios.get(`${process.env.WP_URL}/wp-json/custom/menu/${menuId}`);
    const menuItems = response.data.map((item: MenuItem) => ({
      id: item.ID,
      title: item.title,
      url: item.url,
      classes: item.classes,
      parent: parseInt(item.menu_item_parent),
      children: [],
    }));
    menuItems.forEach((item: MenuItem) => {
      if (item.parent > 0) {
        menuItems.find((x: { id: number; }) =>x.id === item.parent).children.push(item)
      }
    })

    return menuItems
    ;
  } catch (error) {
    throw error;
  }
}
