export default function AboutPage() {
    return (
        <section id="content" className="s-content">

            <section className="s-pageheader pageheader">
                <div className="row">
                    <div className="column xl-12">
                        <h1 className="page-title">
                            <span className="page-title__small-type text-pretitle">About</span>
                            Hi, I'm Prakash Sharma
                        </h1>
                    </div>
                </div>
            </section>
    
            <section className="s-pagecontent pagecontent">
    
                <div className="row pageintro">
                    <div className="column xl-6 lg-12">
                        <h2 className="text-display-title">A Passionate Frontend Developer</h2>
                    </div>
                    <div className="column xl-6 lg-12 u-flexitem-x-right">
                        <p className="lead">
                            With 5 years of experience in Frontend Development, I specialize in ReactJS, Next.js, HTML, CSS, SCSS, Bootstrap, and JavaScript. I've developed high-quality, responsive web applications and user interfaces, always pushing the boundaries of frontend development to create seamless user experiences.
                        </p>
                    </div>
                </div>
    
                <div className="row pagemedia">
                    <div className="column xl-12">
                        <figure className="page-media text-center">                                
                            <img src="images/intro-bg.png" 
                                srcSet="images/intro-bg.png 2400w, images/intro-bg.png 1200w, images/intro-bg.png 600w" 
                                sizes="(max-width: 2400px) 100vw, 2400px" alt="Your Photo"/>
                        </figure>
                    </div>
                </div>
    
                <div className="row width-narrower pagemain">
                    <div className="column xl-12">
    
                        <h2>My Journey</h2>
                        <p>
                            I started my career in 2019 as a web designer, where I developed a passion for crafting visually engaging websites. I transitioned into frontend development, immersing myself in modern technologies and frameworks like React and Next.js.
                        </p>
                        <p>
                            Over the years, I've worked with clients across various industries, including healthcare, finance, and e-commerce, developing responsive web applications, customizing frameworks, and seamlessly integrating APIs.
                        </p>
    
                        <h2 className="u-add-bottom">Experience</h2>
                        <ul>
                            <li><strong>FAMCOM LABS PVT LTD (May 2022 – Present)</strong> - Developed web applications using ReactJS, Next.js, and Material UI.</li>
                            <li><strong>SQUAREBOAT SOLUTIONS PVT LTD (Feb 2022 – May 2022)</strong> - Built application front-end using ReactJS, collaborated on feature implementation.</li>
                            <li><strong>INFORCEA SYSTEMS PVT LTD (Aug 2020 – Feb 2022)</strong> - Developed applications with ReactJS, Material UI, and created custom WordPress websites.</li>
                            <li><strong>VOCSO TECHNOLOGIES PVT LTD (June 2019 – Aug 2020)</strong> - Developed responsive websites and converted PSD designs to HTML.</li>
                        </ul>
    
                        <h2>Projects</h2>
                        <ul>
                            <li><strong>UFC Fight Club</strong> - Developed the UFC Fight Club website with ReactJS, implemented subscription features.</li>
                            <li><strong>Dmunity</strong> - Created an AI-powered template creator using Next.js, Prisma ORM, and OpenAI API.</li>
                        </ul>
    
                        <h2>Skills & Expertise</h2>
                        <ul>
                            <li><strong>Frontend Technologies:</strong> ReactJS, Next.js, HTML, CSS, SCSS, Bootstrap, TailwindCSS, JavaScript, Angular</li>
                            <li><strong>Tools & Platforms:</strong> Git/GitHub, AWS, REST API Integration, Prisma ORM, WordPress</li>
                            <li><strong>Other Skills:</strong> Responsive Design, User Experience (UX), Cross-functional Collaboration, Problem Solving</li>
                        </ul>
    
                        <h2>My Values & Beliefs</h2>
                        <ul>
                            <li><strong>User-Centered Design:</strong> Every line of code enhances the user experience.</li>
                            <li><strong>Collaboration:</strong> Working with teams creates holistic solutions.</li>
                            <li><strong>Continuous Learning:</strong> Staying updated with new technologies and tools.</li>
                            <li><strong>Attention to Detail:</strong> Clean code, optimized performance, and accessibility compliance.</li>
                        </ul>
    
                        <h2>Why Work With Me</h2>
                        <p>
                            I am committed to delivering high-quality frontend solutions that align with both client requirements and industry standards. Whether you're working on an e-commerce site, a healthcare application, or a business platform, my expertise ensures that your project will be handled with care and precision.
                        </p>
    
                        <h2>A Few More Words About Me</h2>
                        <p>
                            Outside of coding, I love tackling new challenges, solving complex problems, and learning new frameworks. I’m always excited to take on new projects that allow me to grow and contribute positively to my team.
                        </p>
    
                        <h2>Connect With Me</h2>
                        <ul>
                            <li><strong>Email:</strong> pk428357@gmail.com</li>
                            <li><strong>Phone:</strong> +91 9911718253</li>
                            <li><strong>Location:</strong> Faridabad, Haryana (121003)</li>
                            <li><strong>GitHub:</strong> <a href="https://github.com/Prakash202112345" target="_blank">Prakash202112345</a></li>
                            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/prakash-sharma" target="_blank">Prakash Sharma</a></li>
                        </ul>
    
                    </div>
                </div>
    
            </section>
    
        </section>
    );
}