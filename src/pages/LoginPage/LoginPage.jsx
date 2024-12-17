import PetBlock from '../../components/PetBlock/PetBlock.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import Title from '../../components/Title/Title.jsx';
import loginMobile from '../../images/login/loginMobile.jpg';
import loginMobile_2x from '../../images/login/loginMobile@2x.jpg';
import loginTablet from '../../images/login/loginTablet.jpg';
import loginTablet_2x from '../../images/login/loginTablet@2x.jpg';
import loginDesktop from '../../images/login/loginDesktop.jpg';
import loginDesktop_2x from '../../images/login/loginDesktop@2x.jpg';
import dogEmoji from '../../images/dog/dogEmoji.png';
import dogEmoji_2x from '../../images/dog/dogEmoji@2x.png';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={css.loginPageWrapper}>
      <div className={css.petBlockWrapper}>
        <PetBlock
          mobile={loginMobile}
          mobile2x={loginMobile_2x}
          tablet={loginTablet}
          tablet2x={loginTablet_2x}
          desktop={loginDesktop}
          desktop2x={loginDesktop_2x}
          petName="Rich"
          petBirthday="21.09.2020"
          petDescription="Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"
          avatarSrc={dogEmoji}
          avatarSrc_2x={dogEmoji_2x}
        />
      </div>
      <div className={css.formWrapper}>
        <Title title="Log in" />
        <p className={css.formDesc}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
