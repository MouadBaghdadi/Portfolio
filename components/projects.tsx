"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Brain, Database, Bot, FileCode, GitBranch, ExternalLink } from 'lucide-react';
import React from "react";

const projects = [
  {
    id: "bddchat",
    title: "BddChat",
    description: "RAG-based Natural Language Querying System that allows users to query a 150-page database manual in natural language.",
    icon: <Database className="h-10 w-10 text-primary" />,
    tags: ["RAG", "LLM", "NLP", "Python", "Transformers"],
    category: "nlp",
    details: "Developed a Retrieval-Augmented Generation (RAG) system that allows users to query a 150-page database manual in natural language. Integrated a large language model (LLM) with a passage retrieval pipeline to generate accurate, context-based responses.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "qa-model",
    title: "Question Answering Model",
    description: "Deep learning model capable of answering questions based on given context paragraphs.",
    icon: <Brain className="h-10 w-10 text-primary" />,
    tags: ["NLP", "Deep Learning", "Python", "Transformers"],
    category: "nlp",
    details: "Built a deep learning model capable of answering questions based on given context paragraphs. Extracts relevant answer spans using a contextual understanding of the input text.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "domino-rl",
    title: "Domino Reinforcement Learning Agent",
    description: "Reinforcement learning agent to play 1v1 domino using Proximal Policy Optimization (PPO).",
    icon: <Bot className="h-10 w-10 text-primary" />,
    tags: ["Reinforcement Learning", "PPO", "Python", "Game AI"],
    category: "reinforcement-learning",
    details: "Designed and trained a reinforcement learning agent to play 1v1 domino using Proximal Policy Optimization (PPO). Integrated rule-based opponent modeling, reward shaping, and training curriculum for improved gameplay performance.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "paper-classification",
    title: "AI Research Paper Classification",
    description: "Machine learning model to classify AI research papers from arXiv into four categories based on abstracts.",
    icon: <FileCode className="h-10 w-10 text-primary" />,
    tags: ["Classification", "NLP", "Scikit-learn", "Text Mining"],
    category: "ml",
    details: "Created a machine learning model to classify AI research papers from arXiv into four categories based on abstracts. Improved research discoverability through efficient categorization of academic content.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "facial-expression",
    title: "Facial Expression Recognition",
    description: "Computer vision model to detect and classify emotional expressions from facial images.",
    icon: <Brain className="h-10 w-10 text-primary" />,
    tags: ["Computer Vision", "PyTorch", "OpenCV", "Deep Learning"],
    category: "computer-vision",
    details: "Developed a computer vision model to detect and classify emotional expressions from facial images. Used PyTorch and OpenCV to build and train the model on facial expression datasets.",
    image: "/placeholder.svg?height=300&width=600",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/50 overflow-hidden group">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>{project.icon}</div>
          <GitBranch className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <CardTitle className="mt-4">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {showDetails ? (
          <div className="space-y-4">
            <p className="text-sm text-foreground/80">{project.details}</p>
            <div className="aspect-video bg-muted/30 rounded-md overflow-hidden">
              <img 
                src={project.image || "/placeholder.svg"} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full text-primary"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Show Less" : "Show More"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Exploring the intersection of AI, machine learning, and real-world applications
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="nlp">NLP</TabsTrigger>
              <TabsTrigger value="reinforcement-learning">Reinforcement Learning</TabsTrigger>
              <TabsTrigger value="computer-vision">Computer Vision</TabsTrigger>
              <TabsTrigger value="ml">Machine Learning</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          {["nlp", "reinforcement-learning", "computer-vision", "ml"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <a 
              href="https://github.com/MouadBaghdadi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View More on GitHub <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
