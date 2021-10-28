export interface Step {
  step: string;
  action: string;
  possibleIn: number;
  necessaryAsOf: number;
  level: number;
  angularCLI?: boolean;
  ngUpgrade?: boolean;
  pwa?: boolean;
  material?: boolean;
  renderedStep?: string;
}

export const RECOMMENDATIONS: Step[] = [
  {
    possibleIn: 1,
    necessaryAsOf: 3,
    level: 1,
    step: 'Test 1',
    action: 'This is a test.',
  },
  {
    possibleIn: 1,
    necessaryAsOf: 2,
    level: 2,
    step: 'Test 2',
    action: 'This is a test.',
  },
  {
    possibleIn: 2,
    necessaryAsOf: 3,
    level: 3,
    step: 'Test 1',
    action: 'This is a test.',
  },
];
