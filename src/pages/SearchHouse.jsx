import AnimatedButton from '../components/AnimatedButton'
import syncIcon from '/sync-icon.svg'
export default function SearchHouse() {
  const data = [
    {
    "House Id" : " APS1736",
    "House No" : 1736,
    "Name" : "Kush Aggarwal"
  },
    {
    "House Id" : " APS1736",
    "House No" : 1736,
    "Name" : "Kush Aggarwal"
  },
    {
    "House Id" : " APS1736",
    "House No" : 1736,
    "Name" : "Kush Aggarwal"
  },
]
  return (
    <div className="bg-mid_gray p-6 min-[800px]:px-20">
       <div className="p-4 text-center">
            <input type="text" placeholder="Enter House No." className="rounded-full bg-white p-2 px-4 w-2/5 placeholder:text-black border border-black" />
       </div>
       <AnimatedButton text="SEARCH"/>


       <div className='bg-white rounded-t-3xl rounded mt-4'>
        <div className="flex justify-between items-center  p-4 border-b border-gray-500">
          <p>Previous Search</p>
          <button className='flex items-center bg-primary text-white p-2'><p>Sync Now</p><img src={syncIcon} alt="sync-icon" /></button>
        </div>
       </div>
    </div>
  )
}
