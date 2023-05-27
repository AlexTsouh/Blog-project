import Head from 'next/head';
import Header from '../components/Header';
import { articles } from '../db/articles';
import { authors } from '../db/authors';

export default function Home() {
  console.log(authors);
  return (
    <div>
      <div id="wrapper">
        <Header />

        <section id="menu">
          <section>
            <form className="search" method="get" action="#">
              <input type="text" name="query" placeholder="Search" />
            </form>
          </section>
        </section>

        <div id="main">
          {articles.map((article) => {
            return (
              <article className="post">
                <header>
                  <div className="title">
                    <h2>
                      <a href={'article/' + article.id}>{article.title}</a>
                    </h2>
                    <p>{article.subtitle}</p>
                  </div>
                  <div className="meta">
                    <a
                      href={'/viewauthor/' + authors[article.author - 1]?.id}
                      className="author"
                    >
                      {authors[article.author - 1]?.name}
                    </a>
                    <time className="published" datetime="">
                      {article.published}
                    </time>
                    <div className="author">
                      <img src={authors[article.author - 1]?.pfp} alt=""></img>
                    </div>
                  </div>
                </header>
                <p
                  dangerouslySetInnerHTML={{
                    __html: article.body.substring(0, 350) + '...',
                  }}
                ></p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a
                        href={'article/' + article.id}
                        className="button large"
                      >
                        Continue Reading
                      </a>
                    </li>
                  </ul>
                </footer>
              </article>
            );
          })}
        </div>

        <section id="sidebar">
          <section id="intro">
            <header>
              <h2>Future Imperfect</h2>
              <p>By: Alex Tsouchnenko/Αλεξανδρος Τσουχνένκο</p>
            </header>
          </section>
          <section id="footer">
            <p className="copyright"></p>
          </section>
        </section>
      </div>
    </div>
  );
}
