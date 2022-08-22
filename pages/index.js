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
        <Header title="Cornifer's Work." />
        <p className="description">
          yeah apparently I wanted one so here it is
        </p>
        <Header title="Games" />
        <p>
          I participated in the kenney jam
        </p>
        <p>
          <iframe src="https://itch.io/embed/1670737?linkback=true&amp;bg_color=9d8bc2&amp;fg_color=faf8ff&amp;link_color=faf8ff&amp;border_color=faf8ff" width="552" height="167" frameborder="0"><a href="https://coolio-caves.itch.io/endless-survival-game">Endless survival game by Cornifer_Caves</a></iframe>
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
