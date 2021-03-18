import Menu from './Menu';
import logo from '../abc_logo.svg'

const Layout = ({ menu, active, onMenuClick }) => {

    return (
        <header className="text-white relative mt-6 mb-auto">
            <img src={logo} alt="Logo"/>
            <Menu menu={menu} active={active} onMenuClick={onMenuClick} />
            <button className="py-2 px-6 border border-solid border-white float-right absolute right-0 top-0">Contact Us</button>
        </header>
    )
}

export default Layout
