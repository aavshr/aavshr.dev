import Head from 'next/head'
import Layout from '../../components/layout.js'
import utilStyles from '../../styles/utils.module.css'

export default function Anchor() {
  return (
    <Layout>
      <Head>
        <title> Anchor </title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Anchor</h1>
        <div>
          <p> A chrome extension to link to specific part of a webpage.</p>
          <iframe
            allowFullScreen
            frameborder="0"
            height="315"
            src="https://youtube.com/embed/fN5kLEhzKN4"
            width="560"
          />
          <br/>
          <a href="https://github.com/aavshr/anchor">Source</a>
        </div>
      </article>
    </Layout>
  )
}