import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarContainer from '../components/navbar-container'
import GetInTouch from '../components/get-in-touch'
import FooterContainer from '../components/footer-container'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>My landing</title>
        <meta property="og:title" content="My landing" />
      </Helmet>
      <NavbarContainer></NavbarContainer>
      <div id="resources" className={styles['Hero']}>
        <div className={styles['Content-container']}>
          <div className={styles['Hero-text']}>
            <h1
              className={` ${styles['Heading']} ${projectStyles['section-Heading']} `}
            >
              Ваша проблема - наше решение!
            </h1>
            <span
              className={` ${styles['Text']} ${projectStyles['section-Text']} `}
            >
              <span>
                Дизайн - это основа всего и чем он лучше, тем успешнее будет ваш
                товар!\
              </span>
              <br></br>
              <span>
                Наша задача сделать ваш продукт максимально узнаваемым и
                запоминающимся, подчеркнуть его уникальность и лучшие стороны.
              </span>
            </span>
            <a
              href="#get"
              className={` ${styles['Cta-btn']} ${projectStyles['anchor']} ${projectStyles['button']} `}
            >
              заказать сейчас
            </a>
          </div>
        </div>
      </div>
      <div id="inspiration" className={styles['Features']}>
        <div className={styles['Heading-container']}>
          <h2
            className={` ${styles['text04']} ${projectStyles['section-Heading']} `}
          >
            Всё о заказах.
          </h2>
        </div>
        <div className={styles['Cards-container']}>
          <div className={styles['Features-card']}>
            <div className={styles['Icon-container']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className={styles['Text-container']}>
              <span
                className={` ${styles['Heading1']} ${projectStyles['card-Heading']} `}
              >
                Творческое задание
              </span>
              <span
                className={` ${styles['text05']} ${projectStyles['card-Text']} `}
              >
                Творческое задание это основа вашего заказа! Здесь вы должны
                указать что хотите, какой ждете результат и другую
                вспомогательную информацию.
              </span>
            </div>
          </div>
          <div className={styles['Features-card1']}>
            <div className={styles['Icon-container1']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon03']}>
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className={styles['Text-container1']}>
              <span
                className={` ${styles['Heading2']} ${projectStyles['card-Heading']} `}
              >
                Процесс работы
              </span>
              <span
                className={` ${styles['text06']} ${projectStyles['card-Text']} `}
              >
                Сразу после получения ТЗ начинается основная работа: подбор
                материалов, поиск фактов и сопутсвующей информации, а самое
                главное ИДЕЯ, то что выделит ваш продукт среди множества
                подобных.
              </span>
            </div>
          </div>
          <div className={styles['Features-card2']}>
            <div className={styles['Icon-container2']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className={styles['Text-container2']}>
              <span
                className={` ${styles['Heading3']} ${projectStyles['card-Heading']} `}
              >
                Обратная связь
              </span>
              <span
                className={` ${styles['text07']} ${projectStyles['card-Text']} `}
              >
                <span>
                  Во время процесса работы вы можете беспрепятственно общаться с
                  дизайнером, обсуждать идеи и решения, а так же узнавать о ходе
                  работ.
                </span>
                <br></br>
                <span>
                  Общаясь с дизайнером, вы должны соблюдать правила приличия.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="process" className={styles['Services']}>
        <div className={styles['Heading-container1']}>
          <h1
            className={` ${styles['text11']} ${projectStyles['section-Heading']} `}
          >
            <span>Портфолио</span>
            <br></br>
            <span>Примеры работ</span>
          </h1>
          <span
            className={` ${styles['text15']} ${projectStyles['section-Text']} `}
          >
            Красота в простоте.
          </span>
        </div>
        <div className={styles['Cards-container1']}>
          <div className={styles['Service-card']}>
            <h3
              className={` ${styles['text16']} ${projectStyles['card-Heading']} `}
            >
              3д работы
            </h3>
            <span
              className={` ${styles['text17']} ${projectStyles['card-Text']} `}
            >
              Это направление поразит вас с первого взгляда. А мы прокачаем ваш
              товар в этом стиле.
            </span>
            <span className={` ${styles['Link']} ${projectStyles['anchor']} `}>
              {' '}
              узнать больше
            </span>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixid=Mnw5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjQwMzg5NjM1&amp;ixlib=rb-1.2.1&amp;w=800"
              className={styles['image']}
            />
          </div>
          <div className={styles['Service-card1']}>
            <h3
              className={` ${styles['text18']} ${projectStyles['card-Heading']} `}
            >
              Обработка фото
            </h3>
            <span
              className={` ${styles['text19']} ${projectStyles['card-Text']} `}
            >
              Цветокоррекция фотоманипуляции и многое другое. Мы сделаем ваше
              фото идеальным!
            </span>
            <span className={` ${styles['Link1']} ${projectStyles['anchor']} `}>
              {' '}
              Узнать Больше
            </span>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1640362998508-4b8a34d5d319?ixid=Mnw5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY0MDM4OTYzNQ&amp;ixlib=rb-1.2.1&amp;w=800"
              className={styles['image1']}
            />
          </div>
          <div className={styles['Service-card2']}>
            <h3
              className={` ${styles['text20']} ${projectStyles['card-Heading']} `}
            >
              Арты
            </h3>
            <span
              className={` ${styles['text21']} ${projectStyles['card-Text']} `}
            >
              Экспрессивное уличное направление искусство, которое подчеркнет
              вашу уникальность.
            </span>
            <span className={` ${styles['Link2']} ${projectStyles['anchor']} `}>
              {' '}
              Узнать Больше
            </span>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM1fHxhcnR8ZW58MHx8fHwxNjQwMzkwMDU2&amp;ixlib=rb-1.2.1&amp;w=200"
              className={styles['image2']}
            />
          </div>
        </div>
      </div>
      <div className={styles['Section-separator']}></div>
      <div id="team" className={styles['Team']}>
        <div className={styles['Heading-container2']}>
          <h1
            className={` ${styles['text22']} ${projectStyles['section-Heading']} `}
          >
            Наш коллектив
          </h1>
          <span
            className={` ${styles['text23']} ${projectStyles['section-Text']} `}
          >
            Познакомьтесь с нашими дизайнерами, они уж точно помогут!
          </span>
        </div>
        <div className={styles['Cards-container2']}>
          <div className={styles['Team-card']}>
            <div className={styles['Avatar-container']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon09']}>
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span
              className={` ${styles['Name']} ${projectStyles['card-Heading']} `}
            >
              John
            </span>
            <span
              className={` ${styles['Position']} ${projectStyles['card-Text']} `}
            >
              3д работы
            </span>
          </div>
          <div className={styles['Team-card1']}>
            <div className={styles['Avatar-container1']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon11']}>
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span
              className={` ${styles['Name1']} ${projectStyles['card-Heading']} `}
            >
              Megan
            </span>
            <span
              className={` ${styles['Position1']} ${projectStyles['card-Text']} `}
            >
              Фотообработка
            </span>
          </div>
          <div className={styles['Team-card2']}>
            <div className={styles['Avatar-container2']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon13']}>
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span
              className={` ${styles['Name2']} ${projectStyles['card-Heading']} `}
            >
              Alex
            </span>
            <span
              className={` ${styles['Position2']} ${projectStyles['card-Text']} `}
            >
              Manager
            </span>
          </div>
          <div className={styles['Team-card3']}>
            <div className={styles['Avatar-container3']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon15']}>
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span
              className={` ${styles['Name3']} ${projectStyles['card-Heading']} `}
            >
              Sabrina
            </span>
            <span
              className={` ${styles['Position3']} ${projectStyles['card-Text']} `}
            >
              Фотообработка
            </span>
          </div>
          <div className={styles['Team-card4']}>
            <div className={styles['Avatar-container4']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon17']}>
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span
              className={` ${styles['Name4']} ${projectStyles['card-Heading']} `}
            >
              Ben
            </span>
            <span
              className={` ${styles['Position4']} ${projectStyles['card-Text']} `}
            >
              Арты
            </span>
          </div>
        </div>
      </div>
      <div className={styles['Section-separator1']}></div>
      <div className={styles['section-separator2']}></div>
      <GetInTouch></GetInTouch>
      <div className={styles['section-separator3']}></div>
      <FooterContainer></FooterContainer>
    </div>
  )
}

export default Home
