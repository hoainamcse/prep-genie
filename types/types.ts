export type QuizForm = {
  title: string;
  prompt: string;
  kind: string;
  choices: string[];
  correctAnswers: number[];
};

export interface QuizInterface {
  id?: string;
  title: string;
  prompt: string;
  kind: "multiple" | "single";
  choices: string[];
  correctAnswers: number[];
}

export interface UserInterface {
  name: string;
  email: string;
  role: string;
}

export interface ChallengeInterface {
  id: string;
  name: string;
  prompt?: string;
  category: string;
  type: string;
  slug?: string;
  hints?: string[];
  languageToWrite?: string;
  promptCode?: {
    css?: string;
    html?: string;
    js?: string;
  };
  reactConfig?: {
    componentName?: string;
  };
  solution?: string;
  difficulty?: string;
  createdAt?: Date;
}
