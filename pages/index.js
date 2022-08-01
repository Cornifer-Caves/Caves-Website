import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>coolio-site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="My name is cornifer_caves. I make bad games badly" />
    <h1>Games<h1>
    <p> my slogan is "I make bad games badly" however there some quality in there :3 <p>
<iframe height="167" frameborder="0" src="https://itch.io/embed/1630636" width="552"><a href="https://coolio-caves.itch.io/p0ng-i">p0ng = i by Cornifer_Caves</a></iframe>
    <p> This my most recent game however I'm always cooking up something new <p>
      </main>

      <Footer />
    </div>
  )
}
