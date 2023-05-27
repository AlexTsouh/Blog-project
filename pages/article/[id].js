import Head from 'next/head';
import { useRouter } from 'next/router';
import { articles } from '../../db/articles';
import Header from '../../components/Header';
import { authors } from '../../db/authors';

export default function Article() {
  const router = useRouter();
  const article = articles.filter((post) => post.id == router.query.id)[0];

  return (
    <div>
      <div id="wrapper">
        <Header />

        <div id="main">
          <article className="post">
            <header>
              <div className="title">
                <h2>
                  <a href="">{article?.title}</a>
                </h2>
                <p>{article?.subtitle}</p>
              </div>
              <div className="meta">
                <a href="#" className="author">
                  <span className="name">
                    {authors[article?.author - 1]?.name}
                  </span>
                </a>
                <time className="published" datetime="">
                  {article?.published}
                </time>
                <div className="author">
                  <img src={authors[article?.author - 1]?.pfp} alt=""></img>
                </div>
              </div>
            </header>
            <img src={article?.img} alt=""></img>
            <p
              dangerouslySetInnerHTML={{
                __html: article?.body,
              }}
            ></p>
            <footer></footer>
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
    </div>
  );
}
