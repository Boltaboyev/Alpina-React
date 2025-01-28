// icon
import {FaRegHeart} from "react-icons/fa"
import {LiaShoppingBagSolid} from "react-icons/lia"

const Card = ({data}) => {
    return (
        <div className="flex flex-col gap-[10px] justify-between">
            <div className="relative overflow-hidden h-[250px] max-[600px]:h-[200px] flex justify-center items-center">
                <img src={data.img} alt="" className="h-[80%] w-[80%] object-contain" />
                <span className="text-white bg-black rounded-md p-[2px_5px] text-[12px] absolute top-[15px] left-[15px]">
                    Распродажа
                </span>
                <FaRegHeart className=" absolute top-[15px] right-[15px]" />
            </div>

            <h1 className="opacity-80 leading-[140%]">{data.title}</h1>

            <div className="flex justify-between items-center">
                <p className="text-[12px] opacity-50">{data.size}</p>
                <p className="font-[600] text-[14px] text-nowrap">
                    {data.price}
                </p>
            </div>

            <button className=" w-full p-[5px] bg-black rounded-md text-white flex justify-center items-center gap-[15px] active:scale-[.9] cursor-pointer">
                В корзине
                <LiaShoppingBagSolid />
            </button>
        </div>
    )
}

export default Card
