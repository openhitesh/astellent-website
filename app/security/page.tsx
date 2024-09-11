import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Network, BarChart } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="text-gray-900 dark:text-white">
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Secure your digital assets.<br />Protect your future.            
            </h1>
            <div className="w-16 h-1 bg-white mb-8"></div>
            <p className="text-xl mb-8 max-w-3xl">
              In today's digital landscape, security is not just an option—it's a necessity. We provide comprehensive security solutions to safeguard your organization's assets and ensure compliance with industry standards.            
            </p>
            <Link 
              href="mailto:hello@astellent.com" 
              className="inline-block text-yellow-300 text-lg font-semibold hover:text-yellow-400 transition duration-300"
            >
              → Let's fortify your digital defenses.            
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              <h2 className="text-4xl font-bold mb-4 md:mb-0">Our<br />Solutions</h2>
              <p className="text-xl max-w-2xl">
              We offer comprehensive security solutions tailored to your organization's needs. Our team of experts will work with you to implement robust security measures and ensure compliance with industry standards.              </p>
            </div>

            <div className="space-y-12">
              {[
                  {
                    title: "CLOUD SECURITY AND GOVERNANCE",
                    description: "We offer comprehensive solutions for cloud security and governance. Our team works with you to identify and address the often-overlooked aspects of cloud adoption, such as identity and access management, threat intelligence, and posture management. We develop tailored programs to secure your cloud platforms and services without compromising on velocity, ensuring that your transition to the cloud is both secure and efficient.",
                    icon: <Shield size={48} className="text-gray-900 dark:text-white" />
                  },
                  {
                    title: "SECURITY FRAMEWORK IMPLEMENTATION",
                    description: "We provide expert guidance in implementing robust security frameworks. Our team specializes in helping organizations rapidly address compliance gaps against common security standards, including NIST CSF, CMMC, TSA SD02, and others. We work closely with your team to ensure that your organization not only meets but exceeds industry standards for security and compliance, providing a solid foundation for your digital operations.",
                    icon: <Lock size={48} className="text-gray-900 dark:text-white" />
                  },
                  {
                    title: "VULNERABILITY AND POSTURE MANAGEMENT",
                    description: "Our vulnerability and posture management solutions offer the safest and fastest way to automate the detection and remediation of security vulnerabilities. We implement a comprehensive program that addresses planning, technical, change, and compliance risks in both infrastructure and applications. Our approach ensures that your systems remain secure and up-to-date, providing robust protection against the latest threats in the ever-evolving digital landscape.",
                    icon: <Eye size={48} className="text-gray-900 dark:text-white" />
                  },
                  {
                    title: "ZERO TRUST ARCHITECTURE",
                    description: "We specialize in implementing Zero Trust architectures, recognizing that it's not just a product, but a comprehensive program. Our approach interleaves several complementary capabilities, grounded in strong Identity and Access Management, Endpoint, and Network Security. We deliver integrated privileged access, identity management, and network security capabilities, adhering to the principle that robust security means verifying every access request as if it originates from an open network.",
                    icon: <Network size={48} className="text-gray-900 dark:text-white" />
                  },
                  {
                    title: "SECURITY INFORMATION AND EVENT MANAGEMENT (SIEM)",
                    description: "We implement state-of-the-art SIEM solutions to provide real-time analysis of security alerts generated by your network hardware and applications. Our SIEM implementations are designed to help you detect, analyze, and respond to security threats swiftly and effectively. We work with you to set up a robust system that not only identifies potential security incidents but also helps in compliance reporting and incident forensics, ensuring comprehensive protection for your digital assets.",
                    icon: <BarChart size={48} className="text-gray-900 dark:text-white" />
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