import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { signupUser } from '../../redux/users/operations.js';
import icons from '../../images/sprite/sprite.svg';
import css from './RegistrationForm.module.css';

const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Email must be a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [redirectToProfile, setRedirectToProfile] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit = async data => {
    try {
      const { confirmPassword, ...userData } = data;
      const response = await dispatch(signupUser(userData)).unwrap();
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
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.labelsWrapper}>
        <label className={css.registerFormLabel}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={clsx(css.registerFormInput, {
              [css.errorBorder]: errors.name,
              [css.successBorder]: !errors.name && watch('name'),
            })}
            {...register('name')}
          />
          <svg className={css.iconEmail}>
            <use
              href={`${icons}#${
                errors.name
                  ? 'cross'
                  : watch('name') && !errors.name
                  ? 'check'
                  : ''
              }`}
            />
          </svg>
          {errors.name && (
            <p className={css.errorText}>{errors.name.message}</p>
          )}
        </label>

        <label className={css.registerFormLabel}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={clsx(css.registerFormInput, {
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

        <label className={css.registerFormLabel}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className={clsx(css.registerFormInput, {
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
            <use href={`${icons}#${showPassword ? 'eyeOff' : 'eye'}`} />
          </svg>
          {errors.password && (
            <p className={css.errorText}>{errors.password.message}</p>
          )}
        </label>

        <label className={css.registerFormLabel}>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm password"
            className={clsx(css.registerFormInput, {
              [css.errorBorder]: errors.confirmPassword,
              [css.successBorder]:
                !errors.confirmPassword && watch('confirmPassword'),
            })}
            {...register('confirmPassword')}
          />
          <svg className={css.iconPassword}>
            <use
              href={`${icons}#${
                errors.confirmPassword
                  ? 'cross'
                  : watch('confirmPassword') && !errors.confirmPassword
                  ? 'check'
                  : ''
              }`}
            />
          </svg>
          <svg
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={css.eyeIcon}
            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
          >
            <use href={`${icons}#${showConfirmPassword ? 'eyeOff' : 'eye'}`} />
          </svg>
          {errors.confirmPassword && (
            <p className={css.errorText}>{errors.confirmPassword.message}</p>
          )}
        </label>
      </div>

      <button type="submit" className={css.formBtn}>
        Registration
      </button>

      <div className={css.spanWrapper}>
        <span className={css.formSpan}>
          Already have an account?{' '}
          <Link to="/login" className={css.loginLink}>
            Login
          </Link>
        </span>
      </div>
    </form>
  );
}
