// img
import catalog1 from "../../assets/img/catalog/1.png"
import catalog2 from "../../assets/img/catalog/2.png"
import catalog3 from "../../assets/img/catalog/3.png"
import catalog4 from "../../assets/img/catalog/4.png"

const Catalog = () => {
    return (
        <section className="py-[20px]">
            <div className="container2 flex flex-col gap-[20px]">
                <h1 className="title">Каталог по комнатам</h1>

                <div className="grid grid-cols-4 gap-[10px] max-[1260px]:grid-cols-2">
                    <div className="flex flex-col gap-[10px] group">
                        <div className="overflow-hidden h-[250px] max-[500px]:h-[150px] max-[320px]:h-[130px]">
                            <img
                                src={catalog1}
                                alt=""
                                className=" h-full w-full object-cover group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>
                        <p className="text-[17px] opacity-60">Спальня</p>
                    </div>

                    <div className="flex flex-col gap-[10px] group">
                        <div className="overflow-hidden h-[250px] max-[500px]:h-[150px] max-[320px]:h-[130px]">
                            <img
                                src={catalog2}
                                alt=""
                                className=" h-full w-full object-cover group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>
                        <p className="text-[17px] opacity-60">Спальня</p>
                    </div>

                    <div className="flex flex-col gap-[10px] group">
                        <div className="overflow-hidden h-[250px] max-[500px]:h-[150px] max-[320px]:h-[130px]">
                            <img
                                src={catalog3}
                                alt=""
                                className=" h-full w-full object-cover group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>
                        <p className="text-[17px] opacity-60">Спальня</p>
                    </div>

                    <div className="flex flex-col gap-[10px] group">
                        <div className="overflow-hidden h-[250px] max-[500px]:h-[150px] max-[320px]:h-[130px]">
                            <img
                                src={catalog4}
                                alt=""
                                className=" h-full w-full object-cover group-hover:scale-[1.1] transition !duration-[.5s]"
                            />
                        </div>
                        <p className="text-[17px] opacity-60">Спальня</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog
