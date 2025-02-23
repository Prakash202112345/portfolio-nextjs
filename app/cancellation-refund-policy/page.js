import SocialLinks from "../component/SocialLinks";

export default function CancellationRefundPolicyPage() {
    return (
        <section id="content" className="s-content">
            <section className="s-pageheader pageheader">
                <div className="row">
                    <div className="column xl-12">
                        <h1 className="page-title">
                            <span className="page-title__small-type text-pretitle">Legal</span>
                            Terms & Conditions
                        </h1>                            
                    </div>
                </div>
            </section> 
    
            <section className="s-pagecontent pagecontent">
                 
    
                <div className="row width-narrower pagemain">
                    <div className="column xl-12">
                        <h3>Effective Date: 1 Jan 2025</h3>
                        <h3>Welcome to our website</h3>
                        <p>By accessing or using our website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.</p>
    
                        <h3>1. Use of the Website</h3>
                        <p>You must be at least 18 years old to use our services. You agree to use our website only for lawful purposes. Unauthorized use or modification of website content is prohibited.</p>
    
                        <h3>2. Intellectual Property</h3>
                        <p>All content, including text, graphics, logos, and software, is the property of our website and protected by copyright laws. You may not copy, reproduce, or distribute any content without prior written consent.</p>
    
                        <h3>3. User Conduct</h3>
                        <p>You agree not to engage in activities that may harm our website or other users. Any attempt to gain unauthorized access to our system is strictly prohibited.</p>
    
                        <h3>4. Limitation of Liability</h3>
                        <p>We do not guarantee uninterrupted or error-free access to our website. We are not responsible for any loss or damage arising from the use of our services.</p>
    
                        <h3>5. Changes to Terms</h3>
                        <p>We reserve the right to update these Terms & Conditions at any time. Your continued use of the website constitutes acceptance of the updated terms.</p>
    
                        <h3>6. Contact Us</h3>
                        <p>For any questions regarding these terms, contact us at <a href="mailto:pk428357@gmail.com">pk428357@gmail.com</a>.</p>
    
                        <div className="contact-block">
                            <h6>Follow On Social</h6>
                            <SocialLinks classes={"contact-social social-list"}/>
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
