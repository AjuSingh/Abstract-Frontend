import { IoIosArrowRoundForward } from "react-icons/io"

const Headers = () => {
    return (
        <div className="items-center justify-center flex flex-col  bg-[#DADBF1] p-3 h-72">
            <p className="text-7xl bg-inherit">How can we help?</p>
            <div className="w-2/4 h-16 mt-4 border border-black bg-white rounded-lg flex items-center focus:ring-2 focus:ring-blue-500">
                <input type="text" placeholder="Search" className="px-4 text-2xl w-full h-full bg-inherit rounded-md outline-none" />
                <IoIosArrowRoundForward className="bg-inherit text-5xl mr-2" />
            </div>
        </div>
    )
}

export default Headers