import SocialLinks from "../component/SocialLinks";

export default function CancellationRefundPolicyPage() {
    return (
        <section id="content" className="s-content">
            <section className="s-pageheader pageheader">
                <div className="row">
                    <div className="column xl-12">
                        <h1 className="page-title">
                            <span className="page-title__small-type text-pretitle">Legal</span>
                            Cancellation & Refund Policy
                        </h1>                            
                    </div>
                </div>
            </section> 
    
            <section className="s-pagecontent pagecontent">
                <div className="row width-narrower pagemain">
                    <div className="column xl-12">
                        <h3>Effective Date: 1 Jan 2025</h3>

                        <h3>1. Cancellation Policy</h3>
                        <ul>
                            <li>Users can request a cancellation within 24 hours of purchase for a full refund.</li>
                            <li>After 24 hours, cancellations may not be eligible for a refund.</li>
                        </ul>

                        <h3>2. Refund Policy</h3>
                        <ul>
                            <li>Full refunds are issued for cancellations made within 24 hours.</li>
                            <li>No refunds will be processed once a service has been delivered.</li>
                            <li>In case of technical issues on our end, we will assess and issue refunds accordingly.</li>
                        </ul>

                        <h3>3. How to Request a Refund</h3>
                        <p>To request a refund, email us at <a href="mailto:pk428357@gmail.com">pk428357@gmail.com</a> with your transaction details.</p>

                        <h3>4. Processing Time</h3>
                        <p>Refunds will be processed within 7-10 business days after approval.</p>

                        <h3>5. Changes to Policy</h3>
                        <p>We reserve the right to modify this policy at any time. Please check this page for updates.</p>

                        <h3>6. Contact Us</h3>
                        <p>For any refund-related inquiries, reach out to us at <a href="mailto:pk428357@gmail.com">pk428357@gmail.com</a>.</p>
    
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
