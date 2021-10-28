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
    possibleIn: 2,
    necessaryAsOf: 3,
    level: 1,
    step: 'Test 1',
    action: ' v1 to v3 You need to test 1.',
  },
  {
    possibleIn: 2,
    necessaryAsOf: 3,
    level: 1,
    step: 'Test 2',
    action: 'v1 to v3 You need to test 2.',
  },
  {
    possibleIn: 2,
    necessaryAsOf: 3,
    level: 1,
    step: 'Test 3',
    action: 'v1 to v3 You need to test 3.',
  },
  {
    possibleIn: 1,
    necessaryAsOf: 2,
    level: 1,
    step: 'Test 1',
    action: 'v1 to v2 You need to test 1.',
  },
  {
    possibleIn: 1,
    necessaryAsOf: 2,
    level: 1,
    step: 'Test 2',
    action: 'v1 to v2 You need to test 2.',
  },
  {
    possibleIn: 2,
    necessaryAsOf: 3,
    level: 1,
    step: 'Test 1',
    action: 'v2 to v3 This is a test 1.',
  },
  {
    possibleIn: 2,
    necessaryAsOf: 3,
    level: 1,
    step: 'Test 1',
    action: 'v2 to v3 This is a test 2.',
  },
];
