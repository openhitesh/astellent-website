import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16 px-4 md:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-4xl">
        <p className="text-lg mb-8">
          Astellent is a consulting company that improves how software is designed, developed, and delivered to help organizations achieve more.
        </p>
        <p className="text-lg mb-8">
          We believe the future will be built with software, data, and hard work. We collaborate with ambitious people who use cloud services and machine intelligence to make things that matter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Visit us at our office</h3>
            <p>44 Tehama St</p>
            <p>San Francisco, CA 94105</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Start a conversation</h3>
            <p>hello@astellent.com</p>
            <p>(510) 871-3246</p>
          </div>
        </div>
        <div className="mt-8 flex space-x-4">
          {['Twitter', 'GitHub', 'LinkedIn', 'Medium', 'YouTube', 'Facebook'].map((social) => (
            <a key={social} href="#" className="text-gray-600 hover:text-gray-900">
              {social}
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-600">© 2020 ASTELLENT INC.</p>
        <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}