"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import aquarium from "./aquarium.jpeg";
import google from "./google.png";
import appdev from "./appdev.png";
import allin from "./allin.jpeg";
import eatery from "./eateryhome.png";
import resell from "./resell.png";
import ecolens from "./ecolensTraining.png";
import robot from "./robot.jpeg";
// Theme icons
import { SunIcon, MoonIcon } from "./icons";

export default function Home() {
  // Extract theme information from context
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-900 relative">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-10 w-full">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-black dark:text-white">Charles</h1>
          <h1 className="text-xl font-medium text-black dark:text-white"> Liggins</h1>
        </div>
        <button
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => {
            console.log('Theme toggle clicked, current theme:', theme);
            toggleTheme();
            console.log('Theme toggle completed');
          }}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>

      {/* Content Area */}
      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block p-8 border-r dark:border-gray-700 shrink-0 sticky top-[73px] h-screen overflow-y-auto">
          <nav className="space-y-8">
            <section>
              <h2 className="text-sm font-semibold mb-3 text-black dark:text-white">
                <Link href="#about" className="hover:text-gray-600 transition-colors">About Me</Link>
              </h2>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3 text-black dark:text-white">
                <Link href="#experience" className="hover:text-gray-600 transition-colors">Experience</Link>
              </h2>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="#experience" className="hover:text-gray-600 transition-colors">Google</Link></li>
                <li><Link href="#experience" className="hover:text-gray-600 transition-colors">AppDev</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3 text-black dark:text-white">
                <Link href="#projects" className="hover:text-gray-600 transition-colors">Projects</Link>
              </h2>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="#projects" className="hover:text-gray-600 transition-colors">Resell</Link></li>
                <li><Link href="#projects" className="hover:text-gray-600 transition-colors">Eatery Blue</Link></li>
                <li><Link href="#projects" className="hover:text-gray-600 transition-colors">All In</Link></li>
                <li><Link href="#projects" className="hover:text-gray-600 transition-colors">Ecolens</Link></li>
                <li><Link href="#projects" className="hover:text-gray-600 transition-colors">Team 399</Link></li>

              </ul>
            </section>

            {/* <section>
              <h2 className="text-sm font-semibold mb-3 text-black">
                <Link href="#projects" className="hover:text-gray-600 transition-colors">Education + Skills</Link>
              </h2>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="#projects" className="hover:text-gray-600 transition-colors">Cool Courses</Link></li>
                <li><Link href="#projects" className="hover:text-gray-600 transition-colors">Teaching</Link></li>
                <li><Link href="#projects" className="hover:text-gray-600 transition-colors">Skills</Link></li>
              </ul>
            </section> */}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 flex flex-col items-center">
          <div className="max-w-5xl w-full text-black dark:text-white">
            {/* About Me Section */}
            <section id="about" className="mb-16 pt-8 scroll-mt-16">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">About Me</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="mb-4">
                    Hi! I&apos;m Charles, a Junior studying Computer Science at Cornell
                    University. I&apos;m currently really excited about Computer Systems and
                    Human-Computer-Interaction. On campus, I build apps for students
                    through <Link href="https://www.cornellappdev.com/" target="_blank" className="underline">Cornell AppDev</Link>.
                  </p>
                  <p className="mb-4">
                    Outside of Academics, I like to play tennis, video games, and make
                    music.
                  </p>
                  <p className="mt-4">
                    In a past life, I was a programmer for FRC <Link href="https://www.team399.org/" target="_blank" className="underline"> Team 399 Eagle Robotics </Link>
                  </p>
                </div>
                <div className="md:w-1/3 flex-shrink-0">
                  <Image
                    src={aquarium}
                    alt="Aquarium"
                    className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-800"
                    priority
                  />
                </div>
              </div>

              {/* Social Links
              <div className="flex gap-6">
                <Link href="#" className="hover:underline">YouTube</Link>
                <Link href="#" className="hover:underline">LinkedIn</Link>
                <Link href="#" className="hover:underline">Twitter</Link>
              </div> */}
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 pt-8 scroll-mt-16">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Experience</h2>

              <div className="mb-8 flex gap-6">
                <div className="shrink-0 w-16 h-16 flex items-start pt-1 bg-white dark:bg-gray-200 rounded-lg p-1">
                  <Image
                    src={google}
                    alt="Google Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium dark:text-white">Software Engineering Intern</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Summer 2025</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-row">
                      <p className="font-medium mr-4">Google</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">TypeScript</span>
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">C++</span>
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">gRPC</span>
                        <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">Protocol Buffers</span>
                        <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">Angular JS</span>
                        <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">HTML</span>
                        <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">CSS</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Cambridge, MA</span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mt-2">
                    <li>Improved the debugging process for the YouTube Languages Capabilities Infrastructure team via merging existing tools for resolving dub and captions data into one tool, allowing for a more seamless experience</li>
                    <li>Implemented Remote Procedure Calls (gRPC) in C++ to fetch relevant caption data from videos</li>
                    <li>Created Angular components to convert captions data from Protocol Buffers to various presentable formats</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8 flex gap-6">
                <div className="shrink-0 w-16 h-16 flex items-start pt-1 bg-white dark:bg-gray-600 rounded-lg p-1">
                  <Image
                    src={appdev}
                    alt="Cornell AppDev Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium dark:text-white">iOS Developer</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Fall 2024 - Present</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-row">
                      <p className="font-medium mr-4">Cornell AppDev</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">SwiftUI</span>
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">Firebase</span>
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Swift UIKit</span>
                        <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">Postman</span>
                        <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">Figma</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Ithaca, NY</span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mt-2">
                    <li>Collaborating with Product Designers as well as iOS, Backend, and Android developers to enhance and improve the experience of Cornellians and Ithacans alike, with a combined user base of 16,000+ Monthly Active Users.</li>
                    <li>Frequently merging pull requests across multiple iOS applications with 1000&apos;s of lines of code.</li>
                    <li>Educating other students, members, and full-time engineers on building iOS apps in SwiftUI and UIKit</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 pt-8 scroll-mt-16">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Projects</h2>

              <div className="flex flex-col gap-6">
                <div className="border p-4 rounded-lg flex flex-row bg-white dark:bg-gray-800">
                  <div>
                    <div className="flex flex-row">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">Resell</h3>
                      <p className="text-sm font-semibold text-gray-700 mx-4 mt-1.5 dark:text-gray-400">Spring 2025 - Present</p>
                    </div>
                    <p className="text-gray-700 mb-3 dark:text-gray-400">A marketplace app for college students to buy and sell items locally.</p>
                    <div className="flex gap-2 text-sm">
                      <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">SwiftUI</span>
                      <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">Firebase</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mt-2">
                      <li>Implemented Smart Homepage, enabling users to quickly filter through listings via category, price, and recommendations</li>
                      <li>Linked backend endpoints to frontend with Alamofire and created a custom range slider for price filtering</li>
                    </ul>
                  </div>
                  <div className="shrink-0 w-64 h-64 flex items-center pt-1">
                    <Image
                      src={resell}
                      alt="Resell Home and Filters"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>


                <div className="border p-4 rounded-lg flex flex-row bg-white dark:bg-gray-800">
                  <div>
                    <div className="flex flex-row">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">All In</h3>
                      <p className="text-sm font-semibold text-gray-700 mx-4 mt-1.5 dark:text-gray-400">Fall 2024, Spring 2025</p>
                    </div>
                    <p className="text-gray-700 mb-3 dark:text-gray-400">Sports betting reimagined.</p>
                    <div className="flex gap-2 text-sm">
                      <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">SwiftUI</span>
                      <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">XCode</span>
                      <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">TestFlight</span>
                      <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">Alamofire</span>
                    </div>

                    <div>
                      <p> All In is a collaboration with Cornell Appdev and Millennium Management, where we were tasked to create a college-themed sports betting app. </p>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mt-2">
                      <li>Implemented Balance Sheet View, allowing users to see relevant metrics related to their spending history</li>
                      <li>Created Marketplace view for users to filter and search for player cards based on their needs.</li>
                    </ul>
                  </div>
                  <div className="shrink-0 w-64 h-64 flex items-center pt-1">
                    <Image
                      src={allin}
                      alt="All In Marketplace"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <div className="border p-4 rounded-lg flex flex-row bg-white dark:bg-gray-800">
                  <div>
                    <div className="flex flex-row">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">Eatery Blue</h3>
                      <p className="text-sm font-semibold text-gray-700 mx-4 mt-1.5 dark:text-gray-400">Fall 2024</p>
                    </div>
                    <p className="text-gray-700 mb-3 dark:text-gray-400"> Cornell Dining made easy.</p>
                    <div className="flex gap-2 text-sm">
                      <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">Swift UIKit</span>
                      <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">XCode</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mt-2">
                      <li>Reimagining the Cornell Dining experience with a mobile app that centralizes all Cornell dining data.</li>
                      <li>Implemented time-of-day UI, allowing users to instantaneously compare meal options throughout the day.</li>
                    </ul>
                  </div>

                  <div className="shrink-0 w-64 h-64 flex items-center pt-1">
                    <Image
                      src={eatery}
                      alt="Eatery Blue"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <div className="border p-4 rounded-lg flex flex-row bg-white dark:bg-gray-800">
                  <div>
                    <div className="flex flex-row">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">Ecolens</h3>
                      <p className="text-sm font-semibold text-gray-700 mx-4 mt-1.5 dark:text-gray-400">Fall 2023</p>
                    </div>
                    <p className="text-gray-700 mb-3 dark:text-gray-400">An AI-powered app that identifies eco-friendly products.</p>
                    <div className="flex gap-2 text-sm">
                      <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">JavaScript</span>
                      <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">Java Spring</span>
                      <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">Python</span>
                      <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">HTML</span>
                      <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">CSS</span>

                    </div>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mt-2">
                      <li>Winning submission of 114+ teams, web application using Computer Vision and Machine Learning </li>
                      <li>Fostering a sustainable recycling experience. Trained ML Model with 20+ common food and drink items to identify and distinguish trash from recycling, and providing insight about the identified object </li>
                      <li>Featured in Viam community blogs, with an outreach of 15,000+ people. Published on LinkedIn and Instagram.</li>

                    </ul>
                  </div>

                  <div className="shrink-0 w-64 h-64 flex items-center pt-1">
                    <Image
                      src={ecolens}
                      alt="Ecolens"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="border p-4 rounded-lg flex flex-row bg-white dark:bg-gray-800">
                  <div>
                    <div className="flex flex-row">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">FRC Team 399</h3>
                      <p className="text-sm font-semibold text-gray-700 mx-4 mt-1.5 dark:text-gray-400">High School</p>
                    </div>
                    <p className="text-gray-700 mb-3 dark:text-gray-400">Brought the robot to life</p>
                    <div className="flex gap-2 text-sm">
                      <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">Java</span>
                      <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">Computer Vision</span>
                      <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">Path Detection</span>
                      <span className="bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-900 text-xs px-2 py-1 rounded">Rapid Prototyping</span>



                    </div>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mt-2">
                      <li>Programming subteam lead junior and senior year of highschool</li>
                      <li>Used limelight and path planning software to develop an efficient, high scoring algorithm for the competition&apos;s autonomous period</li>
                      <li>Helped team win engineering inspiration due to build and programming quality of robot to qualify for world championships</li>

                    </ul>
                  </div>

                  <div className="shrink-0 w-64 h-64 flex items-center pt-1">
                    <Image
                      src={robot}
                      alt="Robot"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
