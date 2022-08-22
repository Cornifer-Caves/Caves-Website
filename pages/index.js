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
     <ul>
       <li><a href="#home">Home</a></li>
       <li><a href="#news">News</a></li>
       <li><a href="#contact">Contact</a></li>
       <li style="float:right"><a class="active" href="#about">About</a></li>
     </ul> 
      <main>
        <Header title="Cornifer has a website!?" />
        <p className="description">
          yeah apparently I wanted one so here it is
        </p>
      </main>
    </body>
    </div>
  )
}
