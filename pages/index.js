import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>a-coolio-site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <body>
      <main>
        <Header title="Cornifer has a website!?" />
        <p className="description">
          yeah apparently I wanted one so here it is
        </p>
     <ul>
       <li><a href="#https://coolio-caves.netlify.app/">Home</a></li>
       <li><a href="https://coolio-caves.netlify.app/">News</a></li>
       <li><a href="https://coolio-caves.netlify.app">Contact</a></li>
     </ul> 
      </main>
     <Footer />
    </body>
    </div>
  )
}
