import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="animate-fade-in bg-[#fcf9f4] min-h-screen">
      {/* Header */}
      <section className="py-24 text-center bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#e2b4b4] font-bold mb-4">Legal</p>
          <h1 className="serif italic text-5xl text-gray-900">Privacy Policy</h1>
          <div className="w-12 h-[1px] bg-[#e2b4b4] mx-auto mt-8"></div>
          <p className="text-sm text-gray-600 mt-8">Last Updated: February 5, 2026</p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Shield size={32} className="text-[#e2b4b4] mb-3" />
              <p className="text-[9px] uppercase tracking-widest font-bold text-gray-800">Secure Data</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Lock size={32} className="text-[#e2b4b4] mb-3" />
              <p className="text-[9px] uppercase tracking-widest font-bold text-gray-800">Encrypted</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Eye size={32} className="text-[#e2b4b4] mb-3" />
              <p className="text-[9px] uppercase tracking-widest font-bold text-gray-800">Transparent</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <UserCheck size={32} className="text-[#e2b4b4] mb-3" />
              <p className="text-[9px] uppercase tracking-widest font-bold text-gray-800">Your Control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        <div className="prose prose-sm max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Thriya Jewels, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website or purchase our products.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using our website, you consent to the practices described in this policy. Please read this carefully to understand our views and practices regarding your personal data.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Name, email address, phone number, and shipping address</li>
              <li>Order history and preferences</li>
              <li>Communication preferences and correspondence with our team</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Browser type, device information, and IP address</li>
              <li>Pages viewed, time spent on pages, and navigation patterns</li>
              <li>Referring website and search terms used to find us</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Process Orders:</strong> Fulfill your purchases and arrange shipping</li>
              <li><strong>Customer Service:</strong> Respond to inquiries and provide support</li>
              <li><strong>Communication:</strong> Keep you updated about your orders and our collections</li>
              <li><strong>Improvement:</strong> Enhance our website and services based on your feedback</li>
              <li><strong>Legal Compliance:</strong> Meet legal obligations and protect against fraud</li>
            </ul>
          </section>

          <section className="mb-12 bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Service Providers:</strong> Trusted partners who help us operate (shipping, payment processing, email services)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Secure servers with restricted access</li>
              <li>Regular security updates and monitoring</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              While we strive to protect your information, no method of transmission over the internet is 100% secure. We maintain reasonable security standards.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
              <li><strong>Data Portability:</strong> Request your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain types of data processing</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:thriyajewels@gmail.com" className="text-[#e2b4b4] hover:underline">thriyajewels@gmail.com</a> or call <a href="tel:+919995133495" className="text-[#e2b4b4] hover:underline">+91 9995133495</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Keep items in your shopping cart</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Personalize content and advertisements</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites (social media, payment processors, etc.). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-sm border border-gray-100">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting a notice on our website or sending an email. The "Last Updated" date at the top indicates when the policy was last revised.
            </p>
          </section>

          <section className="mb-12 bg-[#fdf8f8] p-8 rounded-sm border border-[#e2b4b4]">
            <h2 className="text-2xl serif italic text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> <a href="mailto:thriyajewels@gmail.com" className="text-[#e2b4b4] hover:underline">thriyajewels@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919995133495" className="text-[#e2b4b4] hover:underline">+91 9995133495</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/9995133495" target="_blank" rel="noopener noreferrer" className="text-[#e2b4b4] hover:underline">+91 9995133495</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
