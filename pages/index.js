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
        <p>
          Hi my name is cornifer, I make bad games badly.
        </p>
        <p>
          And apparently bad websites too!
        </p>
        <p className="description">
          I'm an amature game developer who's been using godot for about 6 months
        </p>
        <p>
          my whole thing is being bad at game dev as I'm still learning.
        </p>
        <p>
          I make videos and stream once in a blue moon.
        </p>
        <p>
          And, if it matters to you I go by he/they.
        </p>
          
     <ul>
       <li><a href="https://www.youtube.com/channel/UCdDG5aOkGhZzWIfIP9v3chA">Youtube</a></li>
       <li><a href="https://www.twitch.tv/garfieldcatboy">Twitch</a></li>
       <li><a href="https://discord.gg/NV8d5hrGBE">Discord</a></li>
       <li><a href="https://coolio-caves.itch.io">Itch.io</a></li>
       <li><a href="games.js">Games</a></li>
       <li><a href="https://coolio-caves.netlify.app">Videos</a></li>
       <li><a href="https://coolio-caves.netlify.app">About</a></li>
     </ul> 
      </main>
     <Footer />
    </body>
    </div>
  )
}
