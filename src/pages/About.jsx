import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About FoodDeliver
        </h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🍕 Our Story
            </h2>
            <p className="text-lg leading-relaxed">
              FoodDeliver is your go-to platform for ordering delicious food from the best restaurants in your city. 
              We connect food lovers with their favorite restaurants, making food delivery fast, easy, and convenient.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🎯 Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              To make quality food accessible to everyone, anytime, anywhere. We believe that great food should be 
              just a few clicks away, and we're committed to delivering happiness with every order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ✨ Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">⚡ Fast Delivery</h3>
                <p>Get your food delivered hot and fresh in 30 minutes or less</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">🏪 Wide Selection</h3>
                <p>Choose from hundreds of restaurants and cuisines</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">💳 Easy Payment</h3>
                <p>Multiple payment options for your convenience</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">⭐ Quality Assured</h3>
                <p>Only the best restaurants with verified ratings</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
              📊 Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-6">
              <div>
                <div className="text-4xl font-bold text-orange-600">500+</div>
                <div className="text-gray-700 mt-2">Partner Restaurants</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600">10K+</div>
                <div className="text-gray-700 mt-2">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600">50K+</div>
                <div className="text-gray-700 mt-2">Orders Delivered</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
