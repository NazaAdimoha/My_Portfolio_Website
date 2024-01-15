import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import ScoreCard from '../../public/assets/projects/scorecardImgs.jpg';
import BuyConnect from '../../public/assets/projects/buyconnect.jpg';
import TraderaXpress from '../../public/assets/projects/tradexpress.jpg';
import BykeCave from '../../public/assets/projects/Byke_Cave.png';
import UBURU from '../../public/assets/projects/UBURU.png';
import MSIA from '../../public/assets/projects/MSIA.png';
import DropBoxDark from '../../public/assets/projects/dropboxdark.png';
import ProjectItem from './ProjectItem';

const ProjectsComponent = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 50, transition: { duration: 5, ease: 'easeIn' } });
  }, [controls]);

  return (
    <motion.div
      id="projects"
      className="w-full bg-slate-200"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <motion.p
          className="text-2xl font-bold tracking-widest uppercase text-[#5651e5]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }}
        >
          My Projects
        </motion.p>
        <motion.h3
          className="py-4 font-bold text-sm text-gray-800"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } }}
        >
          Projects Worked On
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }}
        >
          <ProjectItem title="Byke_Cave" backgroundImg={BykeCave} projectUrl="/scoreCard" stack="Next JS | Context API | Tailwind | Custom Hooks" />
          <ProjectItem title="Uburu.ai" backgroundImg={UBURU} projectUrl="/buyConnect" stack="React | Redux-Thunk | Styled-Components | StoryBook | Unit Testing | Typescript" />
          <ProjectItem title="MSIA OCCULUS" backgroundImg={MSIA} projectUrl="/traderaxpress" stack="React | Typescript | Tanstack Query | Redux | Context API | Styled Components | Custom Hooks" />
          <ProjectItem title="Dropbox_Cloned" backgroundImg={DropBoxDark} projectUrl="/dropbox" stack="Next Js-14 | Typescript | Clerk | Tailwind CSS | Custom Hooks" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsComponent