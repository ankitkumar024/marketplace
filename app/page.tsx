import React from 'react';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrowseCategories from "@/components/Browsecategories";
import TrendingCollection from "@/components/TrendingCollection";
import TopCreators from '@/components/TopCreators';
import HowItWorks from '@/components/HowItWorks';
import DiscoverNFT from '@/components/DiscoverNFT';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main >
      <div className="md:p-10 p-5">
        <Navbar />
      </div>
      <Hero />
      <div className="md:p-10 p-5">
        <TrendingCollection />
        <TopCreators />
        <BrowseCategories />
        <DiscoverNFT />
        <HowItWorks />
        <Subscribe />
      </div>
      <Footer />

    </main>
  );
}
