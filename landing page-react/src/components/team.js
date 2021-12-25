import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './team.module.css'

const Team = (props) => {
  return (
    <div className={styles['Team']}>
      <div className={styles['Heading-container']}>
        <h1
          className={` ${styles['text']} ${projectStyles['section-Heading']} `}
        >
          {props.heading}
        </h1>
        <span
          className={` ${styles['text1']} ${projectStyles['section-Text']} `}
        >
          {props.text}
        </span>
      </div>
      <div className={styles['Cards-container']}>
        <div className={styles['Team-card']}>
          <div className={styles['Avatar-container']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
          </div>
          <span
            className={` ${styles['Name']} ${projectStyles['card-Heading']} `}
          >
            {props.Name}
          </span>
          <span
            className={` ${styles['Position']} ${projectStyles['card-Text']} `}
          >
            {props.Position}
          </span>
        </div>
        <div className={styles['Team-card1']}>
          <div className={styles['Avatar-container1']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
          </div>
          <span
            className={` ${styles['Name1']} ${projectStyles['card-Heading']} `}
          >
            {props.Name1}
          </span>
          <span
            className={` ${styles['Position1']} ${projectStyles['card-Text']} `}
          >
            {props.Position1}
          </span>
        </div>
        <div className={styles['Team-card2']}>
          <div className={styles['Avatar-container2']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
          </div>
          <span
            className={` ${styles['Name2']} ${projectStyles['card-Heading']} `}
          >
            {props.Name2}
          </span>
          <span
            className={` ${styles['Position2']} ${projectStyles['card-Text']} `}
          >
            {props.Position2}
          </span>
        </div>
        <div className={styles['Team-card3']}>
          <div className={styles['Avatar-container3']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
          </div>
          <span
            className={` ${styles['Name3']} ${projectStyles['card-Heading']} `}
          >
            {props.Name3}
          </span>
          <span
            className={` ${styles['Position3']} ${projectStyles['card-Text']} `}
          >
            {props.Position3}
          </span>
        </div>
        <div className={styles['Team-card4']}>
          <div className={styles['Avatar-container4']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
          </div>
          <span
            className={` ${styles['Name4']} ${projectStyles['card-Heading']} `}
          >
            {props.Name4}
          </span>
          <span
            className={` ${styles['Position4']} ${projectStyles['card-Text']} `}
          >
            {props.Position4}
          </span>
        </div>
      </div>
    </div>
  )
}

Team.defaultProps = {
  Name2: 'Alex',
  Position1: 'Фотообработка',
  Position3: 'Фотообработка',
  Name3: 'Sabrina',
  Position2: 'Manager',
  Position: '3д работы',
  Name4: 'Ben',
  Name: 'John',
  Position4: 'Арты',
  Name1: 'Megan',
  heading: 'Наш коллектив',
  text: 'Познакомьтесь с нашими дизайнерами, они уж точно помогут!',
}

Team.propTypes = {
  Name2: PropTypes.string,
  Position1: PropTypes.string,
  Position3: PropTypes.string,
  Name3: PropTypes.string,
  Position2: PropTypes.string,
  Position: PropTypes.string,
  Name4: PropTypes.string,
  Name: PropTypes.string,
  Position4: PropTypes.string,
  Name1: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Team
