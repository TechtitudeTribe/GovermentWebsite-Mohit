import { useContext, useState } from 'react';
import awardBadge from '/award.svg'
import calendarIcon from '/calendar.svg'
import { LanguageContext } from '../contexts/LanguageContext';
/*eslint-disable react/prop-types*/
export default function AwardsCard({ details }) {
      const [isHovered, setIsHovered] = useState(false);
  const{language}= useContext(LanguageContext)
      return (
        <div
          className="card relative max-h-[400px] max-w-[450px] m-auto  bg-transparent  overflow-hidden  rounded-tl-[50px] rounded-br-[50px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={details.image} alt={details.award_venue[language]} className="card-image w-full h-full object-cover" />
          <div className={` absolute bottom-0 left-4  min-[850px]:left-14 w-11/12  min-[1024px]:w-3/4 h-20 transition-[height] ease-linear duration-200  ${isHovered && 'h-auto  min-[1224px]:h-60'}`}>
          <div className='bg-primary p-3 rounded-t-2xl border-b-2 border-white min-[1224px]:text-xl'>
            <div className="flex gap-4">
                  <img src={awardBadge} alt="award-badge" />
                  <p>{details.award_venue[language]}</p>

            </div>
            <div className="flex gap-4">
                  <img src={calendarIcon} alt="calendar-icon" />
                  <p>{details.date[language]}</p>
            </div>
          </div>
          <div className='p-3  bg-secondary text-white'>
            <p>{details.description[language]}</p>
          </div>
          </div>
        </div>
  )
}
