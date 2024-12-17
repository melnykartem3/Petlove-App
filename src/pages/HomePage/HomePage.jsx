import Header from '../../components/Header/Header.jsx';
import homeMobile from '../../images/home/homeMobile.jpg';
import homeMobile_2x from '../../images/home/homeMobile@2x.jpg';
import homeTablet from '../../images/home/homeTablet.jpg';
import homeTablet_2x from '../../images/home/homeTablet@2x.jpg';
import homeDesktop from '../../images/home/homeDesktop.jpg';
import homeDesktop_2x from '../../images/home/homeDesktop@2x.jpg';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={css.contentWrapper}>
        <Header />
        <div className={css.secondWrapper}>
          <h1 className={css.homePageTitle}>
            Take good <span className={css.homePageSpan}>care</span> of your
            small pets
          </h1>
          <div className={css.descWrapper}>
            <p className={css.homePageDesc}>
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
        </div>
      </div>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${homeDesktop} 1x, ${homeDesktop_2x} 2x`}
          type="image/jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${homeTablet} 1x, ${homeTablet_2x} 2x`}
          type="image/jpg"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${homeMobile} 1x, ${homeMobile_2x} 2x`}
          type="image/jpg"
        />
        <img src={homeMobile} alt="Homepage image" className={css.image} />
      </picture>
    </>
  );
}
