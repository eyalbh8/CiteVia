import { methodologyStages } from '@/components/arielos/pageContent';
export const methodology = methodologyStages.map((stage) => ({
  name: stage.title,
  question: stage.question,
  body: stage.copy,
  inputs: stage.inputs,
  outputs: stage.outputs,
}));
