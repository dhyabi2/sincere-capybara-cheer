"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Share Images. Get AI Ratings.
              </h1>
              <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl">
                Upload your images, receive instant AI ratings, and share with the community. 
                Powered by Nano cryptocurrency rewards.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/app">
                <Button className="w-full sm:w-auto">
                  Try the App <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-200 dark:bg-gray-800 p-4">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <div className="h-full w-full bg-gray-300 dark:bg-gray-700" />
                </div>
              </div>
              <div className="rounded-xl bg-gray-200 dark:bg-gray-800 p-4">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <div className="h-full w-full bg-gray-300 dark:bg-gray-700" />
                </div>
              </div>
              <div className="rounded-xl bg-gray-200 dark:bg-gray-800 p-4">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <div className="h-full w-full bg-gray-300 dark:bg-gray-700" />
                </div>
              </div>
              <div className="rounded-xl bg-gray-200 dark:bg-gray-800 p-4">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <div className="h-full w-full bg-gray-300 dark:bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};