import { getSubmission } from '~/services/judge';

export interface Submission {
  time: string;
  memory: number;
  stdout: string;
  stderr: string;
  compile_output: string;
}

export const pollSubmission = (submissionId: string): Promise<Submission> =>
  getSubmission(submissionId).then((response) => response.data.data);
