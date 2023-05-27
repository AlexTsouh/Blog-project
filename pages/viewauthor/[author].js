import Head from 'next/head';
import { useRouter } from 'next/router';
import { articles } from '../../db/articles';
import { authors } from '../../db/authors';
import Header from '../../components/Header';

export default function Article() {
  const router = useRouter();
  const articlesFromAuthor = articles.filter(
    (post) => post.author == router.query.author
  );

  return (
    <div>
      <div id="wrapper">
        <Header />
        <div id="main">
          <div className="title">
            <p>Here are all af the current author's articles for now..</p>
          </div>
          {articlesFromAuthor.map((article) => {
            return (
              <article className="post">
                <header>
                  <div className="title">
                    <h2>
                      <a href={'../article/' + article.id}>{article.title}</a>
                    </h2>
                    <p>{article.subtitle}</p>
                  </div>
                  <div className="meta">
                    <a
                      href={'/viewauthor/' + article.author}
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
          {/* <article className="post">
            <header>
              <div className="title">
                <h2>
                  <a href="#">Upload article</a>
                </h2>
              </div>
            </header>
            <section>
              <h3>article</h3>
              <form method="post" action="#">
                <div className="row gtr-uniform">
                  <div className="col-6 col-12-xsmall">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Title"
                    />
                  </div>
                  <div></div>
                  <div className="col-6 col-12-xsmall">
                    <input
                      type="text"
                      name="subtitle"
                      id="subtitle"
                      placeholder="Sub-Title"
                    />
                  </div>
                  <div></div>
                  <div className="col-6 col-12-xsmall">
                    <input
                      type="text"
                      name="author"
                      id="author"
                      placeholder="Author"
                    />
                  </div>
                  <div></div>
                  <div className="col-6 col-12-xsmall">
                    <select name="demo-category" id="demo-category">
                      <option value="">- Category -</option>
                      <option value="1">Manufacturing</option>
                      <option value="1">Shipping</option>
                      <option value="1">Administration</option>
                      <option value="1">Human Resources</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <textarea
                      name="demo-message"
                      id="demo-message"
                      placeholder="Enter your text"
                      rows="6"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <ul className="actions">
                      <li>
                        <input type="submit" value="Send Message" />
                      </li>
                      <li>
                        <input type="reset" value="Reset" />
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </section>
          </article> */}
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
