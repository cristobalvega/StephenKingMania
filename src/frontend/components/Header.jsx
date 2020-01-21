import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-stephenkingmania.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };
  // noinspection HtmlUnknownTarget
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='.header_options'>
        <nav className='menu'>
          <ol>
            <li>
                Inicio
            </li>
            <li>
                Comunidad
            </li>
            <li>
                Acerca de nosotros
            </li>
          </ol>
        </nav>
      </div>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          { hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='' />}
          <p>Perfil</p>
        </div>
        <ul>
          { hasUser ?
            <li><a href='/'>{ user.name }</a></li> :
            null}
          { hasUser ?
          // TODO: Cambiar los tags <a> por <button/> con estilos
            <li><a href='logout' onClick={handleLogout}>Cerrar Sesión</a></li> : (
              <li>
                <Link to='login'>
                    Iniciar Sesión
                </Link>
              </li>
            )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
