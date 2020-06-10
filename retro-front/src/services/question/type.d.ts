interface AddDataInterface {
  name: string;
  code: string;
  open: boolean;
  type: string;
  options?: any[];
}

interface QuestionDataInterface {
  time: number;
  created: string;
  options: string[];
  reply: string[];
  _id: string;
  name: string;
  code: string;
  open: boolean;
  type: string;
  __v: number
}

interface QuestionInterface {
  create: (body: AddDataInterface) => Promise<any>;
  findQuestionByCode: (code: string) => Promise<any>;
  findQuestionById: (id: string) => Promise<any>;
  addAnswear: (answear: string, id: string) => Promise<any>;
  myQuestions: () => Promise<any>;
}

export { AddDataInterface, QuestionInterface, QuestionDataInterface };
