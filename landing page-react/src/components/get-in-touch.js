import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './get-in-touch.module.css'

const GetInTouch = (props) => {
  return (
    <div id="get" className={styles['Get-in-touch']}>
      <h2 className={` ${styles['text']} ${projectStyles['section-Heading']} `}>
        {props.heading}
      </h2>
      <div className={styles['Content-container']}>
        <div className={styles['Form-container']}>
          <span
            className={` ${styles['Heading']} ${projectStyles['bigCard-Heading']} `}
          >
            {props.Heading}
          </span>
          <input
            type="text"
            required="true"
            placeholder={props.Name_placeholder}
            className={` ${styles['Name']} ${projectStyles['input']} `}
          />
          <input
            type="text"
            required="true"
            placeholder={props.Email_placeholder}
            className={` ${styles['Email']} ${projectStyles['input']} `}
          />
          <textarea
            placeholder={props.Message_placeholder}
            className={` ${styles['Message']} ${projectStyles['textarea']} `}
          ></textarea>
          <button
            className={` ${styles['Cta-btn']} ${projectStyles['anchor']} ${projectStyles['button']} `}
          >
            {props.Cta - btn}
          </button>
        </div>
      </div>
    </div>
  )
}

GetInTouch.defaultProps = {
  heading: 'Ждем твоего сообщения',
  Heading: 'Send us a message',
  Name_placeholder: 'Name',
  Email_placeholder: 'E-mail',
  Message_placeholder: 'Your Message',
  'Cta-btn': 'SEND',
}

GetInTouch.propTypes = {
  heading: PropTypes.string,
  Heading: PropTypes.string,
  Name_placeholder: PropTypes.string,
  Email_placeholder: PropTypes.string,
  Message_placeholder: PropTypes.string,
  'Cta-btn': PropTypes.string,
}

export default GetInTouch
