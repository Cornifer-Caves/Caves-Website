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
        <Header title="Who is Cornifer" />
        <p>
          My name, cornifer, is from the game hollow knight (which i havent yet beat).
        </p>
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
        <p>
          I have more to say but to see that,
        </p> 
          join <a href="https://discord.gg/NV8d5hrGBE">my discord :3</a>
        <p>
          <img src="https://i.ibb.co/jHjBXB7/spirit.png" alt="A cartoon ghost" />
        </p>
          <p>
          Music by <a href="https://www.youtube.com/c/flowerhead">FlowerHead</a> I need to make it autoplay
        </p>
        <iframe src="https://drive.google.com/file/d/1vQJFGE2A9KV2E5j3ePiPO3ajgLG533m9/preview" width="320" height="64" allow="autoplay"></iframe>
      </main>
    </body>
      <Footer />
    </div>
  )
}
