import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import { Twitter, Github, Linkedin, BookOpen, Youtube, Facebook } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-gray-900 text-white py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              We are the music-makers<br />
              And we are the dreamers<br />
              of dreams
            </h1>
            <div className="w-16 h-1 bg-white mb-8"></div>
            <p className="text-lg md:text-xl mb-8 max-w-3xl">
              It's not the money made, the records broken, the trophies won, or the accolades that matter. We are a team of designers, entrepreneurs, and engineers committed to create a positive impact with software.
            </p>
            <Link 
              href="/contact" 
              className="inline-block text-yellow-300 text-lg font-semibold hover:text-yellow-400 transition duration-300"
            >
              → Let's make something that matters.
            </Link>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">We Believe</h2>
              <p className="text-lg md:text-xl max-w-2xl">
                Our values are more than words. They are the high-order bits that guide everything we do.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "DO WHAT IS RIGHT",
                  description: "The work we do is for our clients, not for ourselves. We give more than we take and never compromise the long-term. We believe in mutual and genuine respect – respect for each other and respect for the rules. We are honest and fair in all situations. Always."
                },
                {
                  title: "TEAMWORK",
                  description: "We achieve great things, together. We are inclusive and embrace different perspectives to make better decisions. We work together in the open source way and share information that contributes to the work of others."
                },
                {
                  title: "GET BETTER",
                  description: "We are never done learning. We cultivate a beginner's mind. We stay humble and improve ourselves with discipline and hard work. We love our work and seek its mastery."
                },
                {
                  title: "EXCELLENCE",
                  description: "We have care with everything we do and never settle for anything less than our very best. We pay attention to all things large and small. We are thoughtful and intentional to the last detail."
                },
                {
                  title: "INNOVATION",
                  description: "Creativity is thinking new things. Innovation is doing new things. We deliver results and have a bias for action. We show, not tell."
                }
              ].map((value, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                  <h3 className="text-xl md:text-2xl font-bold md:w-1/3">{value.title}</h3>
                  <p className="text-base md:text-lg md:w-2/3">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Our<br />Partners</h2>
              <p className="text-lg md:text-xl max-w-2xl">
                These companies aren't trophies – they are our most trusted collaborators. The work we do wouldn't be possible without them.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <Image src="/Red-Hat-Premier-Partner-Badge.svg" alt="Red Hat Premier Partner" width={200} height={100} className="w-40 md:w-48 h-auto" />
              <Image src="/AWS-Advanced-Consulting-Partner-Badge.svg" alt="AWS Advanced Consulting Partner" width={200} height={100} className="w-40 md:w-48 h-auto" />
              <Image src="/NVIDIA-Inception-Program-Badge.svg" alt="NVIDIA Inception Program" width={200} height={100} className="w-40 md:w-48 h-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm md:text-base mb-4">Astellent is a Red Hat Premier Solution Provider with specializations in Data Center Infrastructure, Middleware, Solutions, and Cloud Infrastructure. Astellent is a member of the Red Hat Application Platform Partner Initiative, a select program for solution-oriented consulting partners focused on open source middleware and digital transformation.</p>
              </div>
              <div>
                <p className="text-sm md:text-base mb-4">Astellent is an Amazon Web Services Advanced Consulting Partner. Astellent specializes in Big Data, Machine Learning, and DevOps competencies.</p>
              </div>
              <div>
                <p className="text-sm md:text-base mb-4">Astellent is a member of the NVIDIA Inception Program developed to nurture dedicated and exceptional startups who are revolutionizing industries with advances in AI and data science.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <p className="text-base md:text-lg mb-6 md:mb-8">Astellent is a consulting company that improves how software is designed, developed, and delivered to help organizations achieve more.</p>
            <p className="text-base md:text-lg mb-8 md:mb-12">We believe the future will be built with software, data, and hard work. We collaborate with ambitious people who use cloud services and machine intelligence to make things that matter.</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Say Hello.</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">VISIT US AT OUR OFFICE</h3>
                <p>44 Tehama St<br />San Francisco, CA 94105</p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">START A CONVERSATION</h3>
                <p>hello@astellent.com<br />(510) 871-3240</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">© 2023 ASTELLENT INC.</p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter"><Twitter size={20} /></Link>
              <Link href="#" aria-label="GitHub"><Github size={20} /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin size={20} /></Link>
              <Link href="#" aria-label="Blog"><BookOpen size={20} /></Link>
              <Link href="#" aria-label="YouTube"><Youtube size={20} /></Link>
              <Link href="#" aria-label="Facebook"><Facebook size={20} /></Link>
            </div>
            <Link href="#" className="text-sm">PRIVACY POLICY</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}