import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart2, Cloud, Puzzle, Lightbulb } from 'lucide-react';

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="text-gray-900 dark:text-white">
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Don't predict the future.<br />Create it.
            </h1>
            <div className="w-16 h-1 bg-white mb-8"></div>
            <p className="text-xl mb-8 max-w-3xl">
              High-performing organizations deploy 200 times more frequently and have 40 percent better time-to-market.
            </p>
            <Link 
              href="mailto:hello@astellent.com" 
              className="inline-block text-yellow-300 text-lg font-semibold hover:text-yellow-400 transition duration-300"
            >
              → Let's make your software better.
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              <h2 className="text-4xl font-bold mb-4 md:mb-0">Our<br />Solutions</h2>
              <p className="text-xl max-w-2xl">
                We offer solutions for DevOps, application modernization, microservices, and innovation. Our team will work with your organization to achieve more with software.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "DEVOPS",
                  description: "DevOps is more than a set of tools. It is an approach to software development that emphasizes rapid, iterative work. We offer development and operations teams a common platform, practices, and tools. We automate integration, testing, and delivery so you can ship software with one click. We provide mentoring to improve teamwork, cultivate a creative culture, and navigate change.",
                  icon: <BarChart2 size={48} className="text-gray-900 dark:text-white" />
                },
                {
                  title: "APPLICATION MODERNIZATION",
                  description: "Organizations spend years investing in new business capabilities and acquisitions. Over time, this can result in a tangled mess of technology that wasn't designed for your business today. We remove technology roadblocks and transform your legacy applications. We preserve business logic and migrate to the best language, framework, and architecture.",
                  icon: <Cloud size={48} className="text-gray-900 dark:text-white" />
                },
                {
                  title: "MICROSERVICES AND CONTAINERS",
                  description: "Traditional monoliths have technological complexity and lengthy implementation cycles that limit business agility. We break down large applications into small microservices that provide a single function. Our team packages your services with containers and integrates with your software pipeline. We use Kubernetes to enable application load-balancing, auto-scaling, and policy-based control. We also deploy lightweight integration and API management for security and fault tolerance.",
                  icon: <Puzzle size={48} className="text-gray-900 dark:text-white" />
                },
                {
                  title: "PRODUCT INNOVATION",
                  description: "We love helping organizations use software to solve real problems. To work with us is to learn by doing. Our team pairs with you to improve how you build and deploy exceptional software. We practice test-driven development and short development cycles for high speed and quality. Our approach ensures you solve the right problem while remaining flexible to change.",
                  icon: <Lightbulb size={48} className="text-gray-900 dark:text-white" />
                }
              ].map((solution, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                  <div className="md:w-16 flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-lg mb-4">{solution.description}</p>
                    <Link 
                      href="mailto:hello@astellent.com" 
                      className="inline-block bg-yellow-300 text-black px-4 py-2 font-semibold hover:bg-yellow-400 transition duration-300"
                    >
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              <h2 className="text-4xl font-bold mb-4 md:mb-0">Our<br />Partners</h2>
              <p className="text-xl max-w-2xl">
                These companies aren't trophies – they are our most trusted collaborators. The work we do wouldn't be possible without them.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <Image src="/Red-Hat-Premier-Partner-Badge.svg" alt="Red Hat Premier Partner" width={200} height={100} />
              <Image src="/AWS-Advanced-Consulting-Partner-Badge.svg" alt="AWS Advanced Consulting Partner" width={200} height={100} />
              <Image src="/NVIDIA-Inception-Program-Badge.svg" alt="NVIDIA Inception Program" width={200} height={100} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}