import { useEffect, useState } from "react";
import Dock from "../components/Dock";
import { motion } from "framer-motion";
import { progetti } from "../progetti";
import bigoz from "../assets/PLAYBIGOZ.png";
import { Link } from "react-router-dom";
import DockMoblie from "../components/DockMoblie";

const Fivem = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["CITY", "SERVER", "COMMUNITY"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const periodo = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(200 / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(periodo);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(100);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800"
    >
      {window.innerWidth > 768 ? (
        <div className="fixed bottom-3 flex justify-center w-full">
          <Dock />
        </div>
      ) : (
        <div className="fixed bottom-0 flex justify-center w-full">
          <DockMoblie />
        </div>
      )}
      <header>
        <div className="text-center md:p-10 md:py-10 immagine h-[600px] mb-20 border-b-2 border-b-[#7eff6d]">
          <div className="flex items-center justify-center gap-8">
            <a href="https://store.nonick.it" target="_blank" rel="noreferrer">
              <button className="bg-[rgba(123, 247, 150, 0.178)] backdrop-blur-sm hover:bg-[#158515] hover:shadow-lg shadow-[rgba(37, 209, 46, 0.514)] text-white border border-[#7eff6d] transition-all px-5 py-2 w-32 font-bold mt-10 md:mt-0">
                TEBEX
              </button>
            </a>
            <img
              src={bigoz}
              alt=""
              className="w-[50px] md:w-32 mt-10 md:mt-0"
            />
            <a
              href="https://discord.gg/fyF9UFKPZj"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-[rgba(123, 247, 150, 0.178)] backdrop-blur-sm hover:bg-[#158515] hover:shadow-lg shadow-[rgba(37, 209, 46, 0.514)] text-white border border-[#7eff6d] transition-all px-5 py-2 w-32 font-bold mt-10 md:mt-0">
                DISCORD
              </button>
            </a>
          </div>
          <div className="mt-32 flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-0">
            <div className="w-[262px]">
              <h1 className="text-white font-bold text-[23px]">
                IMPROVE THE QUALITY OF YOUR{" "}
                <span className="text-[#7eff6d]">{text}|</span>
              </h1>
              <p className="text-white">
                FiveM <span className="text-[#7eff6d]">|</span> MLOs
              </p>
            </div>

            <div>
              <a
                href="http://latest.nonick.it"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[rgba(123, 247, 150, 0.178)] backdrop-blur-sm hover:bg-[#158515] hover:shadow-lg shadow-[rgba(37, 209, 46, 0.514)] text-white border border-[#7eff6d] transition-all px-5 py-2 w-52 h-20 md:w-52 font-bold text-xl">
                  LATEST RELEASE
                </button>
              </a>
              <p className="text-black md:text-white font-semibold text-xs">
                For a total of <span className="text-[#7eff6d]"> 15 </span>
                products avaiable
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="min-h-screen px-10 dark:bg-gray-900 md:px-20 lg:px-40 transition-all">
        <section className="flex flex-col gap-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl text-[#7eff6d] font-bold">
              PROJECT MAPS
            </h2>
            <p className="text-white p-2 border-b border-[#7eff6d]">
              Here you can see all maps created and there location
            </p>
          </div>
          <div className="w-full mb-20 flex justify-center">
            <iframe
              className="w-[1300px] h-[700px] rounded-xl shadow-lg shadow-teal-500"
              src="https://alessandro-ciccia.github.io/np-gangmap/"
            ></iframe>
          </div>
        </section>

        <section className="flex flex-col gap-5 text-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl text-[#7eff6d] font-bold">
              COLLABORATORS
            </h2>
            <p className="text-white p-2 border-b border-[#7eff6d]">
              Here is the list of servers I have worked / still working for:
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-40 md:mb-40">
            {progetti.map((item) => (
              <Link to={`/fivem/${item.id}`} key={item.id}>
                <div className="flex flex-col items-center gap-2">
                  <img src={item.img} width={100} height={100} alt="asd" />
                  <p className="flex flex-col items-center font-semibold font-mono text-white">
                    {item.name}
                    <span>
                      {" "}
                      <img
                        height={20}
                        width={20}
                        src={item.nazionalita}
                        alt=""
                      />
                    </span>{" "}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Fivem;
