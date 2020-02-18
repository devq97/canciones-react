import React from "react";
import PropTypes from 'prop-types';

const Error = ({texto}) => {
  return (
    <p className="alert alert-danger text-center p-2">{texto}</p>
  )
};

Error.propTypes = {
  texto: PropTypes.string.isRequired
};

export default Error;