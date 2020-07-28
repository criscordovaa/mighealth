import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const ContactPage = () => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const nameValidate = name != null && name.length > 0;
  const emailValidate = email != null && email.length > 0;
  return (
    <Layout pageHeaderText={"Contact"}>
      <Seo title={"Contact"}/>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={e => e.preventDefault()} noValidate>
            <div className="form-group">
              <label htmlFor="name">Your Name (required)</label>
              <input type="text" value={name} className={`form-control ${(name != null && name.length == 0) ? "is-invalid" : ""}`} id="name" onChange={(e) => {
                setName(e.target.value);
              }}/>
              <div className="invalid-feedback">
                Please provide a name.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email (required)</label>
              <input value={email} type="text" className={`form-control ${(email != null && email.length ==0) ? "is-invalid" : ""}`} id="email" onChange={(e) => {
                setEmail(e.target.value)
              }}/>
              <div className="invalid-feedback">
                Please provide a email.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>

            <button disabled={(!nameValidate || !emailValidate)} type="submit" className="btn btn-primary mb-2">Send</button>

          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
