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
      <img src="https://i.ibb.co/jHjBXB7/spirit.png" alt="A cartoon ghost">
      <main>
        <Header title="Cornifer has a website!?" />
        <p className="description">
          yeah apparently I wanted one so here it is
        </p>
        <Header title="Who is cornifer" />
        <p>
          If you dont know me I make amature games on <a href="https://coolio-caves.itch.io/">my itch.io</a>
        </p>
        <p>
          keep up with my itch because Im always doing jams!
        </p>
        <p>
          I make videos aswell on <a href="https://www.youtube.com/channel/UCdDG5aOkGhZzWIfIP9v3chA">my Youtube</a>
        </p>
        <p>
          I make devlogs sometimes and keep people updated on my projects.
        </p> 
    </img>
      </main>
    </body>
      <Footer />
    </div>
  )
}
