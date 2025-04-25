"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { Brain, Code, Database, BarChart, Layers, Server, GitBranch, Cpu, Globe, MessageSquare } from 'lucide-react';
import React from "react";

const skillCategories = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      { name: "Deep Learning", level: 90 },
      { name: "Natural Language Processing", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "Reinforcement Learning", level: 85 },
      { name: "LLMs & Transformers", level: 90 },
      { name: "RAG Systems", level: 85 },
    ],
  },
  {
    id: "programming",
    name: "Programming",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 80 },
      { name: "C++", level: 75 },
      { name: "Java", level: 70 },
      { name: "Bash", level: 65 },
    ],
  },
  {
    id: "data",
    name: "Data Science",
    icon: <BarChart className="h-5 w-5" />,
    skills: [
      { name: "Data Analytics", level: 90 },
      { name: "Data Visualization", level: 85 },
      { name: "Statistical Analysis", level: 80 },
      { name: "Web Scraping", level: 75 },
      { name: "Feature Engineering", level: 85 },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    icon: <Layers className="h-5 w-5" />,
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "HuggingFace Transformers", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Flutter", level: 70 },
      { name: "Scikit-learn", level: 90 },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Oracle", level: 70 },
      { name: "PostgreSQL", level: 65 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Technologies",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Tableau", level: 75 },
      { name: "MLOps", level: 70 },
      { name: "Model Deployment", level: 75 },
    ],
  },
];

const SkillCard = ({ skill }: { skill: { name: string; level: number } }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="mb-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        {hover && <span className="text-xs text-muted-foreground">{skill.level}%</span>}
      </div>
      <Progress value={skill.level} className="h-2" />
    </div>
  );
};

const SkillsVisual = () => {
  const skills = [
    { name: "Python", value: 95, color: "rgb(99, 102, 241)" },
    { name: "Deep Learning", value: 90, color: "rgb(79, 70, 229)" },
    { name: "NLP", value: 85, color: "rgb(67, 56, 202)" },
    { name: "Computer Vision", value: 80, color: "rgb(55, 48, 163)" },
    { name: "Data Science", value: 85, color: "rgb(109, 40, 217)" },
    { name: "PyTorch", value: 90, color: "rgb(124, 58, 237)" },
    { name: "Transformers", value: 85, color: "rgb(139, 92, 246)" },
  ];

  return (
    <div className="w-full h-[300px] relative">
      <canvas id="skillsCanvas" className="w-full h-full" />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </div>

        <Tabs defaultValue="ai-ml" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList>
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center">
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h4 className="font-medium">English</h4>
                    <p className="text-sm text-muted-foreground">B2 — IELTS 6.5</p>
                  </div>
                </div>
                <Progress value={80} className="w-20 h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h4 className="font-medium">French</h4>
                    <p className="text-sm text-muted-foreground">C1 — TCF</p>
                  </div>
                </div>
                <Progress value={90} className="w-20 h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h4 className="font-medium">Arabic</h4>
                    <p className="text-sm text-muted-foreground">Native</p>
                  </div>
                </div>
                <Progress value={100} className="w-20 h-2" />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Problem Solving", icon: <Brain /> },
              { name: "Teamwork", icon: <MessageSquare /> },
              { name: "Flexibility", icon: <GitBranch /> },
              { name: "Adaptability", icon: <Cpu /> },
            ].map((skill) => (
              <Card key={skill.name} className="text-center">
                <CardContent className="pt-6 pb-4">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-medium">{skill.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
