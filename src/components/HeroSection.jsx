import React from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function HeroSection() {
  return (
    <AnimatedSection className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-gray-900 via-black to-black">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Deteksi Otomatis Menggunakan{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              YOLOv8
            </span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300">
            untuk menentukan Bidang Standar USG Janin dan Struktur Anatomi Utama
            Terkait pada Trimester Pertama
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="inline-flex items-center border border-gray-900 px-6 py-3 text-lg font-medium text-white bg-black rounded-lg hover:bg-[#070707] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              Lihat Penelitian
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
