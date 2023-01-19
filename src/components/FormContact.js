import React from "react";
import { Link } from "react-router-dom";

const FormContact = () => {
  return (
    <div className="form-wrap">
      <form
        id="survey-form"
        action="https://formsubmit.io/send/ad6413fc-647a-4f34-bda9-b977f0ed84a6"
        method="POST"
      >
        <input
          name="_redirect"
          type="hidden"
          id="name"
          value="http://artsuit.com/"
        />

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label id="name-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label id="phone-label" htmlFor="phone">
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label id="email-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Activity</label>
              <select
                id="dropdown"
                name="Activity"
                className="form-control"
                required
              >
                <option disabled defaultValue value>
                  Select
                </option>
                <option value="Supermarket">Restaurant</option>
                <option value="Supermarket">Supermarket</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Leave Message</label>
                <textarea
                  id="comments"
                  className="form-control"
                  name="comment"
                  placeholder="Enter your comment here..."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <button type="submit" id="submit" className="btn5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
