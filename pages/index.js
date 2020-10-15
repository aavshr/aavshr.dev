import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts.js'
import Date from '../components/date.js'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Software Engineer @ 
          <a 
            href="https://deta.sh" 
            className = {`${utilStyles.detaLink}`}> 
            Deta
          </a> 
        </p>
        <p>Gopher 
        </p>
        <p></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
          <Link href="https://github.com/aavshr/fixCache">
            <a>FixCache</a>  
          </Link>
          <br/>
           <small className={utilStyles.lightText}>
            Github app to keep track of bug prone files from commit history
           </small>
          </li>
          <li className={utilStyles.listItem}>
          <Link href="https://github.com/aavshr/grt">
            <a>GRT</a>  
          </Link>
          <br/>
           <small className={utilStyles.lightText}>
            Track code review turnaround for your github repository
           </small>
          </li>
          <li className={utilStyles.listItem}>
          <Link href="/projects/anchor">
            <a>Anchor</a>  
          </Link>
          <br/>
           <small className={utilStyles.lightText}>
            A chrome extension to link to any specific part of a webpage
           </small>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Pointless Thoughts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
