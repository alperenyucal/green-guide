import { create } from 'zustand';
import { IMessage } from 'react-native-gifted-chat';

export type Conversation = {
  id: string;
  title: string;
  messages: IMessage[];
  history: [string, string][];
};

export type SettingsStore = {
  user: 'user1' | 'user2';
  setUser: (user: 'user1' | 'user2') => void;
  score: number;
  setScore: (score: number) => void;
};

export const useSettingsStore = create<SettingsStore>()(set => ({
  user: 'user1',
  setUser: user => set({ user }),
  score: 680,
  setScore: score => set({ score }),
}));
