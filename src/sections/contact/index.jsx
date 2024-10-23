import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';
const Contact = () => {

  return (
    <div className="contact" id="contact">
      <div className='container'>
        <div className="contact__content">
          <Heading level={2}>Contact</Heading>
          <Text>
            Kappa
          </Text>
        </div>
        <div className='contact__form'>
          <form>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <textarea placeholder='Message'></textarea>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
