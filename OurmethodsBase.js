

import Image from "next/image";
import styles from "./style.module.css";
const OurmethodsBase = ({ t, lng }) => {
    const styling = {
        backgroundImage: "url('/assets/Ourmethods/bg.svg')",
        width: "100%",
        height: "100%"
    }

    return (
        <>
            <div className={styles.container}>


                <div className={styles.containerTitle}><p className={styles.title}>Our methods</p></div>


                <div className={styles.blocImg}>
                    <div className={styles.icons} style={{ margin: "130px 22px 0px 96px " }}>

                        <Image
                            src="/assets/Ourmethods/PlanAndDiscuss.png"
                            width={60}
                            height={60}
                            alt="discuss"
                            className={styles.img}
                        />
                        <p>Plan and discuss</p>
                        <span className={styles.paragraphe}>The initial phase of a project begins with
                            strategic planning to establish desired goals,
                            reduce risk, avoid deadlines and deliver the
                            agreed product, service or solution</span>

                    </div>
                    <div className={styles.icons} style={{ marginTop: "147px" }}>
                        <Image
                            src="/assets/Ourmethods/ConstructionConcepts.png"
                            width={60}
                            height={60}
                            alt="discuss"
                        />
                        <p>Construction concepts</p>
                        <span className={styles.paragraphe}>Building construction is the foundation for any project as it
                            demonstrates the overall design objective and provides
                            direction to everyone on the project team. We have a clear and
                            cohesive design approach that simplifies the project delivery
                            process </span>
                    </div>
                    <div className={styles.icons} style={{ marginTop: "53px" }}>
                        <Image
                            src="/assets/Ourmethods/StartProduction.png"
                            width={60}
                            height={60}
                            alt="discuss"
                        />
                        <p>Start production</p>
                        <span className={styles.paragraphe}>As we move forward with the project, we begin the execution
                            phase, which consists of creating a timeline, assigning tasks to
                            teams, defining the scope, and developing technical
                            specifications</span>
                    </div>
                    <div className={styles.icons} style={{ marginTop: "-95px ", marginRight: "114px" }}>
                        <Image
                            src="/assets/Ourmethods/ProjectDelivery.png"
                            width={60}
                            height={60}
                            alt="discuss"
                        />
                        <p>Project delivery</p>
                        <span className={styles.paragraphe}>We deliver to the customer what is promised during the project
                            life cycle after proper planning, design and implementation of
                            the project. This guarantees the authenticity and efficiency of
                            the assigned projects.</span>
                    </div>


                </div>
                <div style={{ position: "relative" }}>

                    <Image
                        src="/assets/Ourmethods/bg.png"

                        className={styles.imgbg}
                        width={1000}
                        height={1000}
                        alt="pattern"
                        quality={100}

                        style={{ width: "100vw" }}

                    />
                </div>
                <div className={styles.blocBg}>
                    <p className={styles.bgtitle}>  Our Price</p>
                    <p className={styles.bgparagraphe}>A thoughtful plan for every business</p>
                    <div className={styles.bloc} >


                        <div className={styles.bloc1}>
                            <div>
                                <p className={styles.titleB1}>Sixth package</p>
                                <p className={styles.SuTB1}>6000 <span >DHA</span></p>
                                <p className={styles.paragrapheB1}>e-commece or e-real estate
                                    custom design and uniqe
                                    visual identity
                                    hight performance 100%
                                    seo and best practice 100%
                                    dashboard for add, edit
                                </p>
                                <button className={styles.btn1} >Start A Trial</button>
                            </div>
                        </div>
                        <div className={styles.bloc2}>
                            <div>
                                <p className={styles.titleB2}>First package</p>
                                <p className={styles.SuTB2}>1000 <span >DHA</span></p>
                                <p className={styles.paragrapheB2}>
                                    website   &nbsp;    &nbsp;    &nbsp;  &nbsp;    &nbsp;    &nbsp;    &nbsp; &nbsp;    &nbsp;    &nbsp;    &nbsp;   &nbsp;              : one page
                                    Contact form
                                    <span> easy to find</span>    in google
                                    <span> suitable</span>  for phone, tablets
                                    and desktops.
                                </p>
                                <button className={styles.btn2} >Start A Trial</button>
                            </div>
                        </div>
                        <div className={styles.bloc1}>
                            <div>
                                <p className={styles.titleB1}>The second package</p>
                                <p className={styles.SuTB1}>2000 <span >DHA</span></p>
                                <p className={styles.paragrapheB1}>
                                    website  &nbsp;    &nbsp;    &nbsp;  &nbsp;    &nbsp;       &nbsp;    &nbsp;    &nbsp;   &nbsp;      : up to 5 pages
                                    Home page banner
                                    Contact forms
                                    Extensive menus
                                    Hight performance 100%...
                                    easy to find in google
                                </p>
                                <button className={styles.btn1} >Start A Trial</button>
                            </div>
                        </div>

                    </div>
                </div>





            </div>


        </>
    )
}

export default OurmethodsBase