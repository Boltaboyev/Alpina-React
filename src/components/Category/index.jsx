// img
import category1 from "../../assets/img/category/1.png"
import category2 from "../../assets/img/category/2.png"
import category3 from "../../assets/img/category/1.png"
import category4 from "../../assets/img/category/4.png"
import category5 from "../../assets/img/category/5.png"
import category6 from "../../assets/img/category/6.png"

const Category = () => {
    return (
        <section className="py-[20px]">
            <div className="container2 flex flex-col gap-[20px]">
                <h1 className="title">Популярные категории</h1>

                <div className="grid grid-cols-6 gap-[10px] max-[1000px]:grid-cols-3 max-[480px]:grid-cols-2">
                    {/* 1 */}
                    <div className="flex flex-col group">
                        <div className="overflow-hidden h-[200px] max-[595px]:h-[150px] max-[320px]:h-[130px] flex justify-center items-center bg-[#f6f6f6]">
                            <img
                                src={category1}
                                alt=""
                                className="object-contain group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>
                        <p className="text-[17px] opacity-60 text-center py-[3px] max-[1000px]:border border-[#a6331c]">
                            Стулья
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col group">
                        <div className="overflow-hidden h-[200px] max-[595px]:h-[150px] max-[320px]:h-[130px] flex justify-center items-center bg-[#f6f6f6]">
                            <img
                                src={category2}
                                alt=""
                                className="object-contain group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>
                        <p className="text-[17px] opacity-60 text-center py-[3px] max-[1000px]:border border-[#a6331c]">
                            Столы
                        </p>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col group">
                        <div className="overflow-hidden h-[200px] max-[595px]:h-[150px] max-[320px]:h-[130px] flex justify-center items-center bg-[#f6f6f6]">
                            <img
                                src={category3}
                                alt=""
                                className="object-contain group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>
                        <p className="text-[17px] opacity-60 text-center py-[3px] max-[1000px]:border border-[#a6331c]">
                            Стулья
                        </p>
                    </div>

                    {/* 4 */}
                    <div className="flex flex-col group">
                        <div className="overflow-hidden h-[200px] max-[595px]:h-[150px] max-[320px]:h-[130px] flex justify-center items-center bg-[#f6f6f6]">
                            <img
                                src={category4}
                                alt=""
                                className="object-contain group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>
                        <p className="text-[17px] opacity-60 text-center py-[3px] max-[1000px]:border border-[#a6331c]">
                            Шкафы
                        </p>
                    </div>

                    {/* 5 */}
                    <div className="flex flex-col group">
                        <div className="overflow-hidden h-[200px] max-[595px]:h-[150px] max-[320px]:h-[130px] flex justify-center items-center bg-[#f6f6f6]">
                            <img
                                src={category5}
                                alt=""
                                className="object-contain group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>
                        <p className="text-[17px] opacity-60 text-center py-[3px] max-[1000px]:border border-[#a6331c]">
                            Кровати
                        </p>
                    </div>

                    {/* 6 */}
                    <div className="flex flex-col group">
                        <div className="overflow-hidden h-[200px] max-[595px]:h-[150px] max-[320px]:h-[130px] flex justify-center items-center bg-[#f6f6f6]">
                            <img
                                src={category6}
                                alt=""
                                className="object-contain group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>
                        <p className="text-[17px] opacity-60 text-center py-[3px] max-[1000px]:border border-[#a6331c]">
                            Диваны
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category
