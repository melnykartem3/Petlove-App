import { useState, useEffect } from 'react';
import loaderMobile from '../../images/loader/loaderMobile.jpg';
import loaderMobile_2x from '../../images/loader/loaderMobile@2x.jpg';
import loaderTablet from '../../images/loader/loaderTablet.jpg';
import loaderTablet_2x from '../../images/loader/loaderTablet@2x.jpg';
import loaderDesktop from '../../images/loader/loaderDesktop.jpg';
import loaderDesktop_2x from '../../images/loader/loaderDesktop@2x.jpg';
import css from './Loader.module.css';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 25 : 100));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${loaderDesktop} 1x, ${loaderDesktop_2x} 2x`}
          type="image/jpg"
          width="1280"
          height="800"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${loaderTablet} 1x, ${loaderTablet_2x} 2x`}
          type="image/jpg"
          width="768"
          height="1024"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${loaderMobile} 1x, ${loaderMobile_2x} 2x`}
          type="image/jpg"
          width="375"
          height="812"
        />
        <img src={loaderMobile} alt="Loader image" />
      </picture>

      <div className={css.progressContainer}>
        <div className={css.progressCircleWrapper}>
          <div
            className={css.progressCircle}
            style={{
              background: `conic-gradient(
                rgba(255, 255, 255, 0.3) ${progress * 3.6}deg, 
                transparent 0
              )`,
            }}
          >
            <div className={css.progressText}>{progress}%</div>
          </div>
        </div>
      </div>
    </>
  );
}
