import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"
import Code from "./Code";
import { useParams } from "react-router-dom";
import "../core/styles/Blogs.css";

const BlogPost = () => {
  const [postContent, setPostcontent] = useState('')
  const [isDark, setIsDark] = useState(true)
  const {id} = useParams();
  useEffect(() => {
    import(`/public/blogs/blog${id}.md`)
      .then(res =>
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostcontent(response))
          .catch(err => console.log(err))
      )
  }, [])

  return (
    <div className="article-wrapper">
      <article>
        {/* <header>
          <div className="article__cover">
            <img
              src={cover}
              alt="my-cover"
            />
          </div>
        </header> */}
        <main>
          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                  props: {
                    isDark,
                    setIsDark
                  }
                }
              }
            }}
          >
            {postContent}
          </Markdown>
        </main>
      </article>
    </div>
  )
}

export default BlogPost