import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { asideLidt } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHomePage: true,
    };
  }

  renderHeader() {
    return (
      <div className="header-contont">
        <div className="header-left">Blue Sky 企业管理平台</div>
        <div className="header-right">admin</div>
      </div>
    );
  }

  renderFooter() {
    return (
      <div className="footer-contont">
        © Bule Sky 2019
      </div>
    );
  }

  renderAside() {
    return (
      <div className="aside-content menu">
        <ul class="menu-list">
          <li><a class="is-active">Dashboard</a></li>
          <li><a>Customers</a></li>
          <li><a>Team Settings</a></li>
          <li>
            <a>Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage</a></li>
          <li><a>Authentication</a></li>
        </ul>
      </div>
    );
  }

  renderPersonalInfo() {
    return (
      <div className="layout-right column is-3">
        <div className="right-content">
          个人信息
        </div>
      </div>
    );
  }

  render() {
    const { isHomePage } = this.state;
    return (
      <div className="page-container container is-fluid">
        <header className="layout-header">
          {this.renderHeader()}
        </header>
        <div className="main-content columns">
          <aside className="layout-aside column is-3">
            {this.renderAside()}
          </aside>
          <main className="layout-main column">
            {this.props.children}
          </main>
          {isHomePage && this.renderPersonalInfo()}
        </div>
        <footer className="layout-footer">
          {this.renderFooter()}
        </footer>
      </div>
    );
  }

}

export default App;
