import { use, useState } from 'react'
import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane, FaDownload } from 'react-icons/fa'
import myPhoto from './assets/My_pic.jpg';
import todoApi from './assets/todo-Api.png';
import weather_hub from "./assets/weather-hub.png"
import USU from "./assets/USU-logo.jpeg"
import Blog_API from "./assets/Blog-API.png"
import resumeFile from './assets/1.docx.pdf'
import React, { useRef, useEffect } from "react";
import Pica from "pica";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from 'react-responsive';
import shopFront from "./assets/shop.png"
import galleryFront from "./assets/gallery.png"

function SharpImage({ src, width, height, alt, className }) {
  const [resizedSrc, setResizedSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width * 2;
      canvas.height = height * 2;

      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        x,
        y,
        img.width * scale,
        img.height * scale
      );

      setResizedSrc(canvas.toDataURL("image/png"));
    };
  }, [src, width, height]);

  return (
    <img
      src={resizedSrc || src}
      alt={alt}
      className={`${className} w-full h-full object-cover`}
      style={{ display: "block" }}
    />
  );
}


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoaded] = useState(true);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

   useEffect(() => {
    const timer = setTimeout(() => setLoaded(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,  
      mirror: false,
      offset: 200,
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        AOS.refreshHard();
      }, 50);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#343a40]">
        <div className="text-white text-2xl">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="md:flex md:h-screen">
      <aside className="md:pl-20 md:w-1/3 bg-[#343a40] text-white p-6 flex flex-col items-center margin-top-100px">
        <div className="text-center md:text-left" data-aos="fade-right" data-aos-delay="0">
          <div 
            style={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: isMobile ? "0 auto 20px" : "0 0 20px 0"
            }}
          >
            <SharpImage
              src={myPhoto}
              width={300}
              height={300} 
              className="block"
              alt="Мое фото"
            />
          </div>
          <h2 className="text-4xl font-bold mb-2">Zakharov Grigory</h2>
          <p className="mb-4 text-gray-400">FullStack Developer</p>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p className="text-gray-400">Ulyanovs, Russia 🇷🇺</p>
          </div>
          <p className="pb-4 text-center">I’m not a fullstack - I’m full-galaxy: frontend, backend, and the stars of code.</p>
          <div className="flex space-x-5 items-center">
            <a
              href={resumeFile}
              download
              className="flex items-center bg-white-500 text-white px-4 py-1.5 rounded-md 
              hover:bg-red-600 transform hover:scale-105 
              transition duration-200 ease-in-out space-x-2"
            >
              <FaDownload className="w-6 h-6" />
              <span className="text-sm">Download Resume</span>
            </a>
            <a href="mailto:zakharov9933@gmail.com" className="hover:text-red-500 transform hover:scale-125 transition duration-200">
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a href="http://github.com/GrigoryZakharov" className="hover:text-red-500 transform hover:scale-125 transition duration-200">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/grigory-zakharov-577561389/" className="hover:text-red-500 transform hover:scale-125 transition duration-200">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://t.me/ILoveTankiOnline" target="_blank" className="hover:text-red-500 transition duration-200 transform hover:scale-125">
              <FaTelegramPlane className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-semibold mb-2 text-white">About Me</h3>
          <p>
            I’m a 19-year-old <span className="text-red-400 font-medium">Full-Stack Developer</span> from Ulyanovsk, Russia 🇷🇺, 
            passionate about building scalable and meaningful web applications. I work with 
            <span className="text-red-400 font-medium"> React</span>, 
            <span className="text-red-400 font-medium"> FastAPI</span>, and 
            <span className="text-red-400 font-medium"> PostgreSQL</span>, 
            focusing on clean architecture and smooth user experiences.
          </p>
          <p className="mt-3">
            Currently studying <span className="text-red-400 font-medium">Mathematical Software and Information Systems Administration </span> 
            at Ulyanovsk State Technical University, I love solving real-world problems 
            and continuously improving my skills across modern backend and frontend technologies.
          </p>
        </div>
      </aside>
      <main className="md:w-2/3 bg-[#343a40] p-6 overflow-y-auto text-white ">
        <section data-aos="fade-left"  data-aos-delay="300" className="mb-8">
          <h2 className="text-2xl font-bold text-white-500 mb-4 text-center">Stats</h2>
          <div className=" transform hover:scale-105 transition duration-300 max-w-md mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-6">
            <table className="w-full table-auto text-left">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Age</td>
                  <td className="py-2 text-gray-300">19</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Years of experience</td>
                  <td className="py-2 text-gray-300">1+</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Projects</td>
                  <td className="py-2 text-gray-300">6+</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">English Languague</td>
                  <td className="py-2 text-gray-300">C1</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Cups of coffee(/day)</td>
                  <td className="py-2 text-gray-300">3</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">GitHub repositories</td>
                  <td className="py-2 text-gray-300">6+</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-white-500">Favorite Frameworks</td>
                  <td className="py-2 text-gray-300">React, Node, FastAPI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section data-aos="fade-left" data-aos-delay="350" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white-500 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-[0_4px_15px_rgba(255,0,0,0.5)] hover:bg-red-800 hover:shadow-none transition-all duration-300 transform hover:scale-105 group">
              <h3 className="font-semibold mb-2 text-red-500 group-hover:text-white transition-colors duration-300">
                Languages & Frameworks
              </h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">
                Python, JavaScript, Typescript, FastAPI, SQLAlchemy, Django, C++
              </p>
            </div>

            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-[0_4px_15px_rgba(0,255,0,0.5)] hover:bg-green-800 hover:shadow-none transition-all duration-300 transform hover:scale-105 group">
              <h3 className="font-semibold mb-2 text-green-500 group-hover:text-white transition-colors duration-300">
                Databases
              </h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">
                PostgreSQL, MySQL, SQLite
              </p>
            </div>

            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-[0_4px_15px_rgba(0,0,255,0.5)] hover:bg-blue-800 hover:shadow-none transition-all duration-300 transform hover:scale-105 group">
              <h3 className="font-semibold mb-2 text-blue-500 group-hover:text-white transition-colors duration-300">
                Tools & Technologies
              </h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">
                Git, Docker, Redis, Celery, AsyncIO, Unit Testing
              </p>
            </div>

            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-[0_4px_15px_rgba(255,255,0,0.5)] hover:bg-yellow-800 hover:shadow-none transition-all duration-300 transform hover:scale-105 group">
              <h3 className="font-semibold mb-2 text-yellow-500 group-hover:text-white transition-colors duration-300">
                Other
              </h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">
                REST API Design, JWT Authentication, CI/CD (basic), SPA, React Router
              </p>
            </div>
          </div>
        </section>



        {isMobile? (
          <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Experience</h2>
          <div className="mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-start space-x-4">
              <div style={{ width: 64, height: 64, borderRadius: "8px", overflow: "hidden" }}>
                <SharpImage src={USU} width={64} height={64} alt="USU Logo" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white-500">Ulyanovsk State Technical University</h3>
                <p className="text-gray-400">Python Developer Internship</p>
                <p className="text-gray-400">June 2025 – July 2025</p>
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center bg-white-500 text-white px-4 py-1.5 rounded-md 
             hover:bg-red-600 transform hover:scale-105 transition duration-300 ease-in-out space-x-2 mt-4">
                  Show more
                </button>
                {isOpen && (
                  <div className="mt-4 text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Developed and maintained web applications using Python and Django.</li>
                      <li>Created RESTful APIs for integration with frontend applications.</li>
                      <li>Optimized application and database performance.</li>
                      <li>Collaborated in a team using Git for version control.</li>
                      <li>Participated in task planning and estimation within the Agile methodology.</li>
                    </ul>
                  </div>)}
              </div>
            </div>
          </div>
        </section>
        ) : (
        <section data-aos="fade-left" data-aos-delay="400" className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Experience</h2>
          <div className="mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-start space-x-4">
              <div style={{ width: 64, height: 64, borderRadius: "8px", overflow: "hidden" }}>
                <SharpImage src={USU} width={64} height={64} alt="USU Logo" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white-500">Ulyanovsk State Technical University</h3>
                <p className="text-gray-400">Python Developer Internship</p>
                <p className="text-gray-400">June 2025 – July 2025</p>
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center bg-gray-500 text-white px-4 py-1.5 rounded-md 
             hover:bg-red-600 transform hover:scale-105 transition duration-300 ease-in-out space-x-2 mt-4">
                  Show more
                </button>
                {isOpen && (
                  <div className="mt-4 text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Developed and maintained web applications using Python and Django.</li>
                      <li>Created RESTful APIs for integration with frontend applications.</li>
                      <li>Optimized application and database performance.</li>
                      <li>Collaborated in a team using Git for version control.</li>
                      <li>Participated in task planning and estimation within the Agile methodology.</li>
                    </ul>
                  </div>)}
              </div>
            </div>
          </div>
        </section>
        )}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Education</h2>
          <div className="mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-start space-x-4">
              <div style={{ width: 64, height: 64, borderRadius: "8px", overflow: "hidden" }}>
                <SharpImage src={USU} width={64} height={64} alt="USU Logo" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white-500">Ulyanovsk State Technical University – Bachelor’s Degree</h3>
                <p className="text-gray-400">Mathematical Software and Administration of Information Systems</p>
                <p className="text-gray-400">September 2024 - July 2028</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Projects</h2>

          <div className="mx-auto bg-[#495057] text-white rounded-xl shadow-lg p-6 mb-6 max-w-4xl hover:shadow-red-500 transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-start space-x-6">
              <div className={`w-full ${isMobile ? "h-96" : "w-80 h-96"} rounded-lg overflow-hidden mb-4 md:mb-0`}>
                <SharpImage src={weather_hub} width={isMobile ? 400 : 300} height={400} alt="WeatherHub Project" />
              </div>

              <div className="flex-1 pl-2">
                <h3 className="text-xl font-bold mb-4">WeatherHub API</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-3">
                  <li>Built a scalable API for retrieving and synchronizing weather data from external sources.</li>
                  <li>Configured Celery and Redis for background tasks, improving request performance.</li>
                  <li>Implemented city-based endpoints with data storage in PostgreSQL. Prepared Docker and .env configurations for smooth deployment and testing.</li>
                </ul>
                <p className="text-gray-400 mb-3">Python, FastAPI, PostgreSQL, SQLAlchemy, Redis, Celery</p>
                <a href="https://github.com/GrigoryZakharov/weatherhub" className="text-4xl hover:text-red-500 transition-transform duration-300 transform hover:scale-125 inline-block">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto bg-[#495057] text-white rounded-xl shadow-lg p-6 mb-6 max-w-4xl hover:shadow-red-500 transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-start space-x-6">
              <div className={`w-full ${isMobile ? "h-96" : "w-80 h-96"} rounded-lg overflow-hidden mb-4 md:mb-0`}>
                <SharpImage src={Blog_API} width={isMobile ? 400 : 300} height={400} alt="Blog Platform Project" />
              </div>

              <div className="flex-1 pl-2">
                <h3 className="text-xl font-bold mb-4">Blog Platform</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-3">
                  <li>Developed a full-stack blog with authentication and authorization using JWT.</li>
                  <li>Implemented CRUD operations for posts and comments with like/dislike functionality.</li>
                  <li>Configured Alembic for database migrations and Docker for backend, frontend, and database.</li>
                  <li>Built a SPA with React and React Router integrated with FastAPI via REST API.</li>
                </ul>
                <p className="text-gray-400 mb-3">Python, FastAPI, React, PostgreSQL, SQLAlchemy, JWT, Docker</p>
                <a href="https://github.com/GrigoryZakharov/Blog_API" className="text-4xl hover:text-red-500 transition-transform duration-300 transform hover:scale-125 inline-block">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto bg-[#495057] text-white rounded-xl shadow-lg p-6 mb-6 max-w-4xl hover:shadow-red-500 transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-start space-x-6">
              <div className={`w-full ${isMobile ? "h-96" : "w-80 h-96"} rounded-lg overflow-hidden mb-4 md:mb-0`}>
                <SharpImage src={todoApi} width={isMobile ? 400 : 300} height={400} alt="Todo App Project" />
              </div>
              <div className="flex-1 pl-2">
                <h3 className="text-xl font-bold mb-4">Todo App</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-3">
                  <li>Built a full-stack task management application.</li>
                  <li>Implemented CRUD operations with filtering and pagination.</li>
                  <li>Frontend with React and TailwindCSS; backend with FastAPI, PostgreSQL, and SQLAlchemy.</li>
                  <li>Fully dockerized for easy deployment and testing using Pytest.</li>
                </ul>
                <p className="text-gray-400 mb-3">Python 3.11, FastAPI, SQLAlchemy, Pydantic, PostgreSQL, React 18, TailwindCSS, Docker, Docker Compose, Pytest</p>
                <a href="https://github.com/GrigoryZakharov/todo_api" className="text-4xl hover:text-red-500 transition-transform duration-300 transform hover:scale-125 inline-block">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto bg-[#495057] text-white rounded-xl shadow-lg p-6 mb-6 max-w-4xl hover:shadow-red-500 transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-start space-x-6">
              <div className={`w-full ${isMobile ? "h-96" : "w-80 h-96"} rounded-lg overflow-hidden mb-4 md:mb-0`}>
                <SharpImage src={shopFront} width={isMobile ? 400 : 300} height={400} alt="Shop Front Project" />
              </div>
              <div className="flex-1 pl-2">
                <h3 className="text-xl font-bold mb-4">Shop Front</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-3">
                  <li>Full-stack e-commerce front with product catalog, cart, and checkout functionality.</li>
                  <li>Integrated React frontend with backend APIs and deployed with Docker.</li>
                </ul>
                <p className="text-gray-400 mb-3">React, TailwindCSS, Node.js, FastAPI, PostgreSQL, Docker</p>
                <a href="https://github.com/GrigoryZakharov/shop_front" className="text-4xl hover:text-red-500 transition-transform duration-300 transform hover:scale-125 inline-block">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto bg-[#495057] text-white rounded-xl shadow-lg p-6 mb-6 max-w-4xl hover:shadow-red-500 transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-start space-x-6">
              <div className={`w-full ${isMobile ? "h-96" : "w-80 h-96"} rounded-lg overflow-hidden mb-4 md:mb-0`}>
                <SharpImage src={galleryFront} width={isMobile ? 400 : 300} height={400} alt="Gallery Front Project" />
              </div>
              <div className="flex-1 pl-2">
                <h3 className="text-xl font-bold mb-4">Gallery Front</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-3">
                  <li>Responsive image gallery SPA with filtering, search, and lightbox functionality.</li>
                  <li>Optimized for performance and mobile devices.</li>
                </ul>
                <p className="text-gray-400 mb-3">Vue 3, Vite, TailwindCSS, JavaScript</p>
                <a href="https://github.com/GrigoryZakharov/gallery_front" className="text-4xl hover:text-red-500 transition-transform duration-300 transform hover:scale-125 inline-block">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
