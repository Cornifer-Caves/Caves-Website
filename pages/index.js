import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
<iframe height="167" frameborder="0" src="https://itch.io/embed/1630636" width="552"><a href="https://coolio-caves.itch.io/p0ng-i">p0ng = i by Cornifer_Caves</a></iframe>
      </main>

      <Footer />
    </div>
  )
}
