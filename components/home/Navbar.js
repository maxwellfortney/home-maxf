const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full mx-1 mt-12 md:w-11/12 md:mx-0">
            <div className="flex text-6xl font-black text-maxf-cyan">MF</div>
            <div className="flex text-2xl font-extrabold text-white">
                <p className="transition-colors cursor-pointer hover:text-maxf-cyan">
                    Resume
                </p>
                <p className="mx-8 transition-colors cursor-pointer hover:text-maxf-cyan">
                    Portfolio
                </p>
                <p className="transition-colors cursor-pointer hover:text-maxf-cyan">
                    Contact
                </p>
            </div>
        </div>
    );
};

export default Navbar;
