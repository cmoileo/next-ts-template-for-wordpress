import getMenu from "../hooks/menus";
import { MenuItem } from "../app/type";

export default async function Footer() {
  const menu = await getMenu("bottom-1")

  return (
    <footer>
      <nav className="menu">
        {menu.length > 0 && menu.map((item: MenuItem, i: number) => (
          <ul key={i}>
            <a href={item.url}>
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
    </footer>
  )
}
