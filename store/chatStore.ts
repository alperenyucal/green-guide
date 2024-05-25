import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMessage } from 'react-native-gifted-chat';

export type Conversation = {
  id: string;
  title: string;
  messages: IMessage[];
  history: [string, string][];
};

export type ChatStore = {
  conversations: Conversation[];
  addConversation: (conversation: Conversation) => void;
  deleteConversation: (id: string) => void;
};

export const useChatStore = create<ChatStore>()(
  persist(
    set => ({
      conversations: [],
      addConversation: conversation =>
        set(state => ({
          conversations: [...state.conversations, conversation],
        })),
      deleteConversation: (id: string) =>
        set(state => {
          const index = state.conversations.findIndex(c => c.id === id);
          if (index === -1) return state;
          const conversations = [...state.conversations];
          conversations.splice(index, 1);
          return { conversations };
        }),
    }),
    {
      name: 'chat-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
