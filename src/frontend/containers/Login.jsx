import React from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/styles.css';
import logo from '../assets/static/logo-stephenkingmania.png';

const Login = () => {
  // eslint-disable-next-line prefer-const
  let history = useHistory();
  const handleSubmit = () => {
    history.push('/');
  };
  return (
    <section>
      <div className='contenedorcito'>
        <div className=''>
          <div className='container align-self-center'>
            <div className='px-6'>
              <img className='logincito' src={logo} alt='Logo StephenKingMania' />
              <h1 className='navbar-brand mb-4'>StephenKingMania</h1>
              <h2 className='main__font__color mb-0'>Bienvenido</h2>
              <p className='second__font__color'>Inicia sesión para continuar.</p>
              <form className='mt-4'>
                <div className='form-group'>
                  <label className='main__font__color font-weight-bold'>
                    Email
                    {' '}
                    <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='email'
                    className='input form-control '
                    placeholder='Ingresa tu email'
                    name='username'
                    value=''
                    onChange=''
                  />
                </div>
                <div className='form-group'>
                  <label className='main__font__color font-weight-bold'>
                    Contraseña
                    {' '}
                    <i className='icon ion-md-lock' />
                    <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='password'
                    className='input form-control '
                    placeholder='Ingresa tu contraseña'
                    name='password'
                    value='{this.props.password}'
                    onChange='{this.handleChange}'
                  />
                </div>
                <button
                  type='button'
                  className='btn  w-100 mt-4  button'
                  onClick={handleSubmit}
                >
                    Iniciar sesión
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='col-lg-7 col-md-12 login-bg' />
      </div>
    </section>
  );
};

export default Login;
