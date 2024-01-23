import React from 'react'
import styles from './style.module.css'

const Navbar = () => {

  const externalImage =  'https://images.pexels.com/photos/14020153/pexels-photo-14020153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const imgStyle = {
    backgroundImage: `url(${externalImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '500px',
    backgroundBlendMode:'overlay',
    backgroundColor:'rgba(0,0,0,.7)'
  }

  const upperData = [
    {
      id:1,
      text:"test@test.com"
    },
    {
      id:2,
      text:"090-078601"
    },
    {
      id:3,
      text:"House # X California,USA"
    },
    
  ]

  return (
    <nav style={imgStyle} className={`${styles.navContainer} container-fluid`}>
     <div  className={`${styles.navWrapper} row`}>
      <div className={`col-xl-3 col-lg-3 col-md-2`}>
        <div className={`${styles.leftSide}`}>
          <span>Elite Care</span>
        </div>
      </div>
      <div className={`col-xl-9 col-lg-9 col-md-10`}>
        <div className={styles.rightSide}>
          <div className={styles.upperSide}>
           <p className={styles.email}>Jhondoewilliams@gmail.com</p>
           <p className={styles.phone}>0900-0078601</p>
           <p className={styles.address}>Street # ABC House No 123, California,USA</p>
           <div className={styles.followUs}>
              <p>Follow Us On</p>
              <div className={styles.socialsIcons}>FB  INS  TW</div>
           </div>
           <button className={styles.btn}>BOOK AN APPOINTMENT</button>
          </div>
          <div className={styles.lowerSide}>
          
           <p className={styles.email}>Jhondoewilliams@gmail.com</p>
           <p className={styles.phone}>0900-0078601</p>
           <p className={styles.address}>Street # ABC House No 123, California,USA</p>
           <div className={styles.followUs}>
              <p>Follow Us On</p>
              <div className={styles.socialsIcons}>FB  INS  TW</div>
           </div>
           {/* <button className={styles.btn}>BOOK AN APPOINTMENT</button> */}
          
          </div>
        </div>
      </div>
     </div>
    </nav>
  )
}

export default Navbar