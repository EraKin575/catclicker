import React,{useState} from 'react'
import CatShow from './CatShow'



function CatForm() {
    const [catData, setCatData] = useState([
        {
            name:'',
            image:'',
            numberOfClicks:0
        }
    ])


  return (
    <div>
        <div className='flex space-x-8'>
        <CatShow/>
        <div className='w-[350px] h-[400px]'>
            <button
                className='w-[150px] h-[50px] bg-gray-200 rounded-lg shadow-lg'
            >
                Open New Form
            </button>
            <div
            className='space-y-4'
            >
            <div>
            <h1 className='text-left pl-6'>Cat Name</h1>
            <input
                className='w-[300px] h-[50px] bg-gray-200 rounded-lg shadow-lg'
                value={catData.name}
                onChange={(e) => setCatData({ ...catData, name: e.target.value })}

            />
            </div>
            <div>
            <h1 className='text-left pl-6'>Cat Image</h1>
            <input
                type="text"
                className='w-[300px] h-[50px] bg-gray-200 rounded-lg shadow-lg'
                value={catData.image}
                onChange={(e) => setCatData({ ...catData, image: e.target.value })}

            />
            </div>
            <div>
            <h1 className='text-left pl-6'>Cat Clicks</h1>
            <input
                type="text"
                className='w-[300px] h-[50px] bg-gray-200 rounded-lg shadow-lg'
                value={catData.numberOfClicks}
                onChange={(e) => setCatData({ ...catData, numberOfClicks: e.target.value })}

            />
            </div>
            <div className='flex ml-[22px] mt-[15px]'>
            <button
                className='w-[100px] h-[50px] bg-green-400 rounded-lg shadow-lg font-bold'
            >
                Save
            </button>
            <button

                className='w-[100px] h-[50px] bg-red-400 rounded-lg shadow-lg font-bold'
                onClick= {() => setCatData({ ...catData, name: '', image: '', numberOfClicks: 0 })}
            >
                Undo
            </button>

            </div>


        </div>

        </div>
    </div>
    
    </div>
  )
}

export default CatForm