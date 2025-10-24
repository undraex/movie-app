"use client";
import Image from "next/image";
import Header from "@/_features/Header";
import Footer from "@/_features/Footer";
import HeroSection from "@/_features/home/HeroSection";
import { useState, useEffect } from "react";
import MovieList from "@/_features/home/MovieList";

export default function Home() {
  return (
    <div className="flex flex-col items-center box-border">
      <Header />
      <HeroSection />
      <MovieList type="upcoming" />
      <MovieList type="popular" />
      <MovieList type="top_rated" />
      <Footer />
    </div>
  );
}
