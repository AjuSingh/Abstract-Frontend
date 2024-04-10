import { BiArrowFromLeft } from "react-icons/bi";

interface Props {
    path: string;
    title: string;
    description: string;
}

const Card = ({ title, description, path }: Props) => {
    return (
        <div className="flex p-3">
            <div className="p-1">
                <img src={path} alt="img" className="w-10 h-10" />
            </div>
            <div className="text-white p-1">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-2xl">{description}</p>
                <span>Learn More  <BiArrowFromLeft size={30} className="inline" /></span>
            </div>
        </div>
    )
}

export default Card