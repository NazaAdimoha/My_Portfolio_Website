import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import ScoreCard from '../../public/assets/projects/scorecardImgs.jpg';
import BuyConnect from '../../public/assets/projects/buyconnect.jpg';
import TraderaXpress from '../../public/assets/projects/tradexpress.jpg';
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
          <ProjectItem title="ScoreCard" backgroundImg={ScoreCard} projectUrl="/scoreCard" />
          <ProjectItem title="BuyConnect" backgroundImg={BuyConnect} projectUrl="/buyConnect" />
          <ProjectItem title="TraderaXpress" backgroundImg={TraderaXpress} projectUrl="/traderaxpress" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsComponent