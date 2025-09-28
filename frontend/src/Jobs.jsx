import './index.css'
import './Jobs.css'
import {Link} from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useEffect,useState } from 'react'

export default function Jobs(){
    useEffect(()=>window.scrollTo(0,0),[])
    const [conviction, setConviction] = useState(false)

    function convictionNo(){
        setConviction(false)
    }
    function convictionYes(){
        setConviction(true)
    }
    function submitJobApplication(){
        alert('Your job application has been received. We will notify you if we have any job openings.')
    }
    return(
        
        <div className='page-wrapper webpage'>
                    <div className='webpage-wrapper'>
                        <Navbar />
        
                        <main className='jobs-main'>
                            <div className='maxwidth'>
                                <div>APPLICATION FOR EMPLOYMENT</div>
                                <div>OLEA RESTAURANT</div>
                                <div>39 High Street</div>
                                <div>New Haven, CT 06510</div><br/>

                                <div className='jobs-box'>Olea is an equal opportunity employer and does not discriminate against
                                    otherwise qualified applicants on the basis of race, color, creed, religion,
                                    ancestry, age, sex, marital status, national origin, disability or handicap, or
                                    veteran status. 
                                </div>

                                <br/>
                            </div>{/* .maxwidth */}
                            <hr/>
                            <form action={submitJobApplication}>
                                <br/>
                                PERSONAL INFO<br/><br/>
                                <div className='job-flexbox'>
                                    <label>
                                        First Name:<br/>
                                        <input type='text' />
                                    </label>

                                    <label>
                                        Last Name:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}
                                
                                <br/>
                                
                                <div className='job-flexbox'>
                                    <label>
                                        Street Address:<br/>
                                        <input type='text' />
                                    </label>
                                    
                                    <label>
                                        City/State:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}

                                <br/>                        
                                <label>
                                    Zip Code:<br/>
                                    <input  type='text'
                                            size='5'
                                            maxLength='5' />
                                </label>
                                
                                <br/><br/>

                                <div className='job-flexbox'>
                                    <label>
                                        Phone Number:<br/>
                                        <input type='text' placeholder='(###) ### - ####' />
                                    </label>

                                    <label>
                                        Email Address:<br/>
                                        <input type='email' placeholder='name@website.com' />
                                    </label>

                                </div>{/* .job-flexbox */}
                                
                                <br/>

                                <div className='job-flexbox'>
                                    <label>
                                        Position Sought:<br/>
                                        <input type='text' />
                                    </label>
                                    
                                    <label>
                                        Availability:<br/>
                                        <select required defaultValue=''>
                                            <option disabled value=''>Select One...&nbsp;&nbsp;&nbsp;</option>
                                            <option>Part-Time</option>
                                            <option>Full-Time</option>
                                        </select>
                                    </label>
                                </div>{/* .job-flexbox */}

                                <br/>

                                <div className='job-flexbox'>
                                    <label>
                                        Date Available:<br/>
                                        <input type='text' />
                                    </label>

                                    <label>
                                        Salary Desired:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}

                                <br/>

                                <label>
                                    Are you over 18 years old?<br/>
                                    <input type='radio' name='adult' required /> Yes<br/>
                                    <input type='radio' name='adult' /> No
                                </label><br/><br/>

                                <label>
                                    Are you legally eligible for employment in the United States? <br/>
                                    <input type='radio' name='legal' required /> Yes<br/>
                                    <input type='radio' name='legal' /> No
                                </label>

                                <br/><br/>
                                <hr/>
                                <br/>
                                EDUCATION<br/><br/>
                                <div className='maxwidth'>
                                    Please indicate education or training which you believe qualifies you for the position you are seeking.<br/>
                                </div>{/* .maxwidth */}
                                <br/>
                                <label>
                                HIGH SCHOOL<br/>
                                <div className='high-school'>
                                    <div className='years'>
                                        <div>1</div>
                                        <div><input type='radio' name='hs-years' /></div>
                                    </div>
                                    <div className='years'>
                                        <div>2</div>
                                        <div><input type='radio' name='hs-years' /></div>
                                    </div>
                                    <div className='years'>
                                        <div>3</div>
                                        <div><input type='radio' name='hs-years' /></div>
                                    </div>
                                    <div className='years'>
                                        <div>4</div>
                                        <div><input type='radio' name='hs-years' /></div>
                                    </div>
                                </div>
                                </label>
                                Number of years completed<br/><br/>

                                <label>
                                    High School Diploma?<br/>
                                    <input type='radio' name='hs-diploma' /> Yes<br/>
                                    <input type='radio' name='hs-diploma' /> No                                    
                                </label><br/><br/>

                                <label>
                                    G.E.D.?<br/>
                                    <input type='radio' name='GED' /> Yes<br/>
                                    <input type='radio' name='GED' /> No
                                </label><br/><br/>

                                <div className='job-flexbox'>
                                    <label>
                                        Name of School:<br/>
                                        <input type='text' />
                                    </label>

                                    <label>
                                        City/State:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}
                                
                                <br/><br/><br/><br/>

                                <label>
                                    <span style={{lineHeight:'0px'}}>
                                    COLLEGE<br/>
                                    and/or<br/>
                                    VOCATIONAL SCHOOL
                                    </span>
                                    <div className='college'>
                                        <div className='years'>
                                            <div>1</div>
                                            <div><input type='radio' name='college-years' /></div>
                                        </div>
                                        <div className='years'>
                                            <div>2</div>
                                            <div><input type='radio' name='college-years' /></div>
                                        </div>
                                        <div className='years'>
                                            <div>3</div>
                                            <div><input type='radio' name='college-years' /></div>
                                        </div>
                                        <div className='years'>
                                            <div>4</div>
                                            <div><input type='radio' name='college-years' /></div>
                                        </div>
                                    </div>
                                </label>
                                Number of years completed<br/><br/>

                                <div className='job-flexbox'>
                                    <label>
                                        Name of School:<br/>
                                        <input type='text' />
                                    </label>

                                    <label>
                                        City/State:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}







                                <br/>
                                <hr/>
                                <br/>

                                RECORD OF CONVICTION<br/><br/>
                                <div className='maxwidth'>
                                    <label>
                                    During the last 10 years, 
                                    have you ever been convicted of a crime 
                                    other than a minor traffic offense?<br/>
                                    <input  type='radio'
                                            id='conviction-no' 
                                            name='conviction' 
                                            value='no'
                                            required 
                                            onChange={convictionNo} /> No<br/>
                                    <input  type='radio' 
                                            id='conviction-yes'
                                            name='conviction' 
                                            value='yes' 
                                            onChange={convictionYes} /> Yes<br/>
                                    </label>
                                    {
                                        conviction == true && 
                                        <>
                                            <label>
                                                Explain:<br/>
                                                <textarea rows='5' required></textarea>
                                            </label>
                                        </>
                                    }
                                    <br/>
                                    (A conviction will not necessarily automatically disqualify you for employment. Rather, such factors as age and date of conviction, seriousness and nature of the crime, and rehabilitation will be considered.)
                                    <br/><br/>
                                </div>{/* .maxwidth */}
                                <hr/>
                                <br/>
                                EMPLOYMENT<br/><br/>
                                List most recent employer first, including U.S. Military Service.<br/><br/>

                                May we contact your present employer?<br/>
                                <label>
                                    <input type='radio' name='contact-employer' /> Yes<br/>
                                    <input type='radio' name='contact-employer' /> No<br/>
                                </label><br/>


{/***********************************************/}



                                <label>
                                    Employer:<br/>
                                    <input type='text' />
                                </label><br/><br/>
                                <div className='job-flexbox'>
                                    <label>
                                        Street Address:<br/>
                                        <input type='text' />
                                    </label>
                                    <label>
                                        City/State:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}
                                <br/>
                                <div className='job-flexbox'>
                                    <label>
                                        Phone Number:<br/>
                                        <input type='text' />
                                    </label>
                                    <label>
                                        Position:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}
                                <br/>
                                Dates of Employment<br/>
                                <div className='job-flexbox'>
                                    <label>
                                        From:<br/>
                                        <input type='text' placeholder='Month/Year' />
                                    </label>
                                    <label>
                                        To:<br/>
                                        <input type='text' placeholder='Month/Year' />
                                    </label>
                                </div>{/* .job-flexbox */}








                                <br/><br/><br/>
                                <label>
                                    Employer:<br/>
                                    <input type='text' />
                                </label><br/><br/>
                                <div className='job-flexbox'>
                                    <label>
                                        Street Address:<br/>
                                        <input type='text' />
                                    </label>
                                    <label>
                                        City/State:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}
                                <br/>
                                <div className='job-flexbox'>
                                    <label>
                                        Phone Number:<br/>
                                        <input type='text' />
                                    </label>
                                    <label>
                                        Position:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}
                                <br/>
                                Dates of Employment<br/>
                                <div className='job-flexbox'>
                                    <label>
                                        From:<br/>
                                        <input type='text' placeholder='Month/Year' />
                                    </label>
                                    <label>
                                        To:<br/>
                                        <input type='text' placeholder='Month/Year' />
                                    </label>
                                </div>{/* .job-flexbox */}








                                <br/><br/><br/>
                                <label>
                                    Employer:<br/>
                                    <input type='text' />
                                </label><br/><br/>
                                <div className='job-flexbox'>
                                    <label>
                                        Street Address:<br/>
                                        <input type='text' />
                                    </label>
                                    <label>
                                        City/State:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}
                                <br/>
                                <div className='job-flexbox'>
                                    <label>
                                        Phone Number:<br/>
                                        <input type='text' />
                                    </label>
                                    <label>
                                        Position:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}
                                <br/>
                                Dates of Employment<br/>
                                <div className='job-flexbox'>
                                    <label>
                                        From:<br/>
                                        <input type='text' placeholder='Month/Year' />
                                    </label>
                                    <label>
                                        To:<br/>
                                        <input type='text' placeholder='Month/Year' />
                                    </label>
                                </div>{/* .job-flexbox */}








                                <br/><br/><br/>
                                <label>
                                    Employer:<br/>
                                    <input type='text' />
                                </label><br/><br/>
                                <div className='job-flexbox'>
                                    <label>
                                        Street Address:<br/>
                                        <input type='text' />
                                    </label>
                                    <label>
                                        City/State:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}
                                <br/>
                                <div className='job-flexbox'>
                                    <label>
                                        Phone Number:<br/>
                                        <input type='text' />
                                    </label>
                                    <label>
                                        Position:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .job-flexbox */}
                                <br/>
                                Dates of Employment<br/>
                                <div className='job-flexbox'>
                                    <label>
                                        From:<br/>
                                        <input type='text' placeholder='Month/Year' />
                                    </label>
                                    <label>
                                        To:<br/>
                                        <input type='text' placeholder='Month/Year' />
                                    </label>
                                </div>{/* .job-flexbox */}




{/***********************************************/}




                                <br/><br/>

                                <label>
                                    Additional Comments (optional)<br/>
                                    <textarea rows='5'></textarea>
                                </label><br/>

                                <br/><br/>

                                <div className='maxwidth'>
                                    <div className='jobs-box'>
                                        This application for employment is good for 30 days only.<br/>
                                        Consideration for employment after 30 days requires a new application.
                                    </div>
                                </div>

                                <br/><br/>

                                <div className='maxwidth'>
                                    APPLICANT'S CERTIFICATION AND AGREEMENT<br/>

                                    I hereby certify that the facts set forth in the above 
                                    employment application are true and complete to the best 
                                    of my knowledge and authorize olea to verify their accuracy 
                                    and to obtain reference information on my work performance. 
                                    I hereby release olea from any/all liability of whatever kind 
                                    and nature which, at any time, could result from obtaining 
                                    and having an employment decision based on such information.<br/><br/>
                                    I understand that, if employed, falsified statements of any 
                                    kind or omissions of facts called for on this application shall 
                                    be considered sufficient basis for dismissal.<br/><br/>
                                    I understand that should an employment offer be extended to 
                                    me and accepted that I will fully adhere to the policies, rules 
                                    and regulations of employment of the Employer. However, I further 
                                    understand that neither the policies, rules, regulations of 
                                    employment or anything said during the interview process shall be 
                                    deemed to constitute the terms of an implied employment contract. 
                                    I understand that any employment offered is for an indefinite 
                                    duration and at will and that either I or the Employer may terminate 
                                    my employment at any time with or without notice or cause.<br/>
                                    <br/><br/>

                                    <label>
                                        <input required type='checkbox' />
                                        <span>
                                            &nbsp;&nbsp;I have read and agree to the above terms and conditions
                                        </span>
                                    </label>

                                    <br/><br/>

                                </div>

                                <input type='submit' id='submit-application' />
                            </form>
                            
                        </main>
        
                        <Footer />
                        
                    </div>{/* .webpage-wrapper */}
                </div>/* .page-wrapper */

        

    )
}