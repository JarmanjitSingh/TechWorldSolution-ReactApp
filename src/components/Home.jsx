import React from "react";
import animatedimg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai"

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechWorld</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={animatedimg} alt="graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
        <h1>Who we are? </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          dignissimos optio omnis aperiam cumque mollitia! Sunt deserunt et ipsa
          molestiae reprehenderit animi sequi similique enim cumque error
          labore, fuga non inventore, ratione dignissimos. Quae dolor obcaecati
          sint odio, minima eaque incidunt iste quos molestiae quod explicabo
          amet quis aspernatur nam reiciendis libero! Voluptate facere ab
          debitis eligendi alias ex possimus esse veritatis qui inventore
          pariatur accusantium animi et iste explicabo recusandae modi dolorum
          porro sapiente rem libero dignissimos, corrupti commodi perferendis!
          Exercitationem nemo dolore, libero accusantium repellendus delectus
          magni sed minima consequuntur, nesciunt eligendi natus! Maiores
        </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{animationDelay: "0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay: "0.7s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay: "0.9s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
}

export default Home;
