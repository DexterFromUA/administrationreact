export interface InQueueViewInterface {
  setSetting: (flag: boolean) => void;
  friendsInQueue: Record<string, any>[];
  setting: boolean;
  fullWidth: number;
}

export interface InQueueInterface {
  friendsInQueue: Record<string, any>[];
}
