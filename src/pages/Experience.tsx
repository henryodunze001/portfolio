import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import experiences from "../utils/experience";
import clsx from "clsx";

const sectionVariants = {
  initial: { opacity: 0.9, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeInOut" },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 1 },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

export default function Experience() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / totalHeight) * 2000; // adjust max height if needed
      setScrollHeight(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section variants={sectionVariants} exit="exit">
      <div className="py-7 md:px-17">
        <div className="text-left pt-20 md:pt-36 md:pb-8">
          <div>
            <motion.h1
              className="px-2 md:px-5 text-2xl md:text-4xl text-center"
              initial={{ translateY: "-100px" }}
              animate={{ translateY: "0px" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Professional{" "}
              <strong className="text-primary-foreground">Experience</strong>
            </motion.h1>
          </div>

          <div className="relative mt-5 md:mt-12">
            {/* Dynamic timeline line */}
            <div
              className={clsx(
                "absolute left-2 md:left-4 top-0 border-l-2 md:border-l-4 border-gray-300 opacity-50",
              )}
              style={{
                height: `${scrollHeight}px`,
                transition: "height 0.1s ease-out",
              }}
            ></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover="hover"
                whileTap="tap"
                exit="exit"
                className="timeline-item w-full px-4 md:px-12 mb-10 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0.5 md:left-1.5 -top-3 w-6 h-6 rounded-full bg-secondary"></div>

                <div className="px-3 md:px-5 my-10 md:my-20">
                  <h2 className="font-bold text-2xl md:text-4xl my-2">
                    {experience.company}
                  </h2>
                  <h6 className="my-2">
                    {experience.position} | {experience.date}
                  </h6>
                  <hr className="my-3 border-gray-300 border-t-3 opacity-25" />
                  <ul className="p-0 font-extralight md:font-light text-sm md:text-lg text-left list-disc">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="mb-2">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
          <motion.div variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }}  whileHover="hover" whileTap="tap" exit="exit">
            <div className="p-5 my-10 text-white bg-transparent h-full transition-all duration-500 ease-linear shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)]">
              <div>
                <h2 className="font-bold text-2xl md:text-4xl my-2">SPIRITAN PRESS</h2>
                <h6 className="my-2 max-md:text-md">Full-stack Developer Sept 2025 - Oct 2025</h6>
                <hr className="my-3 border-gray-300 border-t-3 opacity-25"/>
                <ul className="p-0 font-extralight md:font-light text-sm md:text-lg text-left list-disc">
                  <li>Complete detailed programming and development tasks for front-end as well as challenging back-end servercode.                </li>
                  <li>Completed several small tasks with deadlines, which let me adapt to working under a tight deadline and learnhow to divide/prioritize tasks</li>
                  <li>Designed and implemented mobile-first, user-friendly UI designs for responsible and accessible websites</li>
                  <li>Orchestrate efficient large-scale software deployments, including testing features and correcting code.</li>
                  <li>Propose improvements to code organization to improve code quality and overall performance.</li>
                  <li>Meet with the project manager and team members to provide detailed project reports and milestone updates</li>
              </ul>
              </div>
            </div>
          </motion.div>
          {/* <motion.div variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }}  whileHover="hover" whileTap="tap" exit="exit">
            <div className="p-5 my-10 text-white bg-transparent h-full opacity-90 transition-all duration-500 ease-linear shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)]">
              <div>
                <h2 className="font-bold text-2xl md:text-4xl my-2">BIRITU DIGITAL SAVING AND COOP</h2>
                <h6 className="my-2">Software Developer Sep 2024 - Feb2025</h6>
                <hr className="my-3 border-gray-300 border-t-3 opacity-25"/>
                <ul className="p-0 font-extralight md:font-light text-sm md:text-lg text-left list-disc">
                  <li>Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.</li>
                  <li>Involved in all phases of the Software Development Life Cycle, including user interface, API development, deployment, and mobile application development</li>
                  <li>Develop an easy-to-use and optimized administration dashboard for administrators.</li>
                  <li>Provided a documented API for the mobile application team to use.</li>
                  <li> Completed several small tasks with deadlines which let me adapt to working under a tight deadline and how todivide/prioritize tasks</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }}   whileHover="hover" whileTap="tap" exit="exit">
            <div className="p-5 my-10 text-white bg-transparent h-full opacity-90 transition-all duration-500 ease-linear shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)]">
              <div>
                <h2 className="font-bold text-2xl md:text-4xl my-2">POOL TAXI</h2>
                <h6 className="my-2">Full-stack Developer Jun 2023 - Sep 2024</h6>
                <hr className="my-3 border-gray-300 border-t-3 opacity-25"/>
                <ul className="p-0 font-extralight md:font-light text-sm md:text-lg text-left list-disc ">
                  <li>Built integrations for appropriate map services, SMS services, and payment systems.</li>
                  <li>Coached junior developers and interns.</li>
                  <li>Wrote easy-to-understand, structured documentation for the open-source community with easy-to-use toolssuch as Postman Collections</li>
                  <li>Worked directly with the headquarters located in Nairobi, Kenya, using remote development technologies</li>
                  <li>Improved product speed and quality by revising and refactoring code written by less experienced developers</li>
                  <li>Orchestrate efficient large-scale software deployments, including testing features and correcting code</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }}   whileHover="hover" whileTap="tap" exit="exit">
            <div className="p-5 my-10 text-white bg-transparent h-full opacity-90 transition-all duration-500 ease-linear shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)]">
              <div>
                <h2 className="font-bold text-2xl md:text-4xl my-2">MADOT SOLUTIONS</h2>
                <h6 className="my-2">Full-stack Developer Dec 2021 - Sep 2022</h6>
                <hr className="my-3 border-gray-300 border-t-3 opacity-25"/>
                <ul className="p-0 font-extralight md:font-light text-sm md:text-lg text-left my-5 list-disc">
                  <li>Led the development and architectural design of a complex web application implementing scalable and maintainable backend architecture</li>
                  <li>Actively contributed to the company’s engineering culture by sharing knowledge, delivering tech talks during weekly dev-team retrospectives, and organizing internal workshops or training sessions</li>
                  <li>Collaborated with cross-functional teams to design, develop, and deploy an app with integrations on various platforms, resulting in a successful launch of the product</li>
                  <li>Contributed to the development of logistics system and health management system, with development, database design, UI improvement, and requirement gathering</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }}   whileHover="hover" whileTap="tap" exit="exit">
            <div className="p-5 my-10 text-white bg-transparent h-full opacity-90 transition-all duration-500 ease-linear shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)]">
              <div>
                <h2 className="font-bold text-2xl md:text-4xl my-2">BOTAYE DATA SCIENCE</h2>
                <h6 className="my-2">Full-stack Developer Aug 2021 - Dec 2021</h6>
                <hr className="my-3 border-gray-300 border-t-3 opacity-25"/>
                <ul className="p-0 font-extralight md:font-light text-sm md:text-lg text-left list-disc">
                  <li>Prepared reports on programming project specifications, activities, or status</li>
                  <li>Conferred with project managers to obtain information on limitations or capabilities</li>
                  <li>Directing software programming and documentation development</li>
                  <li>Implemented UI designs for responsive and accessible websites</li>
                </ul>
              </div>
            </div>
          </motion.div> */}
=======
>>>>>>> 5f298092a57cc7b6dc70c52f43496a3487d41e5e
        </div>
      </div>
    </motion.section>
  );
}
