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
        <p>
          If you dont know me I make amature games on my itch.io
        </p>
        <p>
          https://coolio-caves.itch.io/
        </p>        
        <p>
          If you dont know me I make amature games such as
        </p>
      </main>

      <Footer />
    </div>
  )
}
