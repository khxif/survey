export interface IQuestion {
  _id: string;
  name: string;
  title: string;
  type: string;
}

export interface ISurvey {
  _id: string;
  name: string;
  pdfUrl: string;
  questions: IQuestion[];
}
