import React, { useState } from 'react'

const AppointmentForm = ({ onNewAppointment }) => {
  const [ownerName, setOwnerName] = useState('')
  const [petName, setPetName] = useState('')
  const [appDate, setAppDate] = useState('')
  const [appTime, setAppTime] = useState('')
  const [appNote, setAppNote] = useState('')
    
  const handleSubmit = (e) => {
    e.preventDefault()
        setOwnerName('')
        setPetName('')
        setAppDate('')
        setAppTime('')
        setAppNote('')     
    const newAppointment = {
      petName: petName,
      ownerName: ownerName,
      aptNotes: appNote,
      aptDate: `${appDate} ${appTime} `,
    }
    
    onNewAppointment(newAppointment)
       
  }

  return (
    <>
      <form className='ui form mt-20' onSubmit={handleSubmit}>
        <div className='field'>
          <label>Owner Name</label>
          <input
            type='text'
            name='owner-name'
            placeholder='Owner Name'
            onChange={(e) => setOwnerName(e.target.value)}
            // required='true'
          />
        </div>
        <div className='field'>
          <label>Pet Name</label>
          <input
            type='text'
            name='pet-name'
            placeholder='Pet Name'
            onChange={(e) => setPetName(e.target.value)}
            // required='true'
          />
        </div>
        <div className='field'>
          <label>Apt Date</label>
          <input
            type='date'
            name='apt-date'
            placeholder='Appointment Date'
            onChange={(e) => setAppDate(e.target.value)}
            // required='true'
          />
        </div>
        <div className='field'>
          <label>Apt Time</label>
          <input
            type='time'
            name='apt-time'
            placeholder='Appointment Time'
            onChange={(e) => setAppTime(e.target.value)}
            // required='true'
          />
        </div>
        <div className='field'>
          <label>Apt Notes</label>
          <textarea rows='2' onChange={(e) => setAppNote(e.target.value)}
          // required='true'
          placeholder='Appointment Notes'
          />
        </div>
        <button 
          className='ui primary button' 
          type='submit'   
        >
          Submit
        </button>
        <p>*All fields are required</p>
      </form>
    </>
  )
}

export default AppointmentForm
