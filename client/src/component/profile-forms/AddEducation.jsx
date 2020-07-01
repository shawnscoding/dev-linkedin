import React from "react";
import PropTypes from "prop-types";
import { addEducation } from "./../../actions/profile";
import { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = React.useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <React.Fragment>
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school or bootcamp that
        you have attended
      </p>
      <small>* = required field</small>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
        className="form"
      >
        <div className="form-group">
          <input
            type="text"
            value={school}
            onChange={(e) => onChange(e)}
            placeholder="* School or Bootcamp"
            name="school"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={degree}
            onChange={(e) => onChange(e)}
            placeholder="* degree or certificate"
            name="degree"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
            placeholder="Field of Study"
            name="fieldofstudy"
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            value={from}
            onChange={(e) => onChange(e)}
            name="from"
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              value={current}
              checked={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              name="current"
              value=""
            />{" "}
            Current School
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
            name="to"
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            value={description}
            onChange={(e) => onChange(e)}
            placeholder="Program Description"
          ></textarea>
        </div>
        <input
          onChange={(e) => onChange(e)}
          type="submit"
          className="btn btn-primary my-1"
        />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </React.Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
