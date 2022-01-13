interface iJob {
  (): Promise<number>;
}
export class Parallel {
  result: number[] = [];

  constructor(protected queueMaxSize: number) {}

  async jobs(...inputJobs: iJob[]): Promise<number[]> {
    const jobs = [...inputJobs];
    const totalJobs = jobs.length;

    return new Promise((resolve) => {
      const run = () => {
        const job = jobs.shift();

        if (job) {
          job().then((value: number): void => {
            this.result.push(value);
            if (this.result.length === totalJobs) {
              return resolve(this.result);
            }

            run();
          });
        }
      };

      for (let i = 0; i < this.queueMaxSize; i++) {
        run();
      }
    });
  }
}
