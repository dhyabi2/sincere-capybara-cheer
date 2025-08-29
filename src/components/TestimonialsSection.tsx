"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      content: "Dyad has revolutionized how I build UIs. The AI assistance saves me hours each day.",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "Our team's productivity doubled after switching to Dyad. Prototyping is now lightning fast.",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Startup Founder",
      content: "As a non-technical founder, Dyad empowered me to build my MVP without hiring developers.",
      avatar: "/placeholder-user.jpg"
    }
  ];

  return (
    <div className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Users Say
            </h2>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-400">
              Don't take our word for it - hear from developers who use Dyad daily.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};