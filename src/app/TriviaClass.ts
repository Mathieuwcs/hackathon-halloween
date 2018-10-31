export class TriviaClass {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers0: string;
  incorrect_answers1: string;
  incorrect_answers2: string;

  // Mettre les answers dans un tableau ?

    constructor (
      category: string,
      type: string,
      difficulty: string,
      question: string,
      correct_answer: string,
      incorrect_answers0: string,
      incorrect_answers1: string,
      incorrect_answers2: string,
      ) {
      this.category = category;
      this.type = type;
      this.difficulty = difficulty;
      this.question = question;
      this.correct_answer = correct_answer;
      this.incorrect_answers0 = incorrect_answers0;
      this.incorrect_answers1 = incorrect_answers1;
      this.incorrect_answers2 = incorrect_answers2;
    }
}

