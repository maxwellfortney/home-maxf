import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isDesktop = useMediaQuery(
        { query: "(min-width: 768px)" },
        undefined,
        handleMediaQueryChange
    );

    async function handleMediaQueryChange() {
        setIsOpen(false);
    }

    async function handleMenuClick() {
        if (isOpen) {
            setIsOpen(false);
            document.querySelector("html").style.overflowY = "auto";
            // document.querySelector("html").style.overflowX = "hidden";
        } else {
            setIsOpen(true);
            document.querySelector("html").style.overflowY = "hidden";
        }
    }

    return (
        <div className="flex items-center justify-between w-full pl-1 pr-3 mt-12 md:w-11/12 md:px-0">
            <div
                className="absolute top-0 flex flex-col items-center justify-center w-full h-screen text-2xl font-extrabold text-white bg-maxf-cyan"
                style={{
                    right: isOpen && !isDesktop ? "0" : "-100%",
                    transition: "right ease-in-out .25s",
                    paddingTop: "108px",
                }}
            >
                <div className="flex flex-col items-center justify-around h-3/4">
                    <p className="transition-colors cursor-pointer hover:text-maxf-gray">
                        Resume
                    </p>
                    <p className="mx-8 transition-colors cursor-pointer hover:text-maxf-gray">
                        Projects
                    </p>
                    <p className="transition-colors cursor-pointer hover:text-maxf-gray">
                        Contact
                    </p>
                </div>
            </div>
            <div
                className={`flex text-6xl font-black z-10 ${
                    isOpen && !isDesktop ? "text-maxf-gray" : "text-maxf-cyan"
                }`}
                style={{ transition: "color ease-in-out .25s" }}
            >
                MF
            </div>
            <div className="z-10 flex sm:hidden">
                <div
                    className={`hamburger hamburger--collapse ${
                        isOpen && !isDesktop ? "is-active" : ""
                    }`}
                    onClick={handleMenuClick}
                >
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
            <div className="hidden text-2xl font-extrabold text-white sm:flex">
                <p className="transition-colors cursor-pointer hover:text-maxf-cyan">
                    Resume
                </p>
                <p className="mx-8 transition-colors cursor-pointer hover:text-maxf-cyan">
                    Projects
                </p>
                <p className="transition-colors cursor-pointer hover:text-maxf-cyan">
                    Contact
                </p>
            </div>
        </div>
    );
};

export default Navbar;
