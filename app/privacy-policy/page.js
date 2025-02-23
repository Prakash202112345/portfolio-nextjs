import SocialLinks from "../component/SocialLinks";

export default function PrivacyPolicyPage() {
    return (
        <section id="content" className="s-content">
            <section className="s-pageheader pageheader">
                <div className="row">
                    <div className="column xl-12">
                        <h1 className="page-title">
                            <span className="page-title__small-type text-pretitle">Legal</span>
                            Privacy Policy
                        </h1>                            
                    </div>
                </div>
            </section> 
    
            <section className="s-pagecontent pagecontent">
                <div className="row width-narrower pagemain">
                    <div className="column xl-12">
                        <h3>Effective Date: 1 Jan 2025</h3>

                        <h3>1. Information We Collect</h3>
                        <ul>
                            <li>Personal details (name, email, phone) when you contact us.</li>
                            <li>Usage data (IP address, browser type) for analytics and security.</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <ul>
                            <li>To improve our website and services.</li>
                            <li>To respond to your inquiries.</li>
                            <li>To send updates or promotional content (you can opt-out anytime).</li>
                        </ul>

                        <h3>3. Data Protection</h3>
                        <ul>
                            <li>We implement security measures to protect your data.</li>
                            <li>We do not sell or share your information with third parties.</li>
                        </ul>

                        <h3>4. Cookies & Tracking Technologies</h3>
                        <p>We use cookies to enhance user experience. You can modify your browser settings to decline cookies.</p>

                        <h3>5. Your Rights</h3>
                        <p>You have the right to access, update, or delete your personal data. To request data modifications, contact us at <a href="mailto:pk428357@gmail.com">pk428357@gmail.com</a>.</p>

                        <h3>6. Changes to Privacy Policy</h3>
                        <p>We may update this policy from time to time. Please review it periodically.</p>

                        <h3>7. Contact Us</h3>
                        <p>If you have any concerns regarding your privacy, reach out to us at <a href="mailto:pk428357@gmail.com">pk428357@gmail.com</a>.</p>
    
                        <div className="contact-block">
                            <h6>Follow On Social</h6>
                            <SocialLinks classes={"contact-social social-list"} />
                        </div>

                        <div className="contact-block">
                            <h6>Email</h6>
                            <a href="mailto:pk428357@gmail.com">pk428357@gmail.com</a>
                        </div>
                    </div>                        
                </div> 
            </section> 
        </section>
    );
}
