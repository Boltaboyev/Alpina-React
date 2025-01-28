// img
import payment from "../../assets/img/payment.png"

// icons
import {FaInstagram} from "react-icons/fa"
import {AiOutlineYoutube} from "react-icons/ai"
import {LiaTelegram} from "react-icons/lia"

const Footer = () => {
    return (
        <footer className="pt-[80px] pb-[30px]">
            <div className="container2">
                <div className="grid grid-cols-4 gap-[15px] border-t border-gray-300 py-[25px] max-[910px]:grid-cols-2 max-[910px]:gap-[40px_15px] max-[480px]:grid-cols-1">
                    <ul className="flex flex-col justify-start items-start gap-[6px]">
                        <h3 className="font-[600] mb-[4px]">Каталог</h3>
                        <li>
                            <a href="#!" className="hover:text-[#079294]">
                                Акции
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#079294]">
                                Мебель
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#079294]">
                                Список комнат
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#079294]">
                                Товары для дома
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#079294]">
                                Фурнитура и комплекти
                            </a>
                        </li>
                    </ul>

                    <ul className="flex flex-col justify-start items-start gap-[6px]">
                        <h3 className="font-[600] mb-[4px]">Покупателю</h3>
                        <li>
                            <a href="#!" className="hover:text-[#079294]">
                                Мебель на заказ
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#079294]">
                                Дизайн-проекты
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#079294]">
                                Наши салоны
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#079294]">
                                Оплата и доставка
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="hover:text-[#079294]">
                                Для бизнеса
                            </a>
                        </li>
                    </ul>

                    <div className="flex flex-col justify-start items-start gap-[6px]">
                        <h3 className="font-[600] mb-[4px]">Контакты</h3>
                        <small>Единая справочная:</small>
                        <a href="tel:8 800 700 40 24">8 800 700 40 24</a>
                        <small>
                            Звонок по России бесплатный с 02:00 до 23:00
                        </small>
                        <div className="flex justify-start items-center gap-[10px]">
                            <FaInstagram />
                            <AiOutlineYoutube />
                            <LiaTelegram />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between items-start gap-[6px]">
                        <div>
                            <h3 className="font-[600] mb-[4px]">
                                Мы принимаем к оплате
                            </h3>
                            <img
                                src={payment}
                                alt="payment"
                                className="cursor-pointer"></img>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-[4px]">
                            <p>Нам важно ваше мнение</p>
                            <a
                                href="#!"
                                className="p-[3px_10px] border border-gray-300 w-full text-center">
                                Написать нам
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center border-t border-gray-300 py-[15px] text-[14px] max-[290px]:text-[13px] max-[830px]:flex-col max-[830px]:gap-[10px]">
                    <div className="flex justify-start items-center gap-[60px] max-[830px]:flex-col max-[830px]:gap-[10px]">
                        <p className="opacity-60">
                            © 2020 Rendement. All rights reserved
                        </p>
                        <a href="#!" className="hover:underline">
                            Политика конфиденциальности
                        </a>
                    </div>
                    <a href="!#" className="hover:text-[#079294]">
                        Developed by Legacystudio
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
