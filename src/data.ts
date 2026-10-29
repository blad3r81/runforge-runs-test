export type RunStatus = 'queued' | 'running' | 'succeeded' | 'failed';
export type Run = { id: string; name: string; repository: string; branch: string; status: RunStatus; createdAt: string; durationSeconds?: number; logs: string[]; result?: string };

export const mockRuns: Run[] = [
 {id:'run_8f24',name:'Refactor authentication flow',repository:'web-platform',branch:'feature/auth-refactor',status:'running',createdAt:'2026-10-29T10:42:00Z',durationSeconds:142,logs:['Environment initialized','Repository cloned','Analyzing authentication modules','Applying changes to session handling']},
 {id:'run_8f23',name:'Fix checkout tests',repository:'payments',branch:'fix/checkout-tests',status:'succeeded',createdAt:'2026-10-29T09:18:00Z',durationSeconds:218,logs:['Environment initialized','Running test suite','Updated checkout fixtures','All tests passed'],result:'Updated checkout tests and verified 24 passing checks.'},
 {id:'run_8f22',name:'Update dependencies',repository:'api-service',branch:'chore/dependencies',status:'queued',createdAt:'2026-10-29T08:52:00Z',logs:['Run created','Waiting for an available worker']},
 {id:'run_8f21',name:'Investigate build failure',repository:'design-system',branch:'fix/build-pipeline',status:'failed',createdAt:'2026-10-28T15:06:00Z',durationSeconds:87,logs:['Environment initialized','Installing dependencies','Build failed: missing environment variable'],result:'Build stopped. Check the environment configuration and retry.'},
 {id:'run_8f20',name:'Add usage dashboard',repository:'web-platform',branch:'feature/usage-dashboard',status:'succeeded',createdAt:'2026-10-28T12:30:00Z',durationSeconds:364,logs:['Repository cloned','Created dashboard components','Running checks','All checks passed'],result:'Usage dashboard implementation is ready for review.'},
 {id:'run_8f19',name:'Review API endpoints',repository:'api-service',branch:'review/endpoints',status:'queued',createdAt:'2026-10-28T10:15:00Z',logs:['Run created','Waiting for an available worker']},
 {id:'run_8f18',name:'Improve mobile navigation',repository:'web-platform',branch:'feature/mobile-nav',status:'succeeded',createdAt:'2026-10-27T14:20:00Z',durationSeconds:195,logs:['Environment initialized','Updated navigation','Responsive checks passed'],result:'Mobile navigation updated and ready for review.'}
];

// Add ?mockError=1 to the URL to exercise the error and retry states.
let failedOnce = false;
export function fetchRuns(): Promise<Run[]> {
 return new Promise((resolve, reject) => setTimeout(() => {
  if (new URLSearchParams(window.location.search).has('mockError') && !failedOnce) { failedOnce = true; reject(new Error('Mock request failed')); return; }
  resolve(mockRuns);
 }, 650));
}
