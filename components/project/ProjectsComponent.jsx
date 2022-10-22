import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import ScoreCard from '../../public/assets/projects/scorecardImgs.jpg';
import BuyConnect from '../../public/assets/projects/buyconnect.jpg';
import TraderaXpress from '../../public/assets/projects/tradexpress.jpg';
import ProjectItem from './ProjectItem';

const ProjectsComponent
 = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5] '>My Projects
            </p>
            <h2 className='py-4 '>What I've Built</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <ProjectItem title='ScoreCard' backgroundImg={ScoreCard} projectUrl='/' />
            <ProjectItem title='BuyConnect' backgroundImg={BuyConnect} projectUrl='/' />
            <ProjectItem title='TraderaXpress' backgroundImg={TraderaXpress} projectUrl='/' />
            

            </div>
        </div>

    </div>
  )
}

export default ProjectsComponent
