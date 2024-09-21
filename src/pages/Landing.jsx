import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import travelDayLogo from '../assets/td-logo.png';
import banner from '../assets/banner.jpg';
import makkah from '../assets/makkah.jpg';
import mandalika from '../assets/mandalika.jpg';
import australia from '../assets/australia.jpg';

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <nav className="flex justify-between items-center p-3 bg-blueBg shadow-md font-league-spartan">
      <div>
        <img src={travelDayLogo} alt="Travel Day Logo" className="w-24 h-auto ml-32" />
      </div>
      <div className="space-x-16 text-lg">
        <Link to="/" className="text-blueText hover:text-blue-600">Home</Link>
        <Link to="/destinations" className="text-blueText hover:text-blue-600">Destinations</Link>
        <Link to="/promo" className="text-blueText hover:text-blue-600">Promo</Link>
      </div>
      <button 
          onClick={handleLoginClick}
          className="text-blue-600 px-4 py-2 mr-32 rounded-full bg-white hover:bg-blue-100 transition-all flex items-center space-x-2">
          <i className="fa fa-user"></i>
          <span>Log in / Sign in</span>
      </button>
    </nav>
  );
};

const Highlight = () => {
  return (
    <div className="absolute top-[700px] w-full z-20 flex justify-center font-league-spartan">
      <div className="bg-white shadow-lg p-9 rounded-lg flex justify-between items-center w-[85%] max-w-4xl space-x-4">
        <div className="flex flex-col items-center text-center">
          <span className="text-[17px] font-semibold">Destination</span>
          <span className="text-[17px] text-mainBlue">Where are you going?</span>
        </div>
        <div className="h-12 border-l border-gray-300"></div>
        <div className="flex flex-col items-center text-center">
          <span className="text-[17px] font-semibold">Start Dates</span>
          <span className="text-[17px] text-mainBlue">Add dates</span>
        </div>
        <div className="h-12 border-l border-gray-300"></div>
        <div className="flex flex-col items-center text-center">
          <span className="text-[17px] font-semibold">End Dates</span>
          <span className="text-[17px] text-mainBlue">Add dates</span>
        </div>
        <div className="h-12 border-l border-gray-300"></div> 
        <div className="flex flex-col items-center text-center">
          <span className="text-[17px] font-semibold">Travellers</span>
          <span className="text-[17px] text-mainBlue">Who is traveling with you?</span>
        </div>
      </div>
    </div>
  );
};

const Destinations = () => {
  return (
    <section className="p-12 font-league-spartan bg-blueBg pt-36">
      <h2 className="text-[85px] font-extralight font-lora mb-[-30px] text-left text-blueText text-opacity-10 pl-24">
        Explore
      </h2>
      <h2 className="text-[45px] font-lora font-semibold mb-8 text-left text-blueText pl-24">
        Our Destinations
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 px-24 h-[530px]">
        {/* Australia Card */}
        <div className="relative bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <img src={australia} alt="Australia" className="w-full h-64 object-cover" />
          <div className="absolute top-customTop left-0 right-0 bottom-0 p-6 text-left bg-white rounded-t-3xl">

            <h3 className="text-2xl font-medium text-blueText flex justify-between items-center">
              Australia 
              <div className="flex space-x-1">
                <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
              </div>
            </h3>

            <p className="mt-4 text-gray-500">
              We offer a variety of travel packages, from budget-friendly adventures to luxury getaways, ensuring an unforgettable experience for all types of travelers and preferences
            </p>
            <div className="flex justify-between items-center mt-6">
              <button className="bg-mainBlue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Explore Now
              </button>
              <span className="text-lg text-mainBlue">IDR 3.998.000<span className='text-[11px] text-black font-medium'>  PER TOUR</span></span>
            </div>
          </div>
        </div>

        {/* Mandalika Card */}
        <div className="relative bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src={mandalika} alt="Makkah" className="w-full h-64 object-cover" />

            <div className="absolute top-customTop left-0 right-0 bottom-0 p-6 text-left bg-white rounded-t-3xl">
              <h3 className="text-2xl font-medium text-blueText flex justify-between items-center">
                Mandalika
                <div className="flex space-x-1">
                  <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                  <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                  <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                  <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                  <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                </div>
              </h3>
              <p className="mt-4 text-gray-500">
                We offer a variety of travel packages, from budget-friendly adventures to luxury getaways, ensuring an unforgettable experience for all types of travelers and preferences
              </p>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-mainBlue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  Explore Now
                </button>
                <span className="text-lg text-mainBlue">IDR 500.899<span className='text-[11px] text-black font-medium'>  PER TOUR</span></span>
              </div>
            </div>
          </div>

        {/* Makkah Card */}
          <div className="relative bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src={makkah} alt="Makkah" className="w-full h-64 object-cover" />

            <div className="absolute top-customTop left-0 right-0 bottom-0 p-6 text-left bg-white rounded-t-3xl">
              <h3 className="text-2xl font-medium text-blueText flex justify-between items-center">
                Makkah 
                <div className="flex space-x-1">
                  <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                  <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                  <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                  <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                  <i className="fa fa-star text-sm text-yellow-400" aria-hidden="true"></i>
                </div>
              </h3>
              <p className="mt-4 text-gray-500">
                We offer a variety of travel packages, from budget-friendly adventures to luxury getaways, ensuring an unforgettable experience for all types of travelers and preferences
              </p>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-mainBlue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  Explore Now
                </button>
                <span className="text-lg text-mainBlue">IDR 12.750.999<span className='text-[11px] text-black font-medium'>  PER TOUR</span></span>
              </div>
            </div>
          </div>

      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="font-league-spartan h-[680px] bg-cover bg-center text-white flex items-center justify-start relative" 
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blueText via-transparent to-transparent"></div>
        <div className="relative z-10 text-left pl-32">
          <h1 className="text-7xl font-semibold font-lora">Spend your holiday</h1>
          <p className="mt-10 text-[18px] max-w-lg">
            We offer a variety of travel packages, from budget-friendly adventures to luxury getaways, ensuring an unforgettable experience for all types of travelers and preferences.
          </p>
          <button className="mt-6 font-semibold bg-white text-blueText py-3 px-6 rounded-xl text-base hover:bg-blue-50">
            Explore Now
          </button>
        </div>
      </header>

      <Highlight />
      <Destinations />
    </div>
  );
};

export default Home;