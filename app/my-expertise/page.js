export default function MyExpertisePage() {
    return (
        <section id="content" className="s-content">

               <section className="s-pageheader pageheader">
                    <div className="row">
                        <div className="column xl-12">
                            <h1 className="page-title">
                                <span className="page-title__small-type text-pretitle">Skills</span>
                                My Expertise
                            </h1>
                        </div>
                    </div>
               </section>

               <section className="s-pagecontent pagecontent">

                    <div className="row pageintro">
                        <div className="column xl-6 lg-12">
                            <h2 className="text-display-title">High-Impact Skills to Build Exceptional Web Solutions</h2>
                        </div>
                        <div className="column xl-6 lg-12 u-flexitem-x-right">
                            <p className="lead">
                                With over 5 years of experience in frontend development, I specialize in creating dynamic, responsive, and user-friendly web applications. My expertise lies in modern technologies like <strong>ReactJS</strong>, <strong>NextJS</strong>, and <strong>JavaScript</strong>, along with a strong foundation in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Tailwind CSS</strong>. I’m passionate about delivering high-quality solutions that enhance user experience and drive business growth.
                            </p>
                        </div>                       
                    </div> 

                    <div className="row">
                        <div className="column xl-12 grid-block">             
                            
                            <div className="grid-full grid-list-items list-items show-ctr">
                                
                                <div className="grid-list-items__item list-items__item">
                                    <div className="list-items__item-header">
                                        <h3 className="list-items__item-title">ReactJS</h3>
                                    </div>
                                    <div className="list-items__item-text">
                                        <p>
                                            Proficient in building dynamic and scalable user interfaces using ReactJS. Experienced in state management, component-based architecture, and integrating REST APIs.
                                        </p>
                                        <ul className="list-services">
                                            <li>Component-Based Architecture</li>
                                            <li>State Management (Redux, Context API)</li>
                                            <li>REST API Integration</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid-list-items__item list-items__item">
                                    <div className="list-items__item-header">
                                        <h3 className="list-items__item-title">NextJS</h3>
                                    </div>
                                    <div className="list-items__item-text">
                                        <p>
                                            Skilled in developing server-side rendered (SSR) and static websites using NextJS. Experienced in optimizing performance and SEO for web applications.
                                        </p>
                                        <ul className="list-services">
                                            <li>Server-Side Rendering (SSR)</li>
                                            <li>Static Site Generation (SSG)</li>
                                            <li>API Routes</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid-list-items__item list-items__item">
                                    <div className="list-items__item-header">
                                        <h3 className="list-items__item-title">JavaScript</h3>
                                    </div>
                                    <div className="list-items__item-text">
                                        <p>
                                            Strong command over JavaScript fundamentals, ES6+ features, and asynchronous programming. Experienced in building interactive and dynamic web applications.
                                        </p>
                                        <ul className="list-services">
                                            <li>ES6+ Features</li>
                                            <li>Asynchronous Programming</li>
                                            <li>DOM Manipulation</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid-list-items__item list-items__item">
                                    <div className="list-items__item-header">
                                        <h3 className="list-items__item-title">HTML & CSS</h3>
                                    </div>
                                    <div className="list-items__item-text">
                                        <p>
                                            Expertise in creating responsive and visually appealing web designs using HTML, CSS, and preprocessors like SCSS. Proficient in frameworks like Bootstrap and Tailwind CSS.
                                        </p>
                                        <ul className="list-services">
                                            <li>Responsive Design</li>
                                            <li>CSS Preprocessors (SCSS)</li>
                                            <li>Tailwind CSS & Bootstrap</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid-list-items__item list-items__item">
                                    <div className="list-items__item-header">
                                        <h3 className="list-items__item-title">Tools & Platforms</h3>
                                    </div>
                                    <div className="list-items__item-text">
                                        <p>
                                            Experienced in using tools like Git/Github for version control, AWS for deployment, and Prisma ORM for database management. Skilled in WordPress development.
                                        </p>
                                        <ul className="list-services">
                                            <li>Git/Github</li>
                                            <li>AWS</li>
                                            <li>Prisma ORM</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

               </section>

        </section>
    );
  }