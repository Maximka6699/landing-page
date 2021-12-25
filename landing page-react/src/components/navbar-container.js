import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navbar-container.module.css'

const NavbarContainer = (props) => {
  return (
    <div className={styles['Navbar-container']}>
      <div className={styles['Navbar']}>
        <div className={styles['Left-side']}>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className={styles['image']}
          />
          <div className={styles['Burger-menu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div className={styles['Links-container']}>
            <a
              href="#inspiration"
              className={` ${styles['Link']} ${projectStyles['anchor']} `}
            >
              {props.Link}
            </a>
            <a
              href="#process"
              className={` ${styles['Link1']} ${projectStyles['anchor']} `}
            >
              {props.Link1}
            </a>
            <a href="#team" className={styles['Link2']}>
              <span>Наш коллектив</span>
            </a>
          </div>
        </div>
        <div className={styles['Right-side']}>
          <a
            href="#get"
            className={` ${styles['Cta-btn']} ${projectStyles['anchor']} ${projectStyles['button']} `}
          >
            {props.Cta - btn}
          </a>
        </div>
      </div>
    </div>
  )
}

NavbarContainer.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1640351960764-efb8d0850ae9?ixid=Mnw5MTMyMXwwfDF8YWxsfDM4fHx8fHx8Mnx8MTY0MDM5MjU1MQ&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  'Cta-btn': 'заказать сейчас!',
  Link: 'всё о заказах',
  Link1: 'портфолио',
}

NavbarContainer.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  'Cta-btn': PropTypes.string,
  Link: PropTypes.string,
  Link1: PropTypes.string,
}

export default NavbarContainer
