import { useState } from 'react';
import awardBadge from '/award.svg'
import calendarIcon from '/calendar.svg'
export default function AwardsCard({ details }) {
      const [isHovered, setIsHovered] = useState(false);

      return (
        <div
          className="card relative max-h-[500px] bg-transparent max-[480px]:mb-10 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={details.image} alt={details.award_venue} className="card-image w-full h-full object-cover rounded-tl-[50px] rounded-br-[50px]" />
          <div className={`card-overlay absolute bottom-0 left-16 w-3/4 h-20 transition-[height] ease-linear duration-200  ${isHovered && 'h-60'}`}>
          <div className='bg-primary p-3 rounded-t-2xl border-b-2 border-white min-[480px]:text-xl'>
            <div className="flex gap-4">
                  <img src={awardBadge} alt="award-badge" />
                  <p>{details.award_venue}</p>

            </div>
            <div className="flex gap-4">
                  <img src={calendarIcon} alt="calendar-icon" />
                  <p>{details.date}</p>
            </div>
          </div>
          <div className='p-3  bg-secondary text-white'>
            <p>{details.description}</p>
          </div>
          </div>
        </div>
  )
}
