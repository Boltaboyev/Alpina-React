import Card from "../Card"

// data
import {ProductData} from "../../utils"

const Product = () => {
    return (
        <section className="py-[30px]">
            <div className="container2 flex flex-col gap-[20px]">
                <div className="flex justify-between items-center gap-[20px] max-[495px]:flex-col max-[495px]:justify-start max-[495px]:items-start">
                    <h1 className="title">Лучшее предложение</h1>
                    <a href="#!" className="border-b hover:text-[#a6331c]">
                        все предложения
                    </a>
                </div>

                <div className="grid grid-cols-4 gap-[20px] max-[1190px]:grid-cols-3 max-[850px]:grid-cols-2 max-[400px]:grid-cols-1">
                    {ProductData.map((value) => {
                        return <Card data={value} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Product
