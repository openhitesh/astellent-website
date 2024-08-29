import React from 'react';
import Link from 'next/link';
import { Brain, Cloud, Wrench } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            We improve how software is designed, developed, and delivered to help organizations achieve more
          </h1>
          <div className="w-16 h-1 bg-white mb-8"></div>
          <p className="text-xl mb-4">Software is eating the world.</p>
          <p className="text-xl mb-8">
            Organizations that combine the right technology, process, and culture are twice as likely to exceed their profitability, productivity, and market-share goals.
          </p>
          <Link 
            href="/contact" 
            className="inline-block text-yellow-300 text-lg font-semibold hover:text-yellow-400 transition duration-300"
          >
            → Let's work together.
          </Link>
        </div>
      </section>

      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24 text-gray-900 dark:text-white">
        <section className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Create<br />Your<br />Future
              </h2>
              <div className="w-16 h-1 bg-black dark:bg-white mb-6"></div>
            </div>
            <div>
            <p className="text-lg mb-6 text-gray-900 dark:text-white">
                Seven decades into the computer revolution. Five decades since the invention of the microprocessor. Three decades into the rise of the modern Internet. The technology to transform industries with software is now here at a global scale.
              </p>
              <p className="text-lg text-gray-900 dark:text-white">
                However, software is not the destination. It is the foundation of modern organizations.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div className="flex items-start space-x-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">ARTIFICIAL INTELLIGENCE</h2>
                <p className="text-lg mb-4 text-gray-900 dark:text-white">
                  Every organization benefits from more intelligence. Artificial Intelligence is not a platform or an isolated strategy; it is a crucial capability to make better decisions. We offer solutions for data strategy, data engineering, data science, and machine learning.
                </p>
                <Link 
                  href="/ai" 
                  className="inline-block bg-yellow-300 text-black px-4 py-2 font-semibold hover:bg-yellow-400 transition duration-300"
                >
                  LEARN MORE →
                </Link>
              </div>
              <div className="w-16 flex-shrink-0">
                <Brain size={64} className="text-gray-900 dark:text-white" />
              </div>
            </div>

            <div className="flex items-start space-x-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">CLOUD ENGINEERING</h2>
                <p className="text-lg mb-4">
                  Cloud engineering is more than technology. It is a strategic offering that brings together data-driven insights, culture, and technology. We offer solutions for cloud adoption, architecture, automation, migration, and governance.
                </p>
                <Link 
                  href="/cloud" 
                  className="inline-block bg-yellow-300 text-black px-4 py-2 font-semibold hover:bg-yellow-400 transition duration-300"
                >
                  LEARN MORE →
                </Link>
              </div>
              <div className="w-16 flex-shrink-0">
                <Cloud size={64} className="text-gray-900 dark:text-white" />
              </div>
            </div>

            <div className="flex items-start space-x-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">SOFTWARE ENGINEERING</h2>
                <p className="text-lg mb-4">
                  It does not matter how big you are, what industry you are in, or how regulated you are. Building software that matters has never been more important. We offer solutions for DevOps, application modernization, microservices, and product innovation.
                </p>
                <Link 
                  href="/software" 
                  className="inline-block bg-yellow-300 text-black px-4 py-2 font-semibold hover:bg-yellow-400 transition duration-300"
                >
                  LEARN MORE →
                </Link>
              </div>
              <div className="w-16 flex-shrink-0">
                <Wrench size={64} className="text-gray-900 dark:text-white" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}