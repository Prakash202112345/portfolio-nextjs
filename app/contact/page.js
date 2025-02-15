import SocialLinks from "../component/SocialLinks";

export default function ContactPage() {
    return (
        <section id="content" className="s-content">
        <section className="s-pageheader pageheader">
            <div className="row">
                <div className="column xl-12">
                    <h1 className="page-title">
                        <span className="page-title__small-type text-pretitle">Contact</span>
                        Get In Touch
                    </h1>                            
                </div>
            </div>
        </section> 
    
        <section className="s-pagecontent pagecontent">
            <div className="row pageintro">
                <div className="column xl-6 lg-12">
                    <h2 className="text-display-title">Let's Build Something Great Together</h2>
                </div>
                <div className="column xl-6 lg-12 u-flexitem-x-right">
                    <p className="lead">
                        With 5 years of experience in ReactJS, Next.js, and a strong background in front-end development, I create high-quality, scalable, and responsive web applications. Whether it's a custom WordPress theme, a Next.js web app, or optimizing performance, I am here to help bring your vision to life.
                    </p>
                </div>                       
            </div> 
            
            <div className="row pagemedia">
                <div className="column xl-12">
                    <figure className="page-media">                                
                        <img src="images/thumbs/contact/contact-1200.jpg" 
                             srcSet="images/thumbs/contact/contact-2400.jpg 2400w, 
                                     images/thumbs/contact/contact-1200.jpg 1200w, 
                                     images/thumbs/contact/contact-600.jpg 600w" sizes="(max-width: 2400px) 100vw, 2400px" alt="Contact"/>
                    </figure>
                </div>
            </div> 
    
            <div className="row width-narrower pagemain">
                <div className="column xl-12">
                    <h2>Let's Work Together</h2>
    
                    <div className="row">
                        <div className="column xl-6 md-12 contact-cta">     
                            <p>
                                If you're looking for a dedicated front-end developer to collaborate on web projects, optimize your application's performance, or develop seamless user interfaces, feel free to reach out. Let's discuss how I can help elevate your project.
                            </p>
                            <a href="mailto:pk428357@gmail.com" className="btn btn--primary u-fullwidth contact-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                                Send Me An Email
                            </a>
                        </div> 
                        <div className="column xl-5 md-12 u-flexitem-x-right">
                            <div className="contact-block">
                                <h6>Follow On Social</h6>
                                <SocialLinks classes={"contact-social social-list"}/>
                            </div>
    
                            <div className="contact-block">
                                <h6>Email</h6>
                                <a href="mailto:pk428357@gmail.com">pk428357@gmail.com</a>
                            </div>
    
                            <div className="contact-block">
                                <h6>Phone</h6>
                                <ul className="contact-list">
                                    <li><a href="tel:+919911718253">+91 9911718253</a></li>
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