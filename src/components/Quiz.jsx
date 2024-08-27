import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Quiz() {
  const questions = [
    [
      "What is your living situation?",
      "I live alone in a small apartment.",
      "I have a family and live in a house with a yard.",
      "I live with roommates in a medium-sized apartment.",
      "I live in a quiet, rural area with plenty of space.",
    ],
    [
      "How much time can you dedicate to a cat?",
      "I work long hours and am home only in the evenings.",
      "I have a flexible schedule and am home most of the day.",
      "I work from home, so I'm around all day.",
      "I have a busy social life, but I'm home most nights.",
    ],
    [
      "Do you have any experience with cats?",
      "I'm a first-time cat owner.",
      "I've had a cat before, but it was a long time ago.",
      "I've had several cats and am very experienced.",
      "I currently have a cat and am thinking of adopting another.",
    ],
    [
      "How do you feel about kittens?",
      "I love the idea of raising a kitten and watching it grow.",
      "I prefer a cat that is past the kitten stage but still young.",
      "I think older cats are easier to manage and have a calmer temperament.",
      "I don’t mind the age, as long as it’s a cat in need of a home.",
    ],
    [
      "How many cats do you envision in your home?",
      "Just one, I want to focus all my attention on one cat.",
      "Two, so they can keep each other company.",
      "I’m open to three or more, especially if they’re from the same litter.",
      "I’m not sure yet, I’m open to suggestions.",
    ],
  ];

  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [result, setResult] = useState(null);

  const handleAnswerChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const getResult = () => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };

    answers.forEach((answer) => {
      if (answer === "0") {
        counts.A++;
      } else if (answer === "1") {
        counts.B++;
      } else if (answer === "2") {
        counts.C++;
      } else if (answer === "3") {
        counts.D++;
      }
    });

    if (counts.A >= counts.B && counts.A >= counts.C && counts.A >= counts.D) {
      return "One Adult Cat";
    } else if (
      counts.B >= counts.A &&
      counts.B >= counts.C &&
      counts.B >= counts.D
    ) {
      return "One or Two Young Adult Cats";
    } else if (
      counts.C >= counts.A &&
      counts.C >= counts.B &&
      counts.C >= counts.D
    ) {
      return "A Pair of Kittens or a Small Group";
    } else {
      return "An Older Cat or Multiple Cats";
    }
  };

  const handleResult = () => {
    setResult(getResult());
  };

  const handleRetake = () => {
    setResult(null);
    setAnswers(["", "", "", "", ""]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-violet-300 hover:bg-violet-100 rounded-full text-lg md:text-2xl lg:text-5xl lg:h-16">
          Take the Quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cat Adoption Quiz</DialogTitle>
          <DialogDescription>
            Are you thinking about adopting a cat, but don't know the right age
            or how many to adopt? Take this quiz to find out!
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4">
          {questions.map((question, index) => (
            <div key={index}>
              <label>{question[0]}</label>
              <Select
                value={answers[index]}
                onValueChange={(value) =>
                  handleAnswerChange({ target: { value } }, index)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {question.slice(1).map((option, optionIndex) => (
                    <SelectItem
                      key={optionIndex}
                      value={optionIndex.toString()}
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </form>

        <DialogFooter>
          <Button
            type="button"
            className="bg-violet-100 hover:bg-violet-300 rounded-full text-lg md:text-2xl"
            onClick={handleRetake}
          >
            Retake Quiz
          </Button>
          <Button
            type="button"
            className="bg-violet-300 hover:bg-violet-100 rounded-full text-lg md:text-2xl mb-5 lg:mb-0"
            onClick={handleResult}
          >
            Get Result
          </Button>
        </DialogFooter>
        {result && (
          <div className="border border-2 border-violet-800 rounded-xl p-4">
            <p className="flex justify-center">
              Based on your answers, you should adopt:
            </p>
            <p className="flex justify-center font-bold text-xl">{result}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
