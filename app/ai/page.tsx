import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Network, GitBranch, Cpu, Server, Sparkles, Bot } from 'lucide-react';

export default function AIPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="text-gray-900 dark:text-white">
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Machine learning is good.<br />Machine doing is better.
            </h1>
            <div className="w-16 h-1 bg-white mb-8"></div>
            <p className="text-xl mb-8 max-w-3xl">
              Organizations that develop advanced analytics capabilities to make better decisions are twice as likely to be in their industry's top quartile of financial performance.
            </p>
            <Link 
              href="mailto:hello@astellent.com" 
              className="inline-block text-yellow-300 text-lg font-semibold hover:text-yellow-400 transition duration-300"
            >
              → Let's make your software smarter.
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              <h2 className="text-4xl font-bold mb-4 md:mb-0">Our<br />Solutions</h2>
              <p className="text-xl max-w-2xl">
                We offer solutions for data strategy, data engineering, data science, and machine learning. Our team will work with your organization to achieve more with data and Artificial Intelligence.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "DATA STRATEGY AND ARCHITECTURE",
                  description: "Success in Artificial Intelligence projects results from having the right goals and relevant data. We work with you to review your goals and inventory the data you have. We then develop suitable industry-specific use cases and data acquisition strategies. With useful data, we explore and select the right algorithm to tackle your problem.",
                  icon: <Network size={48} className="text-gray-900 dark:text-white" />
                },
                {
                  title: "DATA PIPELINE AND ENGINEERING",
                  description: "Valuable data is often scattered across many operational and analytical systems. Streamlining and automating data acquisition and enrichment is key to data scientist productivity. We deploy lightweight, modular middleware technologies that connect your applications and services. With a data lake in place, we enrich the raw data and build the right features for the task.",
                  icon: <GitBranch size={48} className="text-gray-900 dark:text-white" />
                },
                {
                  title: "MODEL DEVELOPMENT AND DEPLOYMENT",
                  description: "A trained model is the core of a machine learning system. We run thousands of experiments to select the best framework and model parameters. Once trained, we then calibrate for performance and integrate it with your application. We develop secure, lightweight REST APIs to make it easy for you to use the model. We also offer advice for model deployment, maintenance, and monitoring.",
                  icon: <Cpu size={48} className="text-gray-900 dark:text-white" />
                },
                {
                  title: "AI PLATFORMS",
                  description: "We design AI platforms to enhance the developer experience, streamline operations, and expand capabilities through a comprehensive suite of services and support. By focusing on developer productivity and service adoption, we create a seamless platform experience that accelerates the deployment and utilization of AI technologies. We optimize the platform for performance, security, and availability and enable our clients to harness the full potential of AI, from data strategy and architecture to model development and deployment.",
                  icon: <Server size={48} className="text-gray-900 dark:text-white" />
                },
                {
                  title: "GENERATIVE AI AND RETRIEVAL-AUGMENTED GENERATION (RAG)",
                  description: "We aim to unlock new levels of automation, customer engagement, and business growth with custom Generative AI solutions that generate text, images, and code tailored to your needs. We employ state-of-the-art models and techniques combined with Retrieval-Augmented Generation (RAG) architectures to produce high-quality, contextually relevant outputs. By merging the latest generative AI with sophisticated data retrieval techniques, we tailor solutions that generate text, visuals, and code, ensuring appropriate data sources deeply inform innovative outputs.",
                  icon: <Sparkles size={48} className="text-gray-900 dark:text-white" />
                },
                {
                  title: "MICROSOFT COPILOT PLUGIN DEVELOPMENT",
                  description: "We designed our Microsoft Copilot Plugin Development services to amplify your team's capabilities by enabling natural language interactions with their web services. Through the development of custom plugins, we offer the opportunity to access real-time information, retrieve relational data, and perform actions across applications seamlessly within the Microsoft Copilot environment. We develop the plugins to integrate smoothly with existing workflows, allowing for innovative functionalities like instantaneous news updates on product launches, detailed reports on service tickets by team members, and the creation of tasks in organizational tracking systems.",
                  icon: <Bot size={48} className="text-gray-900 dark:text-white" />
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