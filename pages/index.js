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
      </main>
      <div class="fixed">
        <a href="https://discord.gg/NV8d5hrGBE" target="_blank">
         <img src="/Discord.png" alt="https://discord.gg/NV8d5hrGBE" width="64" height="64"/>
        </a>
        <a href="https://twitch.tv/garfieldcatboy" target="_blank">
         <img src="/Twitch.png" alt="https://twitch.tv/garfieldcatboy" width="64" height="64"/>
        </a>
        <a href="https://www.youtube.com/channel/UCdDG5aOkGhZzWIfIP9v3chA" target="_blank">
         <img src="/Youtube.png" alt="https://www.youtube.com/channel/UCdDG5aOkGhZzWIfIP9v3chA" width="64" height="64"/>
        </a>
        <a href="https://coolio-caves.itch.io/" target="_blank">
         <img src="/itchio.png" alt="https://coolio-caves.itch.io/" width="64"height="64"/>
        </a>

      </div> 
    </body>
      <Footer />
    </div>
  )
}
