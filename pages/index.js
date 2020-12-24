import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>KIR•OO•PAH</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="h-screen bg-black">
        <section className="items-center text-accent1 body-font">
          <div className="container flex flex-col items-center justify-center px-5 py-32 mx-auto md:py-5">
            <Image
              src="/logo_big.png"
              alt="Kiroopah Big Logo"
              quality={100}
              className="object-cover object-center w-5/6 mb-5 rounded lg:w-2/6 md:w-3/6"
              width={1000}
              height={500}
            />
            <div className="w-full text-center lg:w-2/3">
              <h1 className="mb-8 text-3xl font-bold text-accent1 title-font sm:text-4xl">Drop 2 - Coming Soon</h1>
              <div className="flex justify-center">
                <a href="https://www.instagram.com/kir.oo.pah/">
                  <button className="inline-flex px-6 py-2 text-lg bg-black border-2 rounded-md text-accent1 hover:text-black hover:bg-accent1">Instagram</button>
                </a>
                <a href="https://twitter.com/Kajanth_K">
                  <button className="inline-flex px-6 py-2 ml-4 text-lg text-black border-2 rounded-md bg-accent1 hover:bg-black hover:text-accent1">Twitter</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className="">

      </footer> */}
    </div>
  )
}
