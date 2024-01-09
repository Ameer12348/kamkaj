import React, { useEffect } from 'react'
import './Main.scss'
const Main = () => {
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.map(ele=>{
                if (ele.isIntersecting) {
                    ele.target.classList.add('fade-appear')
                }
            })
        },{
            threshold:0.2,
            rootMargin:'0px'
        })
        const elements = document.querySelectorAll('.fade-box')
        const elements2 = document.querySelectorAll('.faq-fade')

        for (let i  = 0; i  < elements.length; i ++) {
            const element = elements[i ];
             observer.observe(element)
        }
        for (let i  = 0; i  < elements2.length; i ++) {
            const element = elements2[i ];
            observer.observe(element)
        }
    },[])
  return (
    <div className='container-fluid p-0'>
        <div className="container-xl p-3">
            <div  className='row'>
                <div className="order-2 order-md-1 col-12 col-md-8">
                    <h3 className='mb-3'>Refrigerator Repair & Maintenance Services</h3>
                    <p>Kam Kaj provides quality and reliable Refrigerator Repair Services. We provide all types of deep freezer repair services, non-frost fridge repair services, deep-frost fridge repair services, and double-door fridge repair services at your doorstep.</p>
                    <iframe className='w-100 mb-2' style={{height:'427px'}} src="https://www.youtube.com/embed/UQg_Cp7-EVw?si=95J6BCiO0Y33QSIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className='mb-3'>Our certified and experienced staff have more than 7+ years of experience and have repaired 70,000+ refrigerators over the last few years.</p>
                    <h6 className='mb-3'>Common Issues with Refrigerators & Deep Freezers:</h6>
                    <ul>
                        <li className='mb-3 ms-3'>PCB Card Issue, Fan & Fan Motor Issue</li>
                        <li className='mb-3 ms-3'>Panel Display Issue, Sensor & Door Sensor Issue</li>
                        <li className='mb-3 ms-3'>Gas Leakage Issue, Cooling Condenser Issue</li>
                        <li className='mb-3 ms-3'>Thermostat Issue, Compressor Issue, Heater Issue</li>
                    </ul>
                </div>
                <div className="order-1 order-md-2 col-12 col-md-4">
                    <h5 className='fw-bold mb-2' style={{fontSize:'18px'}}>Please Fill The Form Below</h5>
                    <p className='mb-2'>You will recive a call in few minutes to guide you regarding your query.</p>
                    <form >
                        <div className='mb-3'>
                            <input type="text" placeholder='Name' style={{borderRadius:"0px",height:'40px',border:"1px solid gray" ,fontSize:"16px",}} className='w-100 px-2 ' />
                        </div>
                        <div className='mb-3'>
                            <input type="tel" placeholder='03XX-XXXXXXXXX' style={{borderRadius:"0px",height:'40px',border:"1px solid gray" ,fontSize:"16px",}} className='w-100 px-2 ' />
                        </div>
                        <div className='mb-3'>
                            <select style={{borderRadius:"0px",height:'40px',border:"1px solid gray" ,fontSize:"16px",backgroundColor:'white'}}  className='w-100 px-2 '>
                                <option value=""style={{borderRadius:"0px",height:'40px',border:"1px solid gray" ,fontSize:"16px",backgroundColor:'white'}}  className='w-100 px-2 ' >Select Your region</option>
                                <option value=""style={{borderRadius:"0px",height:'40px',border:"1px solid gray" ,fontSize:"16px",backgroundColor:'white'}}  className='w-100 px-2 ' >Karachi</option>
                                <option value=""style={{borderRadius:"0px",height:'40px',border:"1px solid gray" ,fontSize:"16px",backgroundColor:'white'}}  className='w-100 px-2 ' >Lahore</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Address' style={{borderRadius:"0px",height:'40px',border:"1px solid gray" ,fontSize:"16px",}} className='w-100 px-2 ' />
                        </div>
                        <h5 className='fw-bold mb-2' style={{fontSize:'18px'}}>Choose your Refrigerator</h5>
                        <div className="row row-cols-2">
                            <div  className=' p-2'>
                                <label  htmlFor='refridge'  style={{border:"1px solid gray " ,height:'130px'}} className='position-relative d-flex justify-content-center align-items-center'>
                                    <input type="radio" name='fridge' id='refridge' className='position-absolute' style={{top:"10px",right:"10px"}}/>
                                    <img  src="https://www.kamkaj.pk/Content/images/offer/home-appliance/deepFreezer.png" alt="" />
                                </label>
                            </div>
                            <div  className=' p-2'>
                                <label htmlFor='fridge'  style={{border:"1px solid gray " ,height:'130px'}} className='position-relative d-flex justify-content-center align-items-center'>
                                    <input type="radio" name='fridge' id='fridge' className='position-absolute' style={{top:"10px",right:"10px"}}/>
                                    <img  src="https://www.kamkaj.pk/Content/images/offer/refrigerator/Refrigerator2.png" alt="" />
                                </label>
                            </div>
                        </div>
                        <h6 className='fw-bold my-2'>Please explain your problem (Optional) </h6>
                        <div className='mb-3'>
                            <textarea style={{borderRadius:"0px",height:'40px',border:"1px solid gray" ,fontSize:"16px",height:'150px'}} className='w-100 p-2'></textarea>
                        </div>
                        <button type='submit' className='text-center bg-dark rounded d-block w-100 text-light p-2 my-4' onClick={e=>{e.preventDefault()}}>Reques a call</button>
                    </form>
                    <h5 className='text-center fw-bolder mb-4'>OR</h5>
                    <div className='w-100 mb-4'>
                        <a href="" className='text-decoration-none w-100'><img className='w-100' src="https://www.kamkaj.pk/Content/kamkaj/Offers2/images/call-us-cta.webp" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <h3 className='fw-bold'>Why Choose Kamkaj</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div  className='p-2'>
                    <div style={{backgroundColor:'#f3f6f9'}} className=' pt-4 pb-2 px-3 fade-box'>
                        <h4 className='fw-semibold'>Experience</h4>
                        <p> We have been providing all types of cleaning & repairing & self-care services for many years and expertise to resolve all your problems. </p>
                    </div>
                </div>
                <div  className='p-2'>
                    <div style={{backgroundColor:'#f3f6f9'}} className=' pt-4 pb-2 px-3 fade-box'>
                        <h4 className='fw-semibold'>Quality</h4>
                        <p> We use only the best equipment and cleaning products to ensure that your home and office are left looking fresh and clean. </p>
                    </div>
                </div>
                <div  className='p-2'>
                    <div style={{backgroundColor:'#f3f6f9'}} className=' pt-4 pb-2 px-3 fade-box'>
                        <h4 className='fw-semibold'>Professionalism</h4>
                        <p> Our team is composed of highly trained and experienced technicians who are committed to providing the highest level of service. </p>
                    </div>
                </div>
                <div  className='p-2'>
                    <div style={{backgroundColor:'#f3f6f9'}} className=' pt-4 pb-2 px-3 fade-box'>
                        <h4 className='fw-semibold'>Flexibility</h4>
                        <p> We offer flexible scheduling options to accommodate your busy schedule and can work around your availability. </p>
                    </div>
                </div>
                <div  className='p-2'>
                    <div style={{backgroundColor:'#f3f6f9'}} className=' pt-4 pb-2 px-3 fade-box'>
                        <h4 className='fw-semibold'>Affordable</h4>
                        <p> We offer competitive pricing for our services and are committed to providing value for money. </p>
                    </div>
                </div>
                <div  className='p-2'>
                    <div style={{backgroundColor:'#f3f6f9'}} className=' pt-4 pb-2 px-3 fade-box'>
                        <h4 className='fw-semibold'>Satisfaction</h4>
                        <p> Our team will work with you to ensure that you are completely satisfied with the results of our services. </p>
                    </div>
                </div>
                <div  className='p-2'>
                    <div style={{backgroundColor:'#f3f6f9'}} className=' pt-4 pb-2 px-3 fade-box'>
                        <h4 className='fw-semibold'>Wide coverage</h4>
                        <p> We serve a wide range of areas, so whether you are in the city or the countryside, we can come to you. </p>
                    </div>
                </div>
                <div  className='p-2'>
                    <div style={{backgroundColor:'#f3f6f9'}} className=' pt-4 pb-2 px-3 fade-box'>
                        <h4 className='fw-semibold'>Variety of services</h4>
                        <p> We offer a variety of services to suit your needs, whether you need a one-time clean, regular maintenance, or self-care services. </p>
                    </div>
                </div>
                <div  className='p-2'>
                    <div style={{backgroundColor:'#f3f6f9'}} className=' pt-4 pb-2 px-3 fade-box'>
                        <h4 className='fw-semibold'>Professional Touch</h4>
                        <p> We have a professional touch in our all services, you can trust that our team will approach your project with devotion to detail. </p>
                    </div>
                </div>
            </div>
        </div>
        <div style={{backgroundColor:"#fcf8ef"}}>
            <div className="container p-4 p-sm-2 ">
                <h4 className='fw-bold' style={{letterSpacing:"2px"}}>FAQs</h4>
                <div className='my-4 faq-fade'>
                    <h5 className='fw-bold mb-2' style={{fontSize:'18px'}}>How much will it cost to repair my fridge, refrigerator or deep freezer? </h5>
                    <p>Charges for repairing or maintaining your fridge, refrigerator, and deep freezer depend on several factors, such as the model and the brand of your unit, the severity, and the type of problem that needs to be repaired.</p>
                    <hr />
                </div>
                <div className='my-4 faq-fade'>
                    <h5 className='fw-bold mb-2' style={{fontSize:'18px'}}>What kind of fridge, refrigerator and deep freezer repair services does Kam Kaj offer? </h5>
                    <p>We repair all kinds of fridges, refrigerators, and deep freezers including 2 door refrigerators, single-door refrigerators, single-door deep freezers, double-door deep freezers, etc. We offer a wide range of repair services for Fridge, Refrigerators, and Deep Freezers including panel issues, thermostat issues, gas refilling, low cooling, compressor not working, ice not freezing, wiring, door problems, and water leakage issues.</p>
                    <hr />
                </div>
                <div className='my-4 faq-fade'>
                    <h5 className='fw-bold mb-2' style={{fontSize:'18px'}}>How often should I get my fridge, refrigerator and deep freezer serviced?  </h5>
                    <p>It depends on the kind of system you are using. Generally, we recommend to have your fridge, refrigerator and deep freezer professionally serviced after every 6 months or at least once every 2 years.</p>
                    <hr />
                </div>
                <div className='my-4 faq-fade'>
                    <h5 className='fw-bold mb-2' style={{fontSize:'18px'}}> Does Kam Kaj offer 24/7 fridge, refrigerator & deep freezer repair services? </h5>
                    <p>Kam Kaj offers fridge, refrigerator and deep freezer repair Services in Karachi & Lahore from 10 AM up to 10 PM. However, exceptions can be made for emergencies*. For further information, Contact the Kam Kaj Team. *Extra charges may be applicable.</p>
                    <hr />
                </div>
                <div className='my-4 faq-fade'>
                    <h5 className='fw-bold mb-2' style={{fontSize:'18px'}}>Why should I choose Kam Kaj's fridge, refrigerator, and deep freezer repair services?  </h5>
                    <p>Our expert and certified in-house staff know well how to fix all types and brands of fridges, refrigerators and deep freezers. Post-work guarantee speaks for our result.</p>
                    <hr />
                </div>
                <div className='my-4 faq-fade'>
                    <h5 className='fw-bold mb-2' style={{fontSize:'18px'}}>My fridge, refrigerator and deep freezer isn’t cooling, what could be the problem?  </h5>
                    <p>Various factors can cause cooling problems in your fridge, refrigerator and deep freezer, such as refrigerant gas leaks, malfunctioning fan motors or leaky condenser coils. To address these issues, consider opting for expert Fridge, Refrigerator, and Deep Freezer Installation, Repair, and Maintenance Services.</p>
                    <hr />
                </div>

            </div>

        </div>
        <div className='container'>
            <h3 className='fw-bold py-3'>Most Services Search in Karachi</h3>
            <div className="row row-cols-auto my-3">
                <button className='rounded rounded-pill px-4 py-2 border-0  m-2 ' style={{backgroundColor:"#f1e8d2",fontSize:"18px",fontWeight:"5500"}}>Defrost Refrigerator Repair</button>
                <button className='rounded rounded-pill px-4 py-2 border-0  m-2 ' style={{backgroundColor:"#f1e8d2",fontSize:"18px",fontWeight:"5500"}}>Gas Refilling</button>
                <button className='rounded rounded-pill px-4 py-2 border-0  m-2 ' style={{backgroundColor:"#f1e8d2",fontSize:"18px",fontWeight:"5500"}}>Deep Freezer Repair</button>
                <button className='rounded rounded-pill px-4 py-2 border-0  m-2 ' style={{backgroundColor:"#f1e8d2",fontSize:"18px",fontWeight:"5500"}}>refrigerator gas refill near me</button>
                <button className='rounded rounded-pill px-4 py-2 border-0  m-2 ' style={{backgroundColor:"#f1e8d2",fontSize:"18px",fontWeight:"5500"}}>fridge repair near me</button>
                <button className='rounded rounded-pill px-4 py-2 border-0  m-2 ' style={{backgroundColor:"#f1e8d2",fontSize:"18px",fontWeight:"5500"}}>Refrigerator Reapir</button>
                <button className='rounded rounded-pill px-4 py-2 border-0  m-2 ' style={{backgroundColor:"#f1e8d2",fontSize:"18px",fontWeight:"5500"}}>Non-Frost Refrigerator Rrpair</button>
                <button className='rounded rounded-pill px-4 py-2 border-0  m-2 ' style={{backgroundColor:"#f1e8d2",fontSize:"18px",fontWeight:"5500"}}>refrigerator repair in gulshan e iqbal </button>
            </div>
        </div>
        <div style={{backgroundColor:'#f3f6f9'}} className='py-3 my-5'>
            <div className="container" >
                <div className="row row-cols-lg-3 row-cols-1 gap-5 align-items-center justify-content-between">
                    <div >
                        <img className='w-100' style={{height:'400px',objectFit:'contain'}} src="https://www.kamkaj.pk/Content/images/kamkajV2/home-mobile.png" alt="" />
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h3 className='fw-bold'>Download Kam Kaj App</h3>
                        <p style={{width:"80%"}}>Make Your Life Easier by Downloading Kam Kaj App.</p>
                        <div className="row  row-cols-2 gap-5 gap-lg-0 p-3 p-lg-0 justify-content-center align-items-center">
                            <img src="https://www.kamkaj.pk/Content/images/offer/deep-cleaning/home-play-store.png" alt="" />
                            <img src="https://www.kamkaj.pk/Content/images/offer/deep-cleaning/home-app-store.png" alt="" />
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img style={{width:"200px"}} src="https://www.kamkaj.pk/Content/images/offer/deep-cleaning/barcode.png" alt="" />
                        <p>Scan the QR Code</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container p-4 p-sm-2 mb-3'>
            <h2 className='fw-bold text-center' >Trusted by Leading Organizations</h2>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/bankalhabib-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/faysalbank-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/tensports-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/outfitters-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/coats-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/borjan-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/creekclub-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/gulahmed-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/Indushospital-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/jazz-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/lablink-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/Novatex-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/pakistanstockexchange-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/proconengineering-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/PTA-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/saylani-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/SBTJapan-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/service-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/Sindheducationfoundation-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/suparco-logo.png" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://www.kamkaj.pk/Content/images/offer/toyota-logo.png" className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main