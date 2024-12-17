import css from './Title.module.css';

export default function Title({ title }) {
  return <h2 className={css.title}>{title}</h2>;
}
