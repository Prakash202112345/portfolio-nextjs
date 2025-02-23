import Link from 'next/link'
import React from 'react'
import SocialLinks from '../SocialLinks'

function Footer() {
  return (
    <>
        <section id="cta" className="s-cta">

            <div className="row row-x-center text-center">
                <div className="column xl-8 lg-12">
        
                    <div className="s-cta__content">
                        <h2 className="text-display-title">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="lead">
                            With 5+ years of experience in React.js, Next.js, Prisma, AWS, and WordPress, I specialize in developing high-performance web applications, intuitive user interfaces, and scalable solutions. Whether it's a complex SaaS platform, an eCommerce site, or a custom web solution, I ensure quality, efficiency, and innovation.
                        </p>
                        <Link href="contact" className="btn btn--primary">Start Your Project</Link>
                    </div>
        
                </div>
            </div>
        
        </section>
        
       
        <footer className="s-footer">
            <div className="row s-footer__content">
                <div className="column xl-6 lg-6 md-12 s-footer__block s-footer__about">                    
                    <h3>About Me</h3>
                    <p>
                        I’m a passionate frontend developer with expertise in ReactJS, NextJS, and modern web technologies. I specialize in building responsive, user-friendly web applications that deliver exceptional user experiences.
                    </p>               
                </div>                
                <div className="column xl-3 lg-6 md-12 s-footer__block s-footer__site-links">
                    <h3>Site Links</h3>
                    <ul className="link-list">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="my-expertise"> My Expertise</Link></li>
                        <li><Link href="contact">Contact</Link></li>
                        <li><Link href="privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="terms-conditions">Terms & Conditions</Link></li>
                        <li><Link href="cancellation-refund-policy">Cancellation & Refund Policy</Link></li>
                    </ul>
                </div>
            </div>    
            
            <div className="row s-footer__bottom">
                <div className="column xl-6 lg-12">
                   <SocialLinks classes={"s-footer__social social-list"}/>
                </div>
                <div className="column xl-6 lg-12">
                    <p className="ss-copyright">
                        <span>© Copyright Prakash 2025</span> 
                    </p>
                </div>

                <div className="ss-go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="17 11 12 6 7 11"></polyline><line x1="12" y1="18" x2="12" y2="6"></line></svg>
                    </a>
                </div>
            </div>
            
        </footer>
    </>
  )
}

export default Footer
