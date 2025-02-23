import {BiArchive} from "react-icons/bi"

const Header = () => {
  return (
    <div className="py-6 px-8 mb-8 shadow-sm bg-white/80 backdrop-blur-sm">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent hover:from-teal-400 hover:to-blue-500 transition-all duration-300 cursor-pointer">
        PawTime
        <span className="text-sm font-normal text-gray-600 ml-2">
          Veterinary Care
        </span>
      </h1>
    </div>
  )
}

export default Header