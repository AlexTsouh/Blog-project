import Head from 'next/head';
import { useState } from 'react';
import { articles } from '../db/articles';
import Header from '../components/Header';

export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <div id="wrapper">
        <Header />

        <article className="post">
          <section>
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div></div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <li>
                <button onClick={() => submit(username, password)}>
                  Submit
                </button>
              </li>
            </div>
          </section>
        </article>
      </div>
      <section id="sidebar">
        <section id="intro">
          <header>
            <h2>Future Imperfect</h2>
            <p>Blog</p>
          </header>
        </section>
        <section id="footer">
          <p className="copyright"></p>
        </section>
      </section>
    </div>
  );
}

function submit(user, pass) {
  console.log(user + '   ' + pass);
  localStorage.setItem('username', user);
  localStorage.setItem('password', pass);
}
