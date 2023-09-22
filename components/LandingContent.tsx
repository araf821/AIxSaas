"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const testimonials = [
  {
    name: "Araf A",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best thing I've ever used!",
  },
  {
    name: "Minnie D Minicat",
    avatar: "MM",
    title: "Orange",
    description: "Mmmmmao...? Mmmmmaaaaa...",
  },
  {
    name: "Beanie D Bebicat",
    avatar: "BB",
    title: "Tiny Cat",
    description: "Miau! Miau! Mmmmmmmmmm... Miau?!",
  },
  {
    name: "Boba D Hamster",
    avatar: "B",
    title: "Ham-E",
    description: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  },
];

const LandingContent = ({}) => {
  return (
    <div className="px-10 pb-20">
      <h1 className="mb-10 text-center text-4xl font-extrabold text-white">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 gap-4 whitespace-pre-line sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="border-none bg-[#192339] text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="overflow-hidden whitespace-pre-wrap px-0 pt-4">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
