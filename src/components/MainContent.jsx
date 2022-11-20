import React from 'react'

function MainContent({taskList, handleDelete}) {
  return (
    <main className='py-2 px-7'>
    <h1 className='text-lg'>List:</h1>
      <div className='h-[300px] overflow-auto'>
        {
          taskList.length !== 0 ? (
            taskList.map(task => (
              <div className='my-2 p-3 flex flex-row justify-between items-center border border-gray-100 rounded-sm shadow-sm' key={task.id}>
                <div> 
                    <p className='text-md font-bold'>{task.text}</p>
                    <p className='text-xs text-gray-500'>Date</p>
                </div>
                <div>
                    <button
                      className='bg-red-500 hover:bg-red-400 duration-150 text-white py-1 px-2 mr-1 text-sm rounded-md'
                      id={task.id}
                      onClick={handleDelete}
                    >Del</button>
                    <button className='bg-green-500 hover:bg-green-600 duration-150 text-white py-1 px-2 mr-1 text-sm rounded-md'>Edit</button>
                </div>
              </div>
          )
          )) : (
            <div className='h-5/6 flex justify-center items-center'>
              <h1 className='font-bold'>No task</h1>
            </div>
          )
        }
      </div>
      
            
    </main>
  )
}

export default MainContent