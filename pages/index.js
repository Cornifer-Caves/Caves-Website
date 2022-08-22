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
        <ul>
          <li><a href="https://coolio-caves.itch.io/">Home</a></li>
          <li><a href="https://coolio-caves.itch.io/">News</a></li>
          <li><a href="https://coolio-caves.itch.io/">Contact</a></li>
        </ul>
    
    <body>
      <main>
        <Header title="Who is cornifer?." />
        <p className="description">
          I'm amature game developer who's been using godot for about 6 months
        </p>
        <p>
          not only do I make games I make videos and stream!
        </p>
        <p>
          I'm active in the 
         
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
    </div>
  )
}
