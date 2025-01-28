// img
import logo from "../../assets/img/logo.png"

// icon
import {IoChatbubbleEllipsesOutline} from "react-icons/io5"
import {FaRegHeart} from "react-icons/fa"
import {MdOutlineShoppingBag} from "react-icons/md"
import {IoSearchOutline} from "react-icons/io5"
import {LuMenu} from "react-icons/lu"

const Header = () => {
    return (
        <header>
            {/* topbar */}
            <nav className=" py-[7px] border-b border-[#0000001f] text-[14px] max-[420px]:hidden">
                <nav className="container2 flex justify-between items-center gap-[20px]">
                    <nav className="flex justify-center items-center gap-[15px] max-[720px]:hidden">
                        <select>
                            <option value="">Санкт-Петербург</option>
                            <option value="">Санкт-Петербург</option>
                        </select>

                        <p>8 800 700 40 24</p>
                    </nav>

                    <select className="max-[940px]:hidden">
                        <option>Позвонить или написать</option>
                    </select>

                    <ul className="flex justify-center items-center gap-[15px]">
                        <li>
                            <a href="#!" className="hover:text-[#a6331c]">
                                О нас
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#a6331c]">
                                Наши салоны
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#a6331c]">
                                Оплата и доставка
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#a6331c]">
                                Для бизнеса
                            </a>
                        </li>
                    </ul>
                </nav>
            </nav>

            {/* middle bar */}
            <nav>
                <nav className="container2 flex justify-between items-center gap-[20px] text-[13px]">
                    <nav className="flex justify-between items-center gap-[120px] max-[420px]:py-[10px]">
                        <ul className="flex justify-center items-center gap-[15px] max-[880px]:hidden">
                            <li>
                                <a
                                    className="uppercase hover:text-[#a6331c]"
                                    href="#!">
                                    Каталог
                                </a>
                            </li>

                            <li>
                                <a
                                    className="uppercase hover:text-[#a6331c]"
                                    href="#!">
                                    Комнаты
                                </a>
                            </li>

                            <li>
                                <a
                                    className="uppercase hover:text-[#a6331c]"
                                    href="#!">
                                    Дизайн-проекты
                                </a>
                            </li>

                            <li>
                                <a
                                    className="uppercase hover:text-[#a6331c]"
                                    href="#!">
                                    Мебель на заказ
                                </a>
                            </li>
                        </ul>

                        {/* logo */}
                        <a href="#!">
                            <img src={logo} alt="" />
                        </a>
                    </nav>

                    <div className="hidden justify-between items-center w-[40%] h-[30px] bg-[#f6f6f6] max-[650px]:flex max-[420px]:hidden">
                        <input
                            type="text"
                            placeholder="Белый стул"
                            className="px-[10px] flex-[7]"
                        />

                        <IoSearchOutline className="flex-[1]" />
                    </div>

                    {/* icons */}
                    <nav className="flex justify-center items-center gap-[10px] text-xl max-[420px]:hidden">
                        <IoChatbubbleEllipsesOutline />
                        <FaRegHeart />
                        <MdOutlineShoppingBag />
                    </nav>

                    <LuMenu className="hidden max-[420px]:block text-[30px]"/>
                </nav>
            </nav>

            {/* bottom bar */}
            <nav className="py-[15px] max-[650px]:hidden">
                <nav className="container2 flex justify-between items-center gap-[50px]">
                    <ul className="text-[15px] font-[600] flex justify-between items-center w-full gap-[10px]">
                        <li>
                            <a
                                className="hover:text-[#a6331c] capitalize"
                                href="#!">
                                Мебель
                            </a>
                        </li>

                        <li>
                            <a
                                className="hover:text-[#a6331c] capitalize"
                                href="#!">
                                фурнитура
                            </a>
                        </li>

                        <li>
                            <a
                                className="hover:text-[#a6331c] capitalize"
                                href="#!">
                                Товары
                            </a>
                        </li>

                        <li>
                            <a
                                className="hover:text-[#a6331c] capitalize"
                                href="#!">
                                Плитка
                            </a>
                        </li>

                        <li>
                            <a className="text-[#a6331c] capitalize" href="#!">
                                Акции
                            </a>
                        </li>
                    </ul>

                    <div className="flex justify-between items-center w-[40%] h-[30px] bg-[#f6f6f6]">
                        <input
                            type="text"
                            placeholder="Белый стул"
                            className="px-[10px] flex-[7]"
                        />

                        <IoSearchOutline className="flex-[1]" />
                    </div>
                </nav>
            </nav>
        </header>
    )
}

export default Header
