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
      <main>
        <Header title="Cornifer has a website!?" />
        <p className="description">
          yeah apparently I wanted one so here it is
        </p>
        <Header title="Who is cornifer" />
        <p>
          If you dont know me I make amature games on my itch.io
        </p>
        <p>
          <a href="https://coolio-caves.itch.io/">coolio-caves.itch.io</a>
        </p>        
        <p>
          keep up with my itch because Im always doing jams!
        </p>
        <p>
          I make videos aswell though on youtube
        </p>
        <p>
          <a href="https://www.youtube.com/channel/UCdDG5aOkGhZzWIfIP9v3chA">My Youtube</a>
        </p>  
      </main>
      <Footer />
    </div>
  )
}
