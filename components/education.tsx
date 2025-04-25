import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import React from "react";

const educations = [
  {
    degree: "Engineering Degree in Intelligent Systems and Data",
    institution: "Higher National School of Computer Science (ESI ex INI)",
    location: "Algiers, Algeria",
    period: "Sep 2022 – Present",
    gpa: "12.34 / 20 (equivalent to approx. 3.1 / 4.0 GPA)",
    focus: [
      "Computer Science",
      "Machine Learning",
      "Data Science",
      "Data Analysis",
      "Data Visualization",
      "HPC",
      "Data Structures",
      "Mobile Development",
    ],
  },
  {
    degree: "Preparatory Classes for Engineering Schools",
    institution: "Higher School of Computer Science 08 May 1945",
    location: "Sidi Bel Abbès, Algeria",
    period: "Sep 2020 – Jun 2022",
    focus: [
      "Mathematics",
      "Physics",
      "Computer Science",
      "Algorithms",
      "Programming",
    ],
  },
];

const certifications = [
  "NVIDIA — Deep Learning Fundamentals",
  "DeepLearning.ai — Machine Learning/Deep Learning Specialization",
  "Google — Data Analytics Professional Certificate",
];

const awards = [
  "Second Place, DataHack organized by CSE (2024)",
  "Second Place, HAiCk organized by School of AI (2024)",
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My academic background and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Academic Background</h3>
          <div className="space-y-6">
            {educations.map((edu, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {edu.institution} • {edu.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="md:ml-auto whitespace-nowrap">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.gpa && (
                    <p className="text-sm text-foreground/80 mb-3">
                      <span className="font-medium">GPA:</span> {edu.gpa}
                    </p>
                  )}
                  <div>
                    <p className="text-sm font-medium mb-2">Focus Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.focus.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Awards</h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {awards.map((award, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Extracurricular Activities</h3>
            <Card>
              <CardHeader>
                <CardTitle>Technical Team Member</CardTitle>
                <CardDescription className="text-primary">
                  School of AI Club — ESI Algiers • Sep 2022 – Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Member of the first AI-focused student club in Algeria.</li>
                  <li>Contributed to organizing workshops and the national "HAICK" machine learning hackathon.</li>
                  <li>Helped develop machine learning systems for internal club projects.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
