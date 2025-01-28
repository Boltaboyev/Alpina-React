// img 
import showcaseBg from "../../assets/img/showcase.png"

const Showcase = () => {
    return (
        <section className="py-[20px]">
            <div className="container2">
                <img src={showcaseBg} alt=""  className="max-[450px]:h-[200px] max-[450px]:object-cover"/>
            </div>
        </section>
    )
}

export default Showcase
