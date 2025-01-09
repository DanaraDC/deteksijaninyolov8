import React from "react";
import { Brain, Scan, Binary, LineChart } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function MethodologySection({ id }) {
  const features = [
    {
      title: "YOLOv8 Model",
      description:
        "Implementasi state-of-the-art object detection untuk USG janin",
      icon: Brain,
    },
    {
      title: "Deteksi Otomatis",
      description: "Pengenalan bidang standar USG secara real-time",
      icon: Scan,
    },
    {
      title: "Deep Learning",
      description: "Pelatihan model menggunakan dataset USG trimester pertama",
      icon: Binary,
    },
    {
      title: "Analisis Akurat",
      description: "Evaluasi struktur anatomi dengan presisi tinggi",
      icon: LineChart,
    },
  ];

  return (
    <AnimatedSection>
      <section id={id} className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Metodologi Penelitian
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Menggunakan teknologi artificial intelligence terkini untuk
              meningkatkan akurasi diagnosis prenatal
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-gray-800 bg-black/50 p-6 backdrop-blur">
                <div className="flex items-center">
                  <feature.icon className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
