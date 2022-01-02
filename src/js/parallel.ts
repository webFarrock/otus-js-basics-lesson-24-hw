interface iJob {
  (): Promise<number>;
}
export class Parallel {
  result: number[] = [];

  protected activeJobs = 0;

  constructor(protected queueMaxSize: number) {}

  async jobs(...inputJobs: iJob[]): Promise<number[]> {
    const totalJobs = inputJobs.length;

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (inputJobs.length && this.activeJobs < this.queueMaxSize) {
          const job = inputJobs.shift() as iJob;

          this.activeJobs += 1;

          job().then((result) => {
            this.result.push(result);
            this.activeJobs -= 1;
          });
        }

        if (this.result.length >= totalJobs) {
          clearInterval(interval);
          resolve(this.result);
        }
      }, 1);
    });
  }
}
