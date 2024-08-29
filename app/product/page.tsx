import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GitBranch, Cloud, Puzzle, Shield } from 'lucide-react';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Trusted Software<br />Supply Chains.
            </h1>
            <div className="w-16 h-1 bg-white mb-8"></div>
            <p className="text-xl mb-8 max-w-3xl">
              Use Sigil Binary Authorization solution to deploy only trusted containers on your Kubernetes clusters.
            </p>
            <Link 
              href="/contact" 
              className="inline-block text-yellow-300 text-lg font-semibold hover:text-yellow-400 transition duration-300"
            >
              → Let's secure your software development process.
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              <h2 className="text-4xl font-bold mb-4 md:mb-0">Trusted<br />Content</h2>
              <p className="text-xl max-w-2xl">
                Deploy only trusted container images on your Kubernetes clusters using Sigil Binary Authorization.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "DESIGN AND ENFORCE SECURITY POLICIES FOR ALL THE CI/CD PIPELINE STAGES",
                  description: "Designate digital or human attestors for every stage of your CI/CD pipeline including build, test, integrate, scan and deploy stages. One single place for your compliance and audit teams to gain visibility into what went in to create the container images. Verifiably prove the sanctity of all the stages of your development pipeline.",
                  icon: <GitBranch size={48} />
                },
                {
                  title: "REQUIRE IMAGE SIGNING AND ATTESTATIONS",
                  description: "Put in place integration with your existing tools to gather metadata for attestations. Require images to be signed by trusted authorities during the development process and then enforce signature validation when deploying. By enforcing validation, you can gain tighter control over your container environment by ensuring only verified images are integrated into the build-and-release process.",
                  icon: <Cloud size={48} />
                },
                {
                  title: "NATIVE INTEGRATION WITH OPENSHIFT, EKS AND AKS",
                  description: "Binary Authorization integrates with the control planes natively on OpenShift, AKS (Azure Kubernetes Service) and EKS (Amazon Elastic Container Service for Kubernetes) to allow or block image deployment based on the policies that you define. You can also leverage integrations with various Registries Vulnerability Scanning to enable deploy-time controls based on build information and vulnerability findings.",
                  icon: <Puzzle size={48} />
                },
                {
                  title: "ESTABLISH A PREVENTATIVE SECURITY POSTURE",
                  description: "Build flexible per-cluster policies to allow trusted images and emergency deployments. Simplify governance with a single structured path for code to get from development to production.",
                  icon: <Shield size={48} />
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                  <div className="md:w-16 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg mb-4">{feature.description}</p>
                    <Link 
                      href="/learn-more" 
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