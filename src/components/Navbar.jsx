import { useEffect, useState } from "react"

function Navbar({ addTaskToggle, addTaskToggleFunc, toggleTrigger }) {
    const [typedData, setTypedData] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const intakeData = {
            id: new Date().getTime(),
            text: typedData
        }
        if (localStorage.reactTask === ''){
            localStorage.setItem('reactTask', JSON.stringify([intakeData]))
        }
        else {
            localStorage.setItem('reactTask', JSON.stringify([...JSON.parse(localStorage.reactTask), intakeData]))
        }
        setTypedData('')
        return toggleTrigger()
    }

    return (
        <>
            <nav className='flex items-center justify-between p-3'>
                <div id='page-title'>
                    <p className='text-3xl font-bold'>Todo List</p>
                </div>
                <div id='links'>
                    { addTaskToggle ? (
                        <button onClick={addTaskToggleFunc} className='border-white border rounded-md px-3 py-1 bg-red-500 hover:bg-red-600 duration-75 text-white'>Close</button>
                    ) : (
                        <button onClick={addTaskToggleFunc} className='border-white border rounded-md px-3 py-1 bg-orange-500 hover:bg-orange-600 duration-75 text-white'>Add</button>
                    )}
                </div>
            </nav>
            { addTaskToggle && (
                <div className='py-2 px-7'>
                    <h1 className='text-lg'>Add todo:</h1>
                    <form className='flex flex-col mx-2 py-2' onSubmit={handleSubmit}>
                        <label className='py-1'>Todo:</label>
                        <input type="text" onChange={(e) => setTypedData(e.target.value)} value={typedData} className='outline-0 border border-gray-400 py-1 px-3 rounded' />
                        <button className='bg-green-500 hover:bg-green-600 duration-150 text-white w-fit m-auto px-3 py-1 rounded mt-2'>Add</button>
                    </form>
                </div>
            )}
            
        </>
    )
}

export default Navbar