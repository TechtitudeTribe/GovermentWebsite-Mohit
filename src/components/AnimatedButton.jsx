export default function AnimatedButton({text = "Default"}) {
  return (
      <div className="animate-button m-auto mt-6">
      <p className="font-medium">{text}</p>
      <div className="flex justify-center items-center gap-1">

      <p className="font-extrabold text-2xl mb-4">.</p>
      <svg className="right-arrow"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.707,12.707a1,1,0,0,0,0-1.414l-6-6a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-4.293,4.293a1,1,0,0,0,1.414,1.414Z"/></svg>
      </div>
    </div>
  )
}
