import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogin, startLogout } from "../actions/auth";

export const Header = ({ startLogin, startLogout, uid }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link to="/" className="header__title">
            <h1>BLOGMUNSTER</h1>
          </Link>
          {uid ? (
            <button className="button" onClick={startLogout}>
              Logout
            </button>
          ) : (
            <button className="button" onClick={startLogin}>
              Login with Google
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  uid: state.auth.uid,
});

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
