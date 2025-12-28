import React, { useState } from 'react'
import './Contact.css'
import message from '../../assets/msg-icon.png'
import phone from '../../assets/phone-icon.png'
import email from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'
import whitearrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    const formData = new FormData(event.target)
    formData.append("access_key", "533d32b1-9e51-4344-aa5d-1cca02074f01")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={message} alt="" /></h3>
        <p>
          Feel free to reach out through our contact form or find our contact information below.
          Your feedback, questions, and suggestions are welcome.
        </p>
        <ul>
          <li><img src={email} alt="" /> ngangeyongwill@gmail.com</li>
          <li><img src={phone} alt="" /> +237 699999999</li>
          <li><img src={location} alt="" /> Yaounde Cameroon</li>
        </ul>
      </div>

      <div className="contact-row">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone" required />

          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required />

          <button type="submit" className="btn dark-btn">
            Submit now <img src={whitearrow} alt="" />
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
