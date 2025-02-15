import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className="s-header">

            <div className="row s-header__inner width-sixteen-col">

                <div className="s-header__block">
                    <div className="s-header__logo">
                        <Link className="logo" href="/">
                            <img src="images/prakash.svg" alt="Homepage" />
                        </Link>
                    </div>

                    <a className="s-header__menu-toggle" href="#0"><span>Menu</span></a>
                </div>

                <nav className="s-header__nav">

                    <ul className="s-header__menu-links">
                        <li><Link href="about">About</Link></li>
                        <li><Link href="my-expertise">My Expertise</Link></li>
                        {/* <li><Link href="projects.html">Projects</Link></li> */}
                        <li><Link href="contact">Contact</Link></li>
                    </ul>

                    <div className="s-header__contact">
                        <Link href="/prakash_resume_latest.pdf" target='_blank' className="btn btn--primary s-header__contact-btn">Download Resume</Link>
                    </div>

                </nav>

            </div>

        </header>
    )
}

export default Header
