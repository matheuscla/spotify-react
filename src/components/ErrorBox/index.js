import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Creators as ErrorActions } from '../../store/ducks/error'

import { Container } from './styles'
import CloseIcon from '../../assets/images/close.svg'

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
  <Container>
    <p>{message}</p>
     <button onClick={hideError}>
      <img src={CloseIcon} alt='Close' />
     </button>
  </Container>
)

ErrorBox.propTypes = ({
  error: PropTypes.shape({
    message: PropTypes.string,
    visible: PropTypes.bool
  }).isRequired,
  hideError: PropTypes.func.isRequired
})

const mapStateToProps = state => ({
  error: state.error
})

export default connect(mapStateToProps, ErrorActions)(ErrorBox)
