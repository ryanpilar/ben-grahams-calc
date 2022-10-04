import { useState } from "react"

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        // if there is no text, alert:
        if (!text) {
            alert('Please add task')
            return
        }
        else {
        // if no alert is thrown, run onAdd an pass in params
        onAdd({ text, day, reminder })

        // then clear the form
        setText('')
        setDay('')
        setReminder(false)
        }

    }

    return (

        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                {/* value is the text from the state.  e.target.value is anything that we have typed in.*/}
                <input type="text" placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day & Time' value={day} onChange={(e)=>setDay(e.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>

                {/* cyrrentTarget.checked will give us a true/false value */}
                <input type="checkbox" checked={reminder} value={reminder} onChange={ (e) => setReminder(e.currentTarget.checked) }/>
            </div>

            <input type="submit" value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask