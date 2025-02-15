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
                    <h2 className="text-display-title">A passionate Frontend Developer</h2>
                </div>
                <div className="column xl-6 lg-12 u-flexitem-x-right">
                    <p className="lead">
                        With 5 years of experience in Frontend Development, specializing in ReactJS, Next.js, HTML, CSS, SCSS, Bootstrap, and JavaScript, I have had the opportunity to work on high-quality, responsive web applications and user interfaces. I am committed to delivering intuitive user experiences and always strive to push the boundaries of what's possible in frontend development.
                    </p>
                </div>
            </div>
    
            <div className="row pagemedia">
                <div className="column xl-12">
                    <figure className="page-media text-center">                                
                        <img src="images/intro-bg.png" 
                            srcSet="images/intro-bg.png 2400w, images/intro-bg.png 1200w, intro-bg.png 600w" 
                            sizes="(max-width: 2400px) 100vw, 2400px" alt="Your Photo"/>
                    </figure>
                </div>
            </div>
    
            <div className="row width-narrower pagemain">
                <div className="column xl-12">
    
                    <h2>How I Got Here</h2>
                    <p>My journey in the tech world began in 2019 as a web designer, where I quickly developed a passion for crafting visually engaging and user-friendly websites. Driven by my desire to expand my skill set, I transitioned into Frontend Development, immersing myself in modern technologies and frameworks. Over the years, I've had the privilege of working with clients across a range of industries, including healthcare, finance, and e-commerce.</p>
                    <p>
                        Through designing responsive web applications, customizing ReactJs, NextJs, and seamlessly integrating APIs, I've continually honed my skills, adapting to new challenges and staying ahead of emerging trends in the fast-evolving tech landscape. Each project has strengthened my foundation, allowing me to deliver intuitive, high-performance solutions that meet the unique needs of every client.
                    </p>
    
                    <h2 className="u-add-bottom">My Values & Beliefs</h2>
    
                    <div className="grid-list-items list-items">
                        <div className="grid-list-items__item list-items__item u-remove-bottom">
                            <div className="list-items__item-header">
                                <h6 className="list-items__item-small-title">User-Centered Design</h6>
                            </div>
                            <p>
                                I believe in designing with the user in mind. Every line of code I write is aimed at enhancing the user experience and ensuring that the final product meets their needs.
                            </p>
                        </div>
                        <div className="grid-list-items__item list-items__item u-remove-bottom">
                            <div className="list-items__item-header">
                                <h6 className="list-items__item-small-title">Collaboration</h6>
                            </div>
                            <p>
                                Collaboration is key to successful projects. Working closely with backend developers, designers, and clients helps create holistic solutions that exceed expectations.
                            </p>
                        </div>
                        <div className="grid-list-items__item list-items__item u-remove-bottom">
                            <div className="list-items__item-header">
                                <h6 className="list-items__item-small-title">Continuous Learning</h6>
                            </div>
                            <p>
                                The tech field is always evolving. I am dedicated to continuously improving my skillset, staying up-to-date with the latest technologies, and exploring new tools to enhance my work.
                            </p>
                        </div>
                        <div className="grid-list-items__item list-items__item u-remove-bottom">
                            <div className="list-items__item-header">
                                <h6 className="list-items__item-small-title">Attention to Detail</h6>
                            </div>
                            <p>
                                I pride myself on the attention I give to the details in my work. Whether it's optimizing performance, writing clean code, or ensuring accessibility compliance, I believe the little things make a big difference.
                            </p>
                        </div>
                    </div>
    
                    <h2>Why Work With Me</h2>
                    <p>
                        I am committed to delivering high-quality frontend solutions that meet both client requirements and industry standards. Whether you're working on an e-commerce site, a healthcare application, or a business platform, my technical expertise and passion for web development ensure your project will be in good hands.
                    </p>
    
                    <h2>A Few More Words About Myself</h2>
                    <p>
                        Outside of coding, I enjoy tackling new challenges, whether it's solving complex problems or learning new frameworks. I’m always excited to take on new projects that allow me to grow and contribute positively to my team.
                    </p>
    
                </div>
            </div>
    
        </section>
    
        
    
    </section>
    );
  }