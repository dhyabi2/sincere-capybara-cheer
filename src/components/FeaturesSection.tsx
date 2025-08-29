"use client";

import { 
  Image, 
  Star, 
  Wallet, 
  Zap 
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Image className="w-8 h-8" />,
      title: "AI-Powered Ratings",
      description: "Get instant ratings for your images using advanced AI algorithms"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Community Feedback",
      description: "Share your images and get feedback from a community of creators"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Nano Rewards",
      description: "Earn cryptocurrency rewards for high-quality content"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Publishing",
      description: "Upload and publish your images in seconds"
    }
  ];

  return (
    <div className="w-full py-16 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              How It Works
            </h2>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-400">
              Share your creativity, get instant AI ratings, and earn rewards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};