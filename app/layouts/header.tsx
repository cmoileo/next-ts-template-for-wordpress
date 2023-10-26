import getMenu from "../hooks/menus";
import { MenuItem } from "../type";

export default async function MenuComponent() {
  const menu = await getMenu("top-left-1")

  return (
    <header>
      <nav className="menu">
        {menu.length > 0 && menu.map((item: MenuItem, i: number) => (
          <ul>
            <a key={i} href={item.url}>
              <li>{item.title}</li>
            </a>
              {
                item.children.length > 0 && (
                  <div className="sub-menu">
                    {
                      item.children.map((child: MenuItem, i:number) => (
                        <a key={i} href={child.url}>
                          <li>{child.title}</li>
                        </a>
                      ))
                    }
                  </div>
                )
              }
          </ul>
        ))}
      </nav>
    </header>
  );
}