import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/home/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-maxf-gray">
            <Head>
                <title>Max F - Software Engineer</title>
                <meta
                    name="description"
                    content="Maxwell Fortney's personal website"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <div className="flex flex-col items-center w-full h-screen max-h-screen min-h-screen">
                <Navbar />
                <div className="flex flex-auto w-full mb-8">
                    <h1
                        className={`flex self-end font-black text-maxf-cyan whitespace-nowrap ${styles["main-maxf"]}`}
                        style={{ lineHeight: 0.78 }}
                    >
                        Max F
                    </h1>
                    <div className="flex items-end justify-center flex-auto">
                        <h1
                            className="font-black text-black whitespace-nowrap"
                            style={{
                                textOrientation: "sideways",
                                writingMode: "vertical-lr",
                                fontSize: "8vh",
                            }}
                        >
                            Software Engineer
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center w-full h-screen max-h-screen min-h-screen">
                MAXLL
            </div>

            {/* <h1
                className="flex font-black text-black"
                style={{
                    fontSize: "3vw",
                    transform: "rotate(-90deg)",
                    transformOrigin: "0 0",
                }}
            >
                Software Engineer
            </h1> */}
        </div>
    );
}
