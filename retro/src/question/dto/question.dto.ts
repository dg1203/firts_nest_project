export class QuestionDto {
  author?: string;
  name: string;
  time: number;
  code: string;
  open: boolean;
  type: string;
  options?: [string];
  reply?: [string];
}
