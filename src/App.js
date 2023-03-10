import circle from "./photo/Group 1.svg"
import './App.css';
import arrow from "./photo/Arrow 1.svg"
import Tilt from 'react-parallax-tilt';
import { motion, useViewportScroll, useTransform } from "framer-motion";

function App() {

  return (
    <div className="body">

        <h1
            style={{
                zIndex: 11,
        }}
            className="back-page">CREATIVE NEW DESIGN</h1>

     <header className="header">
       <p className="logo">logo</p>
         <div className="links">
             <a href="#">menu</a>
             <a href="#">creative</a>
             <a href="#">contact</a>
         </div>
     </header>

        <div className="main-block-page">

        <div  style={{
            zIndex: 2
        }}
              className="main-page">

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="main-box">
                <motion.h1 >CREATIVE NEW DESIGN</motion.h1>
                <Tilt>
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileTap={{
                        scale: 0.9
                    }}
                    whileHover={{scale: 1.1}}
                    style={{
                    zIndex: 2,
                    height: 300,
                }
                }
                    src={circle}/>
                </Tilt>
            </motion.div>

        </div>


        <div className="btn-scroll">
            <p className="scr-btn">Scroll Down</p>
            <svg style={{
                margin: "auto"
            }} width="16" height="42" viewBox="0 0 16 42" xmlns="http://www.w3.org/2000/svg">
                <path class="svg" d="M7.29289 41.7071C7.68342 42.0976 8.31658 42.0976 8.70711 41.7071L15.0711 35.3431C15.4616 34.9526 15.4616 34.3195 15.0711 33.9289C14.6805 33.5384 14.0474 33.5384 13.6569 33.9289L8 39.5858L2.34315 33.9289C1.95262 33.5384 1.31946 33.5384 0.928932 33.9289C0.538408 34.3195 0.538408 34.9526 0.928932 35.3431L7.29289 41.7071ZM9 1C9 0.447716 8.55228 0 8 0C7.44772 0 7 0.447716 7 1H9ZM9 41L9 1H7L7 41H9Z" />
            </svg>

        </div>
    </div>
        <div
            style={{height: 700}}
            className="second-page">
       <div
           className="text-secondpage">
           <motion.div
               initial={{ opacity: 0, scale: 0}}
               whileInView={{ opacity: 1, scale: 1 }}
               className="ctrs">
           <h1 className="cr">CREATIVE</h1>
           </motion.div>
           <motion.h1
               style={{
                   zIndex: 2,
               }}
               initial={{ opacity: 0}}
               whileHover={{opacity: 0.5}}
               whileInView={{ opacity: 0.25}}
               className="back-second-page">PAGE</motion.h1>
       </div>
            <motion.div
                initial={{ opacity: 0, scale: 0}}
                whileInView={{ opacity: 1, scale: 1 }}
                className="blocks">

                <motion.div
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.8}}
                    className="block"></motion.div>
                <motion.div whileHover={{scale:1.1}}
                            whileTap={{scale:0.8}}
                            className="block"></motion.div>
                <motion.div whileHover={{scale:1.1}} className="block"></motion.div>
            </motion.div>
        </div>
    <div style={{
        marginTop: 100,
        height: 630
        }}
        className="third-page">
        <motion.h1
            initial={{ opacity: 0, scale: 0}}
            whileInView={{ opacity: 0.1, scale: 1 }}
            className="back-page-third">About.</motion.h1>
          <motion.div
              initial={{ opacity: 0, scale: 0}}
              whileInView={{ opacity: 1, scale: 1 }}
              className="third-page-content">
              <p className="main-content-th-page">about.</p>
              <p className="ds">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </motion.div>
        <div className="footer">
            <svg className="foot" width="33" height="39" viewBox="0 0 43 49"  xmlns="http://www.w3.org/2000/svg">
                <path d="M36.8313 10.3811C36.5037 10.2117 36.1848 10.0261 35.8757 9.82489C34.977 9.23076 34.153 8.53069 33.4215 7.73978C31.5912 5.64557 30.9076 3.52102 30.6559 2.03354H30.666C30.4556 0.798853 30.5426 0 30.5558 0H22.2194V32.2353C22.2194 32.668 22.2194 33.0958 22.2012 33.5185C22.2012 33.5711 22.1961 33.6196 22.1931 33.6762C22.1931 33.6995 22.1931 33.7237 22.188 33.748V33.7662C22.1001 34.9228 21.7294 36.0401 21.1084 37.0198C20.4873 37.9994 19.6351 38.8115 18.6265 39.3845C17.5754 39.9825 16.3866 40.2961 15.1773 40.2946C11.2933 40.2946 8.14538 37.1275 8.14538 33.2161C8.14538 29.3048 11.2933 26.1377 15.1773 26.1377C15.9125 26.137 16.6433 26.2527 17.3423 26.4805L17.3524 17.9924C15.2303 17.7183 13.0743 17.8869 11.0206 18.4877C8.96691 19.0885 7.06 20.1084 5.42018 21.4831C3.98332 22.7315 2.77535 24.2211 1.85062 25.8849C1.49872 26.4916 0.171007 28.9296 0.0102252 32.8865C-0.0908955 35.1324 0.583579 37.4591 0.905143 38.4208V38.441C1.10738 39.0073 1.89107 40.9397 3.16822 42.5688C4.19807 43.8755 5.41481 45.0234 6.77924 45.9755V45.9553L6.79947 45.9755C10.8352 48.7179 15.3098 48.5379 15.3098 48.5379C16.0844 48.5066 18.6791 48.5379 21.6258 47.1415C24.894 45.5933 26.7546 43.2867 26.7546 43.2867C27.9433 41.9085 28.8885 40.3379 29.5496 38.6423C30.304 36.6593 30.5558 34.2809 30.5558 33.3304V16.2289C30.6569 16.2895 32.0038 17.1804 32.0038 17.1804C32.0038 17.1804 33.9443 18.4242 36.9719 19.2342C39.1439 19.8106 42.0704 19.9319 42.0704 19.9319V11.6562C41.045 11.7674 38.9629 11.4438 36.8313 10.3811Z"/>
            </svg>
            <svg className="foot" width="33" height="33" viewBox="0 0 43 43"  xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3084 18.9316C26.5945 18.9316 26.2188 21.6362 26.2188 21.6362H31.9847C31.9847 21.6362 32.0223 18.9316 29.3084 18.9316Z" />
                <path d="M16.2271 21.6362H11.1186V26.3316H15.9736C16.7061 26.3128 18.0771 26.1062 18.0771 24.0497C18.0771 21.6081 16.2271 21.6362 16.2271 21.6362Z" />
                <path d="M21.0352 0C9.41888 0 0 9.41888 0 21.0352C0 32.6515 9.41888 42.0704 21.0352 42.0704C32.6515 42.0704 42.0704 32.6515 42.0704 21.0352C42.0704 9.41888 32.6515 0 21.0352 0ZM25.4676 12.9216H32.7078V15.0815H25.4676V12.9216ZM21.8052 24.2656C21.8052 29.6183 16.2271 29.4493 16.2271 29.4493H7.09937V11.8886H16.2271C19.0068 11.8886 21.1948 13.4193 21.1948 16.5652C21.1948 19.7111 18.5185 19.9083 18.5185 19.9083C22.0494 19.9083 21.8052 24.2656 21.8052 24.2656ZM35.3466 23.9745H26.247C26.247 27.233 29.3366 27.0265 29.3366 27.0265C32.2571 27.0265 32.1538 25.1389 32.1538 25.1389H35.2433C35.2433 30.1536 29.2333 29.8061 29.2333 29.8061C22.0306 29.8061 22.4907 23.0917 22.4907 23.0917C22.4907 23.0917 22.4813 16.3492 29.2333 16.3492C36.342 16.3586 35.3466 23.9745 35.3466 23.9745Z" />
                <path d="M17.4667 16.8377C17.4667 15.0159 16.2271 15.0159 16.2271 15.0159H11.1186V18.9318H15.9079C16.7342 18.9318 17.4667 18.6595 17.4667 16.8377Z" />
            </svg>
            <svg className="foot" width="33" height="33" viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.9508 3.50555C32.2734 3.51249 34.4988 4.4382 36.1411 6.0805C37.7834 7.72281 38.7092 9.94827 38.7161 12.2708V29.7995C38.7092 32.1221 37.7834 34.3475 36.1411 35.9899C34.4988 37.6322 32.2734 38.5579 29.9508 38.5648H12.4221C10.0995 38.5579 7.87409 37.6322 6.23178 35.9899C4.58948 34.3475 3.66377 32.1221 3.65683 29.7995V12.2708C3.66377 9.94827 4.58948 7.72281 6.23178 6.0805C7.87409 4.4382 10.0995 3.51249 12.4221 3.50555H29.9508ZM29.9508 0H12.4221C5.67301 0 0.151279 5.52173 0.151279 12.2708V29.7995C0.151279 36.5486 5.67301 42.0704 12.4221 42.0704H29.9508C36.6999 42.0704 42.2216 36.5486 42.2216 29.7995V12.2708C42.2216 5.52173 36.6999 0 29.9508 0Z" />
                <path d="M32.5802 12.2708C32.0602 12.2708 31.5518 12.1165 31.1194 11.8276C30.687 11.5387 30.35 11.128 30.151 10.6476C29.9519 10.1671 29.8999 9.63845 30.0013 9.12839C30.1028 8.61834 30.3532 8.14982 30.7209 7.7821C31.0887 7.41437 31.5572 7.16394 32.0672 7.06249C32.5773 6.96103 33.106 7.0131 33.5864 7.21212C34.0669 7.41113 34.4775 7.74814 34.7665 8.18055C35.0554 8.61295 35.2096 9.12132 35.2096 9.64136C35.2103 9.98687 35.1428 10.3291 35.011 10.6485C34.8791 10.9678 34.6854 11.258 34.4411 11.5023C34.1968 11.7466 33.9067 11.9402 33.5873 12.0721C33.268 12.204 32.9257 12.2715 32.5802 12.2708Z"/>
                <path d="M21.1865 14.0231C22.5733 14.0231 23.929 14.4344 25.0821 15.2049C26.2353 15.9754 27.134 17.0705 27.6647 18.3518C28.1955 19.6331 28.3343 21.0429 28.0638 22.4031C27.7932 23.7634 27.1254 25.0128 26.1447 25.9934C25.1641 26.9741 23.9146 27.6419 22.5544 27.9125C21.1942 28.183 19.7844 28.0442 18.5031 27.5135C17.2218 26.9827 16.1267 26.084 15.3562 24.9309C14.5857 23.7777 14.1744 22.422 14.1744 21.0352C14.1764 19.1761 14.9158 17.3937 16.2304 16.0791C17.545 14.7645 19.3274 14.0251 21.1865 14.0231ZM21.1865 10.5176C19.1063 10.5176 17.0728 11.1344 15.3432 12.2901C13.6136 13.4458 12.2655 15.0884 11.4695 17.0103C10.6734 18.9321 10.4651 21.0468 10.871 23.0871C11.2768 25.1273 12.2785 27.0013 13.7494 28.4722C15.2203 29.9431 17.0944 30.9448 19.1346 31.3507C21.1748 31.7565 23.2895 31.5482 25.2114 30.7522C27.1332 29.9561 28.7758 28.608 29.9315 26.8784C31.0872 25.1488 31.7041 23.1154 31.7041 21.0352C31.7041 18.2457 30.596 15.5705 28.6235 13.5981C26.6511 11.6257 23.9759 10.5176 21.1865 10.5176Z" />
            </svg>


        </div>
    </div>
    </div>
  );
}

export default App;
