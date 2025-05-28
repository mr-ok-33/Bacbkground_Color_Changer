import { useState } from 'react'

function App() {
    const [color, setColor] = useState('#ffffff');

    const getColor = () => {
        const random = '#' + Math.floor(Math.random() * 123456).toString(16);
        setColor(random);
    }

    return (
        <div style={{ backgroundColor: color }} className="bg-red-300 min-w-[380px] w-[100vw] gap-5 h-[100vh] flex flex-col justify-center items-center">
            <button onClick={() => { getColor() }} className='border border-black w-[340px] min-w-[270px] sm:text-[30px] md:text-[35px] md:px-1 sm:px-2 px-3 py-3 rounded-md text-[25px] font-semibold'>Background Color </button>
           <div className=''> 
             <span className='text-[25px] sm:text-[30px] md:text-[35px] font-semibold'> <span className='text-[29px]'>Hex Code</span>  : {color}</span>
           </div>
        </div>

    )
}
export default App

