import './css/Admission.css'

const Admission = () => {
    return (
        <>
            <main className='admission-main d-f align-center'>
                <div>
                    <p className="page-bl-above">Admission</p>
                    <h1 className="page-bl-title">Join Our Family of Young Learners</h1>
                </div>
                <p className="page-bl-desc">
                    At Little Learners Academy, we welcome you to embark on an exciting
                    educational journey for your child. Our admission process is designed
                    to be transparent, straightforward, and inclusive. Here's a step-by-step
                    guide to joining our school
                </p>
            </main>
            <section className='admission-process'>
                <p className="page-bl-above">Process</p>
                <h2 className="page-bl-title">Admission Process</h2>
                <p className="page-bl-desc">
                    Embark on a remarkable educational journey with us!
                    Our Admission and Enrollment process is the gateway
                    to providing your child with an exceptional learning
                    experience at our kindergarten school
                </p>
                <div className="admission-process-box d-f">
                    <div className="admission-process-item">
                        <div><img src="/images/admission-process/1.png" alt="admissiom-process1" /></div>
                        <div className="process-item-content">
                            <h3 className="process-item-title">Inquiry</h3>
                            <p className="process-item-desc">
                                Submit an inquiry form through our website
                                or contact our admissions office to express
                                your interest in Little Learners Academy.
                            </p>
                        </div>
                    </div>
                    <div className="admission-process-item">
                        <div><img src="/images/admission-process/2.png" alt="admissiom-process2" /></div>
                        <div className="process-item-content">
                            <h3 className="process-item-title">School Tour</h3>
                            <p className="process-item-desc">
                                Schedule a personalized school tour to explore our campus,
                                meet our staff, and gain insights into our nurturing learning
                                environment.
                            </p>
                        </div>
                    </div>
                    <div className="admission-process-item">
                        <div><img src="/images/admission-process/3.png" alt="admissiom-process3" /></div>
                        <div className="process-item-content">
                            <h3 className="process-item-title">Application Form</h3>
                            <p className="process-item-desc">
                                Complete the application form and provide the required documents,
                                including your child's birth certificate, medical records, and
                                any previous academic records (if applicable).
                            </p>
                        </div>
                    </div>
                    <div className="admission-process-item">
                        <div><img src="/images/admission-process/4.png" alt="admissiom-process4" /></div>
                        <div className="process-item-content">
                            <h3 className="process-item-title">Parent Interview</h3>
                            <p className="process-item-desc">
                                We value parent engagement, and a meeting with
                                our admissions team allows us to understand your
                                child's needs and ensure Little Learners Academy
                                aligns with your family's expectations.
                            </p>
                        </div>
                    </div>
                    <div className="admission-process-item">
                        <div><img src="/images/admission-process/5.png" alt="admissiom-process5" /></div>
                        <div className="process-item-content">
                            <h3 className="process-item-title">Student Assessment</h3>
                            <p className="process-item-desc">
                                For certain age groups, a student assessment
                                may be conducted to understand their developmental
                                progress and ensure the best placement.
                            </p>
                        </div>
                    </div>
                    <div className="admission-process-item">
                        <div><img src="/images/admission-process/6.png" alt="admissiom-process6" /></div>
                        <div className="process-item-content">
                            <h3 className="process-item-title">Acceptance</h3>
                            <p className="process-item-desc">
                                Once the admission process is complete, you will receive
                                an official acceptance letter from Little Learners Academy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="admission-features">
                <p className="page-bl-above">Our Features</p>
                <h2 className="page-bl-title">Fee Structure</h2>
                <p className="page-bl-desc">
                    Our fee structure is transparent, and we strive 
                    to keep our fees competitive within the education sector. 
                    The fees vary based on the program, age group, and any 
                    additional services chosen.
                </p>
                <div className="admission-features-content d-f">
                    <div className="admission-features-bl">
                        <table className='admission-features-structure'>
                            <thead>
                                <tr>
                                    <th>Program</th>
                                    <th>Age Group</th>
                                    <th>Annual Tuition</th>
                                    <th>Registration Fee</th>
                                    <th>Activity Fee</th>
                                </tr>
                            </thead>
                            <div style={{height: "20px"}}></div>
                            <tbody>
                                <tr>
                                    <td>Nursery</td>
                                    <td>2 - 3 Years</td>
                                    <td>$1,686</td>
                                    <td>$162</td>
                                    <td>$12</td>
                                </tr>
                                <tr>
                                    <td>Pre - Kindergartens</td>
                                    <td>3 - 4 Years</td>
                                    <td>$2,686</td>
                                    <td>$220</td>
                                    <td>$16</td>
                                </tr>
                                <tr>
                                    <td>Kindergarten</td>
                                    <td>4 - 5 Years</td>
                                    <td>$3,686</td>
                                    <td>$340</td>
                                    <td>$20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="admission-features-bl">
                        <h3 className="features-bl-title">Additional Services</h3>
                        <table className='admission-features-services'>
                            <tr>
                                <td>Before and After-School Care</td>
                                <td>$120 / per month</td>
                            </tr>
                            <tr>
                                <td>Language Immersion Program</td>
                                <td>$60 / per semester</td>
                            </tr>
                            <tr>
                                <td>Transportation (optional)</td>
                                <td>$80 / per month</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Admission