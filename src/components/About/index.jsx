// img
import img1 from "../../assets/img/hall/1.png"
import img2 from "../../assets/img/hall/2.png"
import img3 from "../../assets/img/hall/3.png"

function About() {
    return (
        <section className="py-[30px]">
            <div className="container2">
                <div className="grid grid-cols-4 gap-[15px] max-[1080px]:grid-cols-2 max-[620px]:grid-cols-1">
                    <div className="flex flex-col gap-[5px] justify-between">
                        <h1 className="font-[600] text-[18px] leading-[120%]">
                            Мебель для ресторанов, гостиниц и офиса
                        </h1>
                        <p className="text-[14px] font-[400] leading-[160%] opacity-60">
                            Мы стремимся к европейскому качеству, поэтому
                            используем фасады и элементы декора, созданные
                            итальянскими дизайнерами{" "}
                        </p>

                        <button className="border p-[5px_35px] self-start cursor-pointer mt-2">
                            Подробнее
                        </button>
                    </div>

                    {/* 1 */}
                    <div className="flex flex-col gap-[10px] group">
                        <div className=" overflow-hidden">
                            <img
                                src={img1}
                                alt=""
                                className=" h-full w-full object-cover group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>

                        <p className="text-[15px] opacity-60">
                            Ресторан Тургенев
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col gap-[10px] group">
                        <div className=" overflow-hidden">
                            <img
                                src={img2}
                                alt=""
                                className=" h-full w-full object-cover group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>

                        <p className="text-[15px] opacity-60">
                            Ресторан Колокольников
                        </p>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col gap-[10px] group">
                        <div className=" overflow-hidden">
                            <img
                                src={img3}
                                alt=""
                                className=" h-full w-full object-cover group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>

                        <p className="text-[15px] opacity-60">ЗАГС, Тюмень</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
