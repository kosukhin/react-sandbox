import Avatar from "./ui/Avatar";

function Header() {
    return (
        <header>
            <nav className="flex items-center gap-3 p-3">
                <Avatar />
                <div className="ml-auto">
                    <a href="#">О компании</a>
                </div>
                <div>
                    <a href="#">Связаться</a>
                </div>
                <div>
                    <a href="#">Как нас найти</a>
                </div>
            </nav>
        </header>
    )
}

export default Header