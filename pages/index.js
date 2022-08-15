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
          Yeah apparently I wanted one so here it is!
        </p>
        <Header title="Who is Cornifer" />
        <p>
          My name is cornifer, I'm an amature game developer
        </p>
        <p>
        that uses the godot game engine.
        </p>
        <p>
          I stream and make videos aswell.
        </p>
        <p>
          I have a discord that's just chill place to hangout
        </p>
      </main>
      <div class="fixed">
        <a href="https://discord.gg/NV8d5hrGBE" target="_blank">
         <img src="/Discord.png" alt="https://discord.gg/NV8d5hrGBE" width="64" height="64"/>
        </a>
        <a href="https://twitch.tv/garfieldcatboy" target="_blank">
         <img src="/Twitch.png" alt="https://twitch.tv/garfieldcatboy" width="64" height="64"/>
        </a>
        <a href="https://coolio-caves.itch.io/" target="_blank">
         <img src="/itchio.png" alt="https://coolio-caves.itch.io/" width="64"height="64"/>
        </a>
        <a href="https://www.youtube.com/channel/UCdDG5aOkGhZzWIfIP9v3chA" target="_blank">
         <img src="/Youtube.png" alt="https://www.youtube.com/channel/UCdDG5aOkGhZzWIfIP9v3chA" width="64" height="64"/>
        </a>

      </div> 
    </body>
      <Footer />
    </div>
  )
}
