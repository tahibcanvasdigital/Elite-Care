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

// import React from 'react';
// import styles from './style.module.css'; // Import your custom styles

// const Navbar = () => {
//   const externalImage =
//     'https://images.pexels.com/photos/14020153/pexels-photo-14020153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
//   const imgStyle = {
//     backgroundImage: `url(${externalImage})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     height: '500px',
//     backgroundBlendMode: 'overlay',
//     backgroundColor: 'rgba(0,0,0,.7)',
//   };

//   return (
//     <section style={imgStyle}>
//       <nav className={`navbar navbar-expand-md ${styles.customNavbar}`}>
//         <div className="container-fluid">
//           {/* Customize the logo */}
//           <a className={`navbar-brand ${styles.logo}`} href="#">
//             Navbar Logo
//           </a>

//           {/* Navbar toggle button for mobile */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar content */}
//           <div className={`collapse navbar-collapse ${styles.customNavContent}`} id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto">
//               {/* Customize your navigation items */}
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Link
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Dropdown
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Action
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Another action
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Something else here
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" aria-disabled="true">
//                   Disabled
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default Navbar;
