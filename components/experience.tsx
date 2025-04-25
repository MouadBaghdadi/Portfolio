import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import React from "react";

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "NYU Abu Dhabi",
    location: "Remote",
    period: "Jun 2024 – Sep 2024",
    description: [
      "Fine-tuned a tiny pre-trained language model for code clone detection using LoRA.",
      "Created a dataset by generating, transforming, and evaluating code snippet pairs.",
      "Achieved up to 97% accuracy using only a small number of trainable parameters.",
    ],
    tags: ["LLMs", "LoRA", "Code Analysis", "Fine-tuning"],
  },
  {
    title: "Data Scientist Intern",
    company: "The Sparks Foundation",
    location: "Remote (Singapore)",
    period: "Sep 2023 – Oct 2023",
    description: [
      "Participated in a rotational internship program focused on real-world data science projects.",
      "Designed and developed an interactive dashboard to visualize store sales performance.",
      "Defined and implemented key performance indicators (KPIs) to evaluate business metrics.",
    ],
    tags: ["Data Visualization", "KPI Analysis", "Dashboard Development"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My journey in the field of AI and data science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-primary/30 pl-6 ml-4 space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-primary bg-primary"></div>
                <Card className="border-primary/20">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="md:ml-auto whitespace-nowrap">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-foreground/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
