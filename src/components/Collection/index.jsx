// img
import img1 from "../../assets/img/collection/1.png"
import img2 from "../../assets/img/collection/2.png"
// bottom img
import bottom1 from "../../assets/img/card/1.png"
import bottom2 from "../../assets/img/card/5.png"
import bottom3 from "../../assets/img/card/7.png"

const Collection = () => {
    return (
        <section className="py-[30px]">
            <div className="container2 flex flex-col gap-[20px]">
                <h1 className="title">Коллекции плитки</h1>

                <div className="grid grid-cols-2 gap-[20px] max-[720px]:grid-cols-1">
                    <div className="flex flex-col gap-[10px]">
                        <div className=" overflow-hidden">
                            <img src={img1} alt="" />
                        </div>

                        <div className="flex justify-start items-center gap-[10px]">
                            <img
                                src={bottom1}
                                alt=""
                                className="h-[50px] w-[50px] border border-gray-300"
                            />
                            <img
                                src={bottom2}
                                alt=""
                                className="h-[50px] w-[50px] border border-gray-300"
                            />

                            <img
                                src={bottom3}
                                alt=""
                                className="h-[50px] w-[50px] border border-gray-300"
                            />

                            <div className="h-[50px] w-[50px] flex justify-center items-center border border-gray-300">
                                +5
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-[10px] text-[13px] opacity-70 max-[330px]:flex-col max-[330px]:items-start max-[330px]:justify-start">
                            <p>Блестящая коллекция Maracesh</p>
                            <p>от 2000 руб./м2</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <div className=" overflow-hidden">
                            <img src={img2} alt="" />
                        </div>

                        <div className="flex justify-start items-center gap-[10px]">
                            <img
                                src={bottom1}
                                alt=""
                                className="h-[50px] w-[50px] border border-gray-300"
                            />
                            <img
                                src={bottom2}
                                alt=""
                                className="h-[50px] w-[50px] border border-gray-300"
                            />

                            <img
                                src={bottom3}
                                alt=""
                                className="h-[50px] w-[50px] border border-gray-300"
                            />

                            <div className="h-[50px] w-[50px] flex justify-center items-center border border-gray-300">
                                +5
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-[10px] text-[13px] opacity-70 max-[330px]:flex-col max-[330px]:items-start max-[330px]:justify-start">
                            <p>Блестящая коллекция Maracesh</p>
                            <p>от 2000 руб./м2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection
