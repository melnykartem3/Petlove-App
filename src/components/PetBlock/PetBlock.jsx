import css from './PetBlock.module.css';

export default function PetBlock({
  mobile,
  mobile2x,
  tablet,
  tablet2x,
  desktop,
  desktop2x,
  petName,
  petBirthday,
  petDescription,
  avatarSrc,
  avatarSrc_2x,
}) {
  return (
    <>
      <picture>
        <source
          srcSet={`${desktop} 1x, ${desktop2x} 2x`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${tablet} 1x, ${tablet2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${mobile} 1x, ${mobile2x} 2x`}
          media="(max-width: 767px)"
        />
        <img src={mobile} alt="Pet image" className={css.image} />
      </picture>

      <div className={css.cardWrapper}>
        <div className={css.petAvatarWrapper}>
          <picture>
            <source
              srcSet={`${avatarSrc} 1x, ${avatarSrc_2x} 2x`}
              media="(min-width: 768px)"
            />
            <img src={avatarSrc} alt="Pet avatar" className={css.petAvatar} />
          </picture>
        </div>
        <div>
          <div className={css.descWrapper}>
            <h3 className={css.nameTitle}>{petName}</h3>
            <p className={css.petDesc}>
              Birthday: <span className={css.birthdaySpan}>{petBirthday}</span>
            </p>
          </div>
          <p className={css.petDesc}>{petDescription}</p>
        </div>
      </div>
    </>
  );
}
