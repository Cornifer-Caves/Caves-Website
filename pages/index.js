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

      <main>
        <Header title="Cornifer has a website!?" />
        <p className="description">
          yeah apparently I wanted one so here it is
        </p>
        <p className="description">
          If you dont know me I make amature games such as
        </p>
    <iframe width="552" height="167" frameborder="0" src="https://itch.io/embed/1628145"><a href="https://coolio-caves.itch.io/p0ng">p0ng by Cornifer_Caves</a></iframe>
      </main>

      <Footer />
    </div>
  )
}
