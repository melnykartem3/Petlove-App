import PetBlock from '../../components/PetBlock/PetBlock.jsx';
import Title from '../../components/Title/Title.jsx';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import registerMobile from '../../images/register/registerMobile.jpg';
import registerMobile_2x from '../../images/register/registerMobile@2x.jpg';
import registerTablet from '../../images/register/registerTablet.jpg';
import registerTablet_2x from '../../images/register/registerTablet@2x.jpg';
import registerDesktop from '../../images/register/registerDesktop.jpg';
import registerDesktop_2x from '../../images/register/registerDesktop@2x.jpg';
import catEmoji from '../../images/cat/catEmoji.png';
import catEmoji_2x from '../../images/cat/catEmoji@2x.png';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <div className={css.registerPageWrapper}>
      <div className={css.petBlockWrapper}>
        <PetBlock
          mobile={registerMobile}
          mobile2x={registerMobile_2x}
          tablet={registerTablet}
          tablet2x={registerTablet_2x}
          desktop={registerDesktop}
          desktop2x={registerDesktop_2x}
          petName="Jack"
          petBirthday="18.10.2021"
          petDescription="Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
          avatarSrc={catEmoji}
          avatarSrc_2x={catEmoji_2x}
        />
      </div>
      <div className={css.formWrapper}>
        <Title title="Registration" />
        <p className={css.formDesc}>
          Thank you for your interest in our platform.
        </p>
        <RegistrationForm />
      </div>
    </div>
  );
}
