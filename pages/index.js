import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'


function Home({posts, cards}) {
   
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>


      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {/* pull some data from a server - API endpoints */}
         {posts?.map((post) => (
           // passing the items 
          <SmallCard 
          key={post.img}
          img={post.img} 
          distance={post.distance} 
          location={post.location} />
       
         ))}
          </div>
        </section>

{/* anywhere posts  */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>
            Live Anywhere
          </h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-4'>
          {cards?.map((card) => (
           // passing the items 
          <MediumCard
          key={card.img}
          img={card.img}
          title={card.title}
          />
       
         ))}
          </div>
        </section>

        <LargeCard
           img={"https://links.papareact.com/4cj"}
           title="The Greatest Outdoors"
           description="Wishlists curated by Airbnb."
           buttonText="Get Inspired"

        />
      </main>

      {/* footer that includes the info */}


        <Footer/>


    </div>
  )
}


// Fetching the data using await fetch from the links 
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
  const posts = await exploreData.json()

  const cardsData = await fetch("https://links.papareact.com/zp1")
  const cards = await cardsData.json()


  return {
    props: {
      posts,
      cards
    }, // will be passed to the page component as props
  }
}

export default Home




 



  


