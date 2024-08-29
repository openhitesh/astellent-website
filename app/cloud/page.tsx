import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Settings, Zap, Bot, Cloud, Shield } from 'lucide-react';

export default function CloudPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Don't get ready.<br />Get started.
            </h1>
            <div className="w-16 h-1 bg-white mb-8"></div>
            <p className="text-xl mb-8 max-w-3xl">
              Organizations that combine cloud technology, process, and culture improve their time-to-market by forty percent.
            </p>
            <Link 
              href="/contact" 
              className="inline-block text-yellow-300 text-lg font-semibold hover:text-yellow-400 transition duration-300"
            >
              → Let's make your software faster.
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              <h2 className="text-4xl font-bold mb-4 md:mb-0">Our<br />Solutions</h2>
              <p className="text-xl max-w-2xl">
                We offer solutions for cloud adoption, architecture, automation, migration, and governance. Our team will work with your organization to achieve more with cloud computing.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "CLOUD ADOPTION AND ARCHITECTURE",
                  description: "We offer workshops to develop effective plans for your cloud adoption journey. We work with you to review your goals and inventory the applications you have. Our team considers essential areas of focus that span people, process, and technology. We address your business and technical capabilities, including governance, platform, security, and operations. We provide mentoring to improve teamwork, cultivate a creative culture, and navigate change.",
                  icon: <Settings size={48} />
                },
                {
                  title: "CLOUD SPRINT",
                  description: "We offer a hands-on workshop to develop a cloud foundation and move your first workload. Our architecture follows Cloud Security Alliance guidelines for networking, encryption, and log management. We automate images, federate identity and access management, and integrate with your network. For governance, we establish your billing accounts, budgets, and resource monitoring.",
                  icon: <Zap size={48} />
                },
                {
                  title: "CLOUD AUTOMATION",
                  description: "Automation is an essential technology for modernization and digital transformation. Build your infrastructure with reusable, battle-tested automation written and supported by our experts. We develop code that flawlessly describes and deploys your application infrastructure. We also ensure it is simple to maintain. Your automation should not be more complicated than the tasks it is replacing.",
                  icon: <Bot size={48} />
                },
                {
                  title: "CLOUD MIGRATION",
                  description: "We deliver the safest and fastest way to migrate your applications to the cloud. We assess your workload to understand the technology, integrations, dependencies, and compliance needs. We then transition you to a custom-built cloud architecture with immutable, version-controlled infrastructure. By migrating, our clients achieve an average savings of 40% year-over-year.",
                  icon: <Cloud size={48} />
                },
                {
                  title: "CLOUD OPERATIONS AND GOVERNANCE",
                  description: "As your cloud environment grows, it is easy to lose track of all the moving parts. There is a staggering volume of financial data to handle. Meeting regulatory compliance and security obligations is complex. We work with you to improve cost allocation, reservation coverage, reporting, and amortization. Our team prevents costly budget overages and reduces costs by optimizing your workload. We offer automation for continuous compliance with over 1000 security and regulatory controls.",
                  icon: <Shield size={48} />
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
                      href="/contact" 
                      className="inline-block bg-yellow-300 text-black px-4 py-2 font-semibold hover:bg-yellow-400 transition duration-300"
                    >
                      CONTACT US
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
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