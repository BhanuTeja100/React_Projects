import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
     <>
     <div className="home" id="home">
        <main>
            <h1>TekhXpert</h1>
            <p>Solution to all your Tech problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
            we are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>



    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>At TekhXpert Solutions, we are a team of passionate tech experts dedicated to solving your technology woes. 
                With years of experience, we possess the know-how to tackle any tech problem, from software glitches to hardware malfunctions. 
                Our user-focused approach ensures personalized solutions tailored to your unique needs. 
                We believe in prompt and reliable support to get you back on track swiftly. 
                As technology evolves, so do we - providing cutting-edge resolutions for a seamless digital experience. 
                Our services encompass software troubleshooting, hardware diagnostics, network solutions, data recovery, and tech consultations. 
                Let us be your ultimate tech problem-solving partner - together, we'll conquer tech challenges and empower you in the digital realm.</p>
        </div>
    </div>


    <div className="home4" id="brands">
        <div>
            <h1>
                Brands 
            </h1>

            <article>
                <div style={{
                    animationDelay:"0.3s"
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay:"0.5s"
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay:"0.7s"
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay:"1s"
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
     </>
  )
}

export default Home