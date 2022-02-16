import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router';
import {format} from "date-fns"
import InfoCard from '../components/InfoCard';



function Search({data}) {

    const router = useRouter();

  

    // ES6 Destructing 
    const {location, startDate, endDate, noOfGuests} = router.query;

    const formattedStartDate = format( new Date(startDate), "dd MMMM yyyy")
    const formattedEndDate = format( new Date(endDate), "dd MMMM yyyy")

    const range = `${formattedStartDate} - ${formattedEndDate}`


  return (
      <div className=''>
          <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
          {/* represents the main part of the page*/}
          <main className='flex'>
              <section className='flex-grow pt-14 px-6'>
                  <p className='text-xs'>300 + Stays - {range} for {noOfGuests} number of guests</p>
                  <h1 className='text-3xl font-semibold mt-2 mb-7'>Stays in {location}</h1>

                  {/* button filters  */}
                  <div className='hidden lg:inline-flex mb-5 space-x-3
                  text-gray-800 whitespace-nowrap
                  '>
                      <p className='px-4 py-2 border rounded-full 
                      cursor-pointer hover:shadow-lg active:scale-95
                       active:bg-gray-100 transition transform duration-100'>Free cancellation</p>
                      <p className='px-4 py-2 border rounded-full 
                      cursor-pointer hover:shadow-lg active:scale-95
                       active:bg-gray-100 transition transform duration-100'>Beachfront</p>
                      <p className='px-4 py-2 border rounded-full 
                      cursor-pointer hover:shadow-lg active:scale-95
                       active:bg-gray-100 transition transform duration-100'>Pool</p>
                      <p className='px-4 py-2 border rounded-full 
                      cursor-pointer hover:shadow-lg active:scale-95
                       active:bg-gray-100 transition transform duration-100' >Wifi</p>
                      <p className='px-4 py-2 border rounded-full 
                      cursor-pointer hover:shadow-lg active:scale-95
                       active:bg-gray-100 transition transform duration-100'>Price</p>
                      <p className='px-4 py-2 border rounded-full 
                      cursor-pointer hover:shadow-lg active:scale-95
                       active:bg-gray-100 transition transform duration-100'>Rooms and Beds</p>
                  </div>
                   
                   <div className='flex flex-col'>
                   {data?.map( item => (
                        <InfoCard
                        key={item.img}
                        img= {item.img}
                        location = {item.location}
                        title = {item.title}
                        description = {item.description}
                        star = {item.star}
                        price = {item.price}
                        total = {item.total}
                        />
                   ))}

                   </div>
                  

                  
              </section>

          </main>


          <Footer/>
      </div>
  )
}

export default Search;


// this is a static search props that the date doesn't change 
export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz")
    const data = await searchResults.json()
   
    return {props: {data},} // will be passed to the page component as props
}






