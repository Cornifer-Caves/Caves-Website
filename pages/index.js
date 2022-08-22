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
          I'm an amature game developer who's been using godot for about 6 months
        </p>
        <p>
          
     <ul>
       <li><a href="https://coolio-caves.netlify.app">about</a></li>
       <li><a href="https://coolio-caves.netlify.app">games</a></li>
       <li><a href="https://coolio-caves.netlify.app">videos</a></li>
       <li><a href="https://www.youtube.com/channel/UCdDG5aOkGhZzWIfIP9v3chA">youtube</a></li>
       <li><a href="https://www.twitch.tv/garfieldcatboy">twitch</a></li>
       <li><a href="https://discord.gg/NV8d5hrGBE">discord</a></li>
       <li><a href="https://coolio-caves.itch.io">itch.io</a></li>
     </ul> 
      </main>
     <Footer />
    </body>
    </div>
  )
}
