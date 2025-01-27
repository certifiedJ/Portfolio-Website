import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header>
        <a href="#" class="logo-holder">
          <div class="logo">J</div>
          <div class="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="mailto:jamesgriffiths23@hotmail.com" class="button">Contact Me</a></li>
          </ul>
          <a href="#" class="mobile-toggle" onClick="toggleMobileMenu();">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section class="hero container">
          <div class="hero-blue">
            <div>
              <h1><small>Hi I'm</small> James Griffiths</h1>
              <p>Computer Programming College Student. My interests include Full Stack Web Development, Mobile Application Development, and Software Engineering. I am a quick learner and am always eager to acquire new knowledge, making me receptive to various opportunities.</p>
              <div class="call-to-action">
                <a href="./assets/James-resume.pdf" class="button black">Download CV</a>
                <a href="mailto:jamesgriffiths23@hotmail.com" class="button white">Contact Me</a>
              </div>
              <div class="social-links">
                <a href="https://github.com/certifiedJ"><img src="./assets/black-github.png" alt="GitHub" width="48" /></a>
                <a href="https://www.linkedin.com/in/james-griffiths-53b165294"><img src="./assets/linkedln.png" alt="LinkedIn" width="48" /></a>
              </div>
            </div>
          </div>
          <div class="hero-yellow">
            <img src="./assets/james-pic.jpeg" alt="James Griffiths" width="100%" />
          </div>
        </section>

        {/* Logos Section */}
        <section class="logos container">
          <div class="marquee">
            <div class="track">
              <img src="./assets/html.webp" alt="HTML" width="128" />
              <img src="./assets/css.png" alt="CSS" width="128" />
              <img src="./assets/javascript.webp" alt="JS" width="128" />
              <img src="./assets/react.png" width="128" alt="React" />
              <img src="./assets/nextjs.png" width="128" alt="Next JS" />
              <img src="./assets/vscode.png" width="128" alt="VS Code" />
              <img src="./assets/python.png" width="128" alt="Python" />
              <img src="./assets/html.webp" alt="HTML" width="128" />
              <img src="./assets/css.png" alt="CSS" width="128" />
              <img src="./assets/javascript.webp" alt="JS" width="128" />
              <img src="./assets/react.png" width="128" alt="React" />
              <img src="./assets/nextjs.png" width="128" alt="Next JS" />
              <img src="./assets/vscode.png" width="128" alt="VS Code" />
              <img src="./assets/python.png" width="128" alt="Python" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" class="skills container">
          <h2><small>About Me</small> Skills</h2>
          <div class="holder-blue">
            <div class="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML5</li>
                <li>Bootstrap</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Java</li>
                <li>Django</li>
              </ul>
              <h3>Programming Languages</h3>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>MySQL</li>
                <li>Python</li>
              </ul>
              <h3>Mobile Development</h3>
              <ul>
                <li>React Native</li>
              </ul>
              <h3>Databases</h3>
              <ul>
                <li>Oracle</li>
                <li>SQLDeveloper</li>
                <li>MySQL WorkBench</li>
                <li>MongoDB</li>
                <li>Google Firebase</li>
              </ul>
            </div>
            <div class="right-column">
              <h3>A bit about me</h3>
              <p>Hi I'm James Griffiths, a Computer Programming student at Humber Polytechnic. My interests include Full Stack Web Development, Mobile Application Development, and Software Engineering. I am a quick learner and am always eager to acquire new knowledge, making me receptive to various opportunities.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" class="bento container">
          <h2><small>Previous</small> Completed Projects</h2>
          <div class="bento-grid">
            <a href="#" class="bento-item">
              <img src="./assets/Brain Feed Books.png" alt="Bookstore App" width="100%" />
            </a>
            <a href="#" class="bento-item">
              <img src="./assets/bento-2.jpg" alt="Churhview" width="100%" />
            </a>
            <a href="#" class="bento-item">
              <img src="./assets/bento-3.jpg" alt="Harley" width="100%" />
            </a>
            <a href="#" class="bento-item">
              <img src="./assets/bento-5.jpg" alt="Bunbury" width="100%" />
            </a>
            <a href="#" class="bento-item">
              <img src="./assets/bento-6.jpg" alt="Running" width="100%" />
            </a>
            <a href="#" class="bento-item">
              <img src="./assets/car-wash.png" alt="Car Wash Project" width="100%" />
            </a>
          </div>
        </section>

        {/* Chatbot Section */}
        <section class="chatbot container">
          <h2><small>Talk to me</small> Chatbot</h2>
          <div class="chatbot-blue">
            <div class="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
              <p>You can also download my resume here if you want to take a look at it. I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
              <a href="./assets/James-resume.pdf" class="button black">Download Resume</a>
            </div>
            <div class="chat-box">
              <div class="scroll-area">
                <ul id="chat-log">
                  <li>
                    <span class="avatar bot">AI</span>
                    <div class="message">Hi, I'm a friendly chatbot that lets you interactive with this portfolio and CV. How can I help?</div>
                  </li>
                  <li>
                    <span class="avatar user">User</span>
                    <div class="message">I have a question to ask you about this resume</div>
                  </li>
                </ul>
              </div>
              <div class="chat-message">
                <input type="text" placeholder="Hey James, what skills are you best at?"/>
                <button class="button black">Send</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <div class="footer-container">
          <div class="footer-left">
            <h3>Contact Information</h3>
            <p>Email: <a href="mailto:jamesgriffiths23@hotmail.com">jamesgriffiths23@hotmail.com</a></p>
          </div>
          <div class="footer-right">
            <h3>Follow Me</h3>
            <div class="social-links">
              <a href="https://github.com/certifiedJ"><img src="./assets/black-github.png" alt="GitHub" width="32" /></a>
              <a href="https://www.linkedin.com/in/james-griffiths-53b165294"><img src="./assets/linkedln.png" alt="LinkedIn" width="32" /></a>
            </div>
          </div>
        </div>
        <p>Copyright &#169; 2025 James Griffiths. All Rights Reserved.</p>
      </footer>
      <script src="script.js"></script>
    </>
  );
}
