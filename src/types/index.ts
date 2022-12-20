interface IThread {
  id: string;
  title: string;
  thumbnail: string;
  summary: string;
  content: string;
  author: string;
  totalReward: number;
  rewardCount: number;
  participant: number;
}

interface ICategory {
  id: string;
  name: string;
  route: string;
}

export type { IThread, ICategory };
