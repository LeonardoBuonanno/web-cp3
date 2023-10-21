// components/Header.js
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/calca">
                            <a>Calça</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/camisa">
                            <a>Camisa</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/bone">
                            <a>Boné</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/oculos">
                            <a>Óculos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sapato">
                            <a>Sapato</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/codigofonte">
                            <a>Código Fonte</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};



export default Header;