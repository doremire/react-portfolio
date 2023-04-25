import { useState } from "react";
import "./App.css";
import twemoji from "twemoji";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">doremire</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#" className="hover:text-blue-400 duration-300">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section className="py-20 mx-auto p-10">
        <div className="container mx-auto flex flex-col  items-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            <script
              src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
              crossorigin="anonymous"
            ></script>
            Hi, I'm{" "}
            <span className="text-blue-400">
              doremire
              <twemoji options={{ className: "twemoji" }}>👋</twemoji>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500">
            I'm a full-stack web developer with a passion for building websites
            and applications.
          </p>
          <p className="text-xl my-10 text-gray-500" style={{fontFamily: "LINESeedJP"}}>自宅のサーバーで動かしているよ!!</p>
        </div>
      </section>
    </>
  );
}

export default App;
