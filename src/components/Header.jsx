const Header = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 transition-all duration-300 cursor-pointer">
        PawTime
        <span className="block text-sm font-normal text-gray-600 mt-2">
          Veterinary Appointment System
        </span>
      </h1>
    </div>
  );
};

export default Header