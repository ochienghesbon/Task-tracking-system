import { useState } from 'react'


const AddTask = ({ onAdd, showAddTask }) => {
    
    // Component level states
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add a task');
            return;
        }

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false)
    }


    return (
        <>
            { showAddTask ? 
                <form className='add-form' onSubmit={onSubmit}>
                    <div className='form-control'>
                        <label>Task</label>
                        <input 
                            type='text' 
                            placeholder='Add Task' 
                            value={text} 
                            onChange={(e) => setText(e.target.value)} 
                        />
                    </div>
                    <div className='form-control'>
                        <label>Day & Time</label>
                        <input 
                            type='text' 
                            placeholder='Add Day & Time'
                            value={day} 
                            onChange={(e) => setDay(e.target.value)} 
                        />
                    </div>
                    <div className='form-control form-control-check'>
                        <input 
                            type='checkbox'
                            checked={reminder}
                            value={reminder} 
                            onChange={(e) => setReminder(e.currentTarget.checked)} 
                        />
                        <label>Set Reminder</label>
                    </div>

                    <input type='submit' value='Save Task' className='btn btn-block' />
                </form>
             : '' }
        </>
    )
}

export default AddTask
