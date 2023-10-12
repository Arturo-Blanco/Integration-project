import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.zarla.com/images/zarla-primera-interna-1x1-2400x2400-20220329-f9cqxtdfm7hhmdfdwkxd.png?crop=1:1,smart&width=250&dpr=2" alt="" />
            </div>
            <h1 className='pag-title'>
                Centro Médico
            </h1>
        </header>
    )
}
export default Header;