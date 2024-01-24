import React from 'react'
import styles from './style.module.css'
import Img from '../../assets/images/pexels-lood-goosen-1249632.jpg'
import PalletImages from '../../components/PalletImages'
const Home = () => {
    const showCaseImg = [
        {
            id: 1,
            img: Img
        },
        {
            id: 2,
            img: Img
        },
        {
            id: 3,
            img: Img
        },
        {
            id: 4,
            img: Img
        },
    ]
    return (
        <section className={styles.showCasesSection}>
            <div className={`container ${styles.showCaseContainer}`}>
                <div className={`${styles.showCasesSection} row`}>
                    <div className={`col-xl-12 col-lg-12 col-md-12 col-sm-12`}>
                        <div className={`${styles.showCaseHeader}`}>
                            <p className={`${styles.secHeading}`}>
                                SHOW CASES
                            </p>
                            <p className={`${styles.secTitle}`}>GET A MEDICAL PROCEDURE<br />IN SAFE HAND</p>
                            <p className={`${styles.secDesc}`}>
                                And in the same time get your trip while you are taking your produce
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomSide}>
                <PalletImages showCaseImg={showCaseImg}/>
                </div>
            </div>
        </section>
        
    )
}

export default Home