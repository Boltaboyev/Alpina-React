// imgs
import img1 from "../../assets/img/poster/1.png"
import img2 from "../../assets/img/poster/2.png"

//icons
import {IoLogoYoutube} from "react-icons/io"

const Video = () => {
    return (
        <section className="py-[30px]">
            <div className="container2 flex flex-col gap-[15px]">
                <h1 className="title text-center">Раздел о производстве</h1>
                <p className="w-[50%] text-center self-center opacity-70 max-[820px]:w-full">
                    Мы стремимся к европейскому качеству, поэтому используем
                    фасады и элементы декора, созданные итальянскими дизайнерами
                    и произведенные на ведущих фабриках Италии.{" "}
                </p>

                <div className="grid grid-cols-2 gap-[30px] max-[660px]:grid-cols-1">
                    <div className="flex justify-center items-center relative">
                        <img
                            src={img1}
                            alt=""
                            className=" h-full w-full object-cover"
                        />
                        <IoLogoYoutube className="text-[60px] absolute text-[#a6331c] cursor-pointer" />
                    </div>

                    <div className="flex justify-center items-center relative">
                        <img
                            src={img2}
                            alt=""
                            className=" h-full w-full object-cover"
                        />
                        <IoLogoYoutube className="text-[60px] absolute text-[#a6331c] cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video
