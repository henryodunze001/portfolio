import HomeCard from "@components/HomeDetail";
import Type from "@components/ui/Type";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import HomeLottie from "@assets/home-lottie.json";
import { BackgroundBeamsWithCollision } from "../components/ui/BackgroundBeamWithCollision";
const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
  tap: { scale: 0.9 },
};

function Home() {
  return (
<<<<<<< HEAD
    <motion.section variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="relative bg-no-repeat py-[30px] -z-1 bg-[linear-gradient(to_bottom_left,rgba(17,16,16,0.678),rgba(12,10,22,0.863)),url(./assets/home-bg.jpg)] bg-position-[top_center]">
        <div className="text-left text-[whitesmoke] pt-36 pb-8 px-0">
        <div className="md:flex">
          <div className="md:w-7/12 md:pt-20 md:pl-[70px]">
          <motion.div
            initial={{ translateX: '-100vw', opacity:0 }}
            animate={{ translateX: '0vw', opacity: 1 }}
            transition={{ type: 'spring', stiffness: 25, delay: 1.2}}
          >
              <h1 className="pb-4 pl-4 md:pl-12 md:text-4xl text-2xl">
                Hi There!{" "}
                <span className="inline-block origin-[70%_70%] animate-[wave-animation_2.1s_infinite]" 
                  role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="pl-4 md:pl-11 text-3xl md:text-4xl">
                I'M
                <strong className="text-primary"> HENRY</strong> ODUNZE
              </h1>
              <div className="p-4 md:p-12 text-left">
                <Type />
              </div>
            </motion.div>  
=======
    <motion.section
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BackgroundBeamsWithCollision className="opacity-75 fixed bg-transparent h-[87vh] w-full">
        <div></div>
      </BackgroundBeamsWithCollision>
      <div className="pb-7">
        <div className="bg-[linear-gradient(to_bottom_left,rgba(17,16,16,0.8),rgba(12,10,22,0.8)),url(./assets/home-bg.jpg)] bg-center text-left mt-20 pb-8 px-0">
          <div className="md:flex md:mx-23">
            <div className="md:w-1/2 flex max-mdjustify-center items-center max-md:p-5">
              <motion.div
                initial={{ translateX: "-100vw", opacity: 0 }}
                animate={{ translateX: "0vw", opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="flex flex-col md:gap-10"
              >
                <h1 className="text-2xl md:text-5xl font-semibold">
                  Hi There!
                  <span
                    className="inline-block origin-[70%_70%] animate-[wave-animation_2.1s_infinite]"
                    role="img"
                    aria-labelledby="wave"
                  >
                    👋🏻
                  </span>
                </h1>
                <h1 className="text-2xl md:text-4xl">
                  I'M
                  <strong className="text-primary-foreground">
                    {" "}
                    EZRA
                  </strong>{" "}
                  FIKADU
                </h1>
                <div>
                  <Type />
                </div>
              </motion.div>
>>>>>>> 5f298092a57cc7b6dc70c52f43496a3487d41e5e
            </div>
            <div className="md:w-1/2 z-1 ">
              <Lottie animationData={HomeLottie} />
            </div>
          </div>
        </div>
      </div>
      <HomeCard />
    </motion.section>
  );
}

export default Home;
