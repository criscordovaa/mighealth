import React from "react"
import PropTypes from 'prop-types';

const PageHeader = (showText,text) => {
  return (
    <div className="container-fluid page-title">
he
    </div>
  )
}

PageHeader.propTypes = {
  showText: PropTypes.bool,
  text: PropTypes.string
}

PageHeader.defaultProps = {
  showText: false,
  text: ''
}

export default PageHeader
