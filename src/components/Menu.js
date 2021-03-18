import { v4 as uuidv4 } from 'uuid';

const Menu = ({ menu, active, onMenuClick }) => {
    const onClick = (e) => {
        e.preventDefault();
        // get slug attribute and pass to menu click, which is go to page based on slug
        const pageSlug = e.target.getAttribute('slug');
        if (pageSlug !== active) onMenuClick(pageSlug)
    }

    return (
        <ul className="mt-3">
            {menu.map((item) => (
                <li key={uuidv4()} className="py-1 text-white">
                    <a href={'/' + item.slug} className={item.slug === active? 'color-primary' : ''} slug={item.slug}  onClick={onClick}>{item.title}</a>
                </li>
            ))}
        </ul>
    )
}

export default Menu
