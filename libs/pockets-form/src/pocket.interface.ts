export interface Pocket {
  name: string;
  goal?: { amount: string; currency: string };
  fundAmount?: { amount: string; currency: string };
  account?: { name: string; number: string; id: string; availableBalance: number };
}
