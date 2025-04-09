import React from 'react';
import { Search, Users, Shield, Calculator } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect Rental & Roommate in Minutes!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            AI-powered rental search, roommate matching, and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold">
              Find Rentals
            </button>
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
              Match Roommates
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Smart Features for Smart Renters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Users className="h-8 w-8 text-indigo-600" />}
            title="AI Roommate Matching"
            description="Find compatible roommates based on lifestyle, habits, and preferences."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-indigo-600" />}
            title="Verified Listings"
            description="All listings are verified to ensure safety and authenticity."
          />
          <FeatureCard
            icon={<Calculator className="h-8 w-8 text-indigo-600" />}
            title="Rent Split Calculator"
            description="Easily calculate and manage rent and utility splits."
          />
          <FeatureCard
            icon={<Search className="h-8 w-8 text-indigo-600" />}
            title="Smart Search"
            description="Find your ideal rental with our AI-powered search engine."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Sign Up"
              description="Create your profile and set your preferences."
            />
            <StepCard
              number="2"
              title="Find Matches"
              description="Browse AI-curated listings and potential roommates."
            />
            <StepCard
              number="3"
              title="Move In"
              description="Schedule viewings and secure your perfect rental."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Find Your Perfect Match?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of happy renters who found their ideal home and roommates.
        </p>
        <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold">
          Get Started Now
        </button>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}