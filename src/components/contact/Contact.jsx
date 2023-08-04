import './Contact.scss';
import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import phone from '../../assets/phone.svg';
import email from '../../assets/email.svg';

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contactTitle">Contact me</h2>
      <div className="contactEmailPhone">
        <div className="contactEmail"><img className='dark-mode-icon' src={email} alt="email" /><span>kaccpper2@gmail.com</span></div>
        <div className="contactPhone"><img className='dark-mode-icon' src={phone} alt="phone number" /><span>+48 669 358 020</span></div>
      </div>
      <div className="contactGithubLinkedin">
        <a href="https://github.com/kbujak09" target='blank' className="contactGithubDiv dark-mode-icon"><img className='contactGithub' src={Github} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/kacper-bujak-68877025a" target='blank' className="contactLinkedinDiv"><img className='contactLinkedin' src={Linkedin} alt="LinkedIn" /></a>
      </div>
    </section>
  )
}

export default Contact;