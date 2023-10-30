export interface MenuItem {
  children: any;
  parent: number;
  ID: number,
  title: string,
  url: string,
  classes: Array<string>,
  menu_item_parent: string,
}

export interface Post {
  title: string,
  content: string,
  date: string,
  categories: Object,
  slug: string,
  
}