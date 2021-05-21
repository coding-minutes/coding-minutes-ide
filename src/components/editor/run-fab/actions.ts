import api from '~/services/api';

export interface Submission {
    time: string;
    memory: number;
    stdout: string;
    stderr: string;
    compile_output: string;
}

export const pollSubmission = (submissionId: string): Promise<Submission> => api.get(`submissions/${submissionId}`).then(response => response.data.data)
