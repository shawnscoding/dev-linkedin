import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  exp: { company, from, title, location, current, to, description },
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
      {!to ? " Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <p>
      <strong>Position: </strong> {title}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  exp: PropTypes.object.isRequired,
};

export default ProfileExperience;
