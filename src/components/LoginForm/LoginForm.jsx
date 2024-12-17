import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { signinUser } from '../../redux/users/operations.js';
import icons from '../../images/sprite/sprite.svg';
import css from './LoginForm.module.css';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Email must be a valid email address',
    )
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required'),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [redirectToProfile, setRedirectToProfile] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async data => {
    try {
      const response = await dispatch(signinUser(data)).unwrap();
      localStorage.setItem('token', response.token);
      setRedirectToProfile(true);
      reset();
    } catch (error) {
      toast.error(error.message || 'Something went wrong');
    }
  };

  if (redirectToProfile) {
    return <Navigate to="/profile" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.labelsWrapper}>
        <label className={css.loginFormLabel}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={clsx(css.loginFormInput, {
              [css.errorBorder]: errors.email,
              [css.successBorder]: !errors.email && watch('email'),
            })}
            {...register('email')}
          />
          <svg className={css.iconEmail}>
            <use
              href={`${icons}#${
                errors.email
                  ? 'cross'
                  : watch('email') && !errors.email
                  ? 'check'
                  : ''
              }`}
            />
          </svg>
          {errors.email && (
            <p className={css.errorText}>{errors.email.message}</p>
          )}
        </label>

        <label className={css.loginFormLabel}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className={clsx(css.loginFormInput, {
              [css.errorBorder]: errors.password,
              [css.successBorder]: !errors.password && watch('password'),
            })}
            {...register('password')}
          />
          <svg className={css.iconPassword}>
            <use
              href={`${icons}#${
                errors.password
                  ? 'cross'
                  : watch('password') && !errors.password
                  ? 'check'
                  : ''
              }`}
            />
          </svg>
          <svg
            onClick={() => setShowPassword(!showPassword)}
            className={css.eyeIcon}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <use href={`${icons}#eyeOff`} />
            ) : (
              <use href={`${icons}#eye`} />
            )}
          </svg>
          {errors.password ? (
            <p className={css.errorText}>{errors.password.message}</p>
          ) : (
            watch('password') &&
            !errors.password && (
              <p className={css.successText}>Password is secure</p>
            )
          )}
        </label>
      </div>

      <button type="submit" className={css.formBtn}>
        Log in
      </button>

      <div className={css.spanWrapper}>
        <span className={css.formSpan}>
          Don&rsquo;t have an account?{' '}
          <Link to="/register" className={css.registerLink}>
            Register
          </Link>
        </span>
      </div>
    </form>
  );
}
