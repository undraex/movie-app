"use client";
import Image from "next/image";
import Header from "@/_features/Header";
import Footer from "@/_features/Footer";
import HeroSection from "@/_features/home/HeroSection";
import UpcomingMovieList from "@/_features/home/UpcomingMovieList";
import PopularMovieList from "@/_features/home/PopularMovieList";
import TopRatedMovieList from "@/_features/home/TopRatedMovieList";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center box-border">
      <Header />
      <HeroSection />
      <UpcomingMovieList />
      <PopularMovieList />
      <TopRatedMovieList />
      <Footer />
    </div>
  );
}
