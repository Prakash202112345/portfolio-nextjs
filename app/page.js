import Image from "next/image";
import styles from "./page.module.css";
import SocialLinks from "./component/SocialLinks";
import Link from "next/link";

export default function Home() {
  return (
    <section id="content" className="s-content">


        <section id="intro" className="s-intro">

          <div className="row s-intro__content width-sixteen-col">

            <div className="column lg-12 s-intro__content-inner grid-block">

              <div className="s-intro__content-text">
                <div className="s-intro__content-pretitle text-pretitle">Hello, I'm Prakash</div>
                <h1 className="s-intro__content-title">
                  I build high-performance front-end solutions for your business.
                </h1>
              </div>

              <div className="s-intro__content-media">
                <div className="s-intro__content-media-inner">
                  <img src="images/intro-bg.png" alt="profile image" />
                  <div className="lines">
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="s-intro__scroll-down">
                <a href="#about" className="smoothscroll">
                  <div className="scroll-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#97b34a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">

                      <polyline points="7 13 12 18 17 13"></polyline><line x1="12" y1="18" x2="12" y2="6"></line></svg>
                  </div>
                  <span>Scroll for more</span>
                </a>
              </div>

            </div>

          </div>

        </section>



        <section id="about" className="s-about target-section">

          <div className="row s-about__content width-sixteen-col">
            <div className="column grid-block grid-section-split">

              <img src="images/geometric_shape.svg" alt="" className="s-about__content-imgbg" />

              <div className="section-header grid-section-split__header">
                <div className="text-pretitle">About</div>
                <h2 className="text-display-title">
                  An inspiring headline about myself.
                </h2>
              </div>

              <div className="s-about__content-main grid-section-split__primary">
                <p className="attention-getter">
                  Prakash Sharma is a skilled Frontend Developer with extensive experience in ReactJS, Next.js, and modern UI frameworks like Material UI, Tailwind CSS, and Bootstrap. With a strong foundation in HTML, CSS, JavaScript, and Angular, he has built high-performance web applications and responsive designs that enhance user experience. His expertise extends to tools and platforms like Git/GitHub, AWS, REST API integration, Prisma ORM, and WordPress, allowing him to develop and maintain scalable and efficient solutions.
                </p>

                <p className="attention-getter">
                  With a Bachelor's degree in Computer Applications from DAV Centenary College, Prakash has worked with multiple organizations, including Famcom Labs, Squareboat Solutions, Inforcea Systems, and Vocsotech Technologies. Throughout his career, he has collaborated with cross-functional teams to deliver high-quality web solutions, developing everything from landing pages and mobile applications to fully functional front-end interfaces. His work includes creating dynamic, user-friendly applications based on design files (PSD/XD/Figma) and ensuring seamless integration with backend services.
                </p>

                <p className="attention-getter">
                  Notable projects include UFC Fight Club, where he developed a responsive website with a subscription system for ticket purchases, and Dmunity, an AI-powered template creator using Next.js, Prisma ORM, and OpenAI API. His work on these projects demonstrates his ability to build feature-rich applications, optimize performance, and enhance user engagement. With strong problem-solving skills and a keen eye for design, Prakash continues to push the boundaries of frontend development.
                </p>
              </div>

              <div className="s-about__content-btn grid-section-split__bottom">
                <Link href="about" className="btn btn--stroke u-fullwidth">More About Me</Link>

                <SocialLinks classes={"s-about__social social-list"}/>
              </div>

            </div>
          </div>

        </section>



        <section id="expertise" className="s-expertise">
          <div className="row s-expertise__content width-sixteen-col">
            <div className="column xl-12 grid-block grid-section-split">
              <div className="section-header grid-section-split__header">
                <div className="text-pretitle">Expertise</div>
                <h2 className="text-display-title">
                  My key areas of expertise.
                </h2>
                <p className="lead">
                  I specialize in building high-performance, scalable, and user-friendly front-end applications with modern technologies like ReactJS, Next.js, and Material UI. My expertise extends to responsive design, API integrations, and seamless UI/UX development.
                </p>
              </div>

              <div className="s-expertise__content-main grid-section-split__primary">
                <div className="grid-list-items list-items show-ctr">
                  <div className="grid-list-items__item list-items__item">
                    <div className="grid-list-items__title list-items__item-header">
                      <h3 className="list-items__item-title">Front-End Development</h3>
                    </div>
                    <div className="grid-list-items__text list-items__item-text">
                      <p>
                        Proficient in ReactJS, Next.js, and Angular for building dynamic and high-performing web applications. Skilled in HTML, CSS, SCSS, Tailwind CSS, and Bootstrap for responsive and visually appealing UI designs.
                      </p>
                    </div>
                  </div>

                  <div className="grid-list-items__item list-items__item">
                    <div className="grid-list-items__title list-items__item-header">
                      <h3 className="list-items__item-title">UI/UX & Responsive Design</h3>
                    </div>
                    <div className="grid-list-items__text list-items__item-text">
                      <p>
                        Experienced in creating intuitive, accessible, and responsive web designs using Material UI, Bootstrap, and custom CSS. Ensuring seamless user experiences across devices and platforms.
                      </p>
                    </div>
                  </div>

                  <div className="grid-list-items__item list-items__item">
                    <div className="grid-list-items__title list-items__item-header">
                      <h3 className="list-items__item-title">API & Backend Integration</h3>
                    </div>
                    <div className="grid-list-items__text list-items__item-text">
                      <p>
                        Expertise in integrating REST APIs and working with databases using Prisma ORM and PostgreSQL. Ensuring efficient data fetching, state management, and smooth application performance.
                      </p>
                    </div>
                  </div>

                  <div className="grid-list-items__item list-items__item">
                    <div className="grid-list-items__title list-items__item-header">
                      <h3 className="list-items__item-title">Performance Optimization</h3>
                    </div>
                    <div className="grid-list-items__text list-items__item-text">
                      <p>
                        Skilled in optimizing front-end performance by implementing lazy loading, code splitting, caching, and efficient asset management to enhance speed and user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="s-expertise__content-btn grid-section-split__bottom">
                <a href="projects" className="btn btn--stroke u-fullwidth">View My Projects</a>
              </div> */}
            </div>
          </div>
        </section>




        <section id="clients" className="s-clients">

          <div className="row s-clients__content-block width-sixteen-col">
            <div className="column xl-12 grid-block grid-section-split">

              <div className="section-header grid-section-split__header">
                <div className="text-pretitle">Projects</div>
                <h2 className="text-display-title">
                  Here are some of the projects I have worked on.
                </h2>
              </div>

              <div className="grid-section-split__primary">
                <p className="lead">
                  Over the years, I have developed and contributed to various projects, delivering high-quality web applications and platforms tailored to client needs.
                </p>

                <p>
                  Some of my key projects include:
                </p>
                <ul>
                  <li><strong>Dmunity</strong> – A platform for managing user-generated templates and custom domains.</li>
                  <li><strong>Rewarded Play</strong> – A campaign management and rewards tracking system.</li>
                  <li><strong>UFC Fight Club</strong> – A platform for pre-sale tickets, dining deals, personal coaching sessions.</li>
                  <li><strong>Cricket Wireless</strong> – A platform campaign management and rewards redemption system.</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="row s-clients__content-block width-sixteen-col">
            <div className="column xl-12">

              <div className="clients-list">
                <div className="clients-list__item">
                  <a href="#0">
                    <img src="./images/clients/dmunity-logo.png" alt="Dmunity" />
                  </a>
                </div>
                <div className="clients-list__item">
                  <a href="#0">
                    <img src="images/clients/tlc.png" alt="TLC" />
                  </a>
                </div>
                <div className="clients-list__item">
                  <a href="#0">
                    <img src="images/clients/UfcFightClub.svg" alt="UfcFightClub" />
                  </a>
                </div>
                <div className="clients-list__item">
                  <a href="#0">
                    <img src="images/clients/cricket-logo.png" alt="cricket-logo" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </section>

      </section>
  );
}
