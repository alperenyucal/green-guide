import { TabsParamList } from './TabsParamList';

export type StackParamList = {
  chatSummary: undefined;
} & TabsParamList;

export type ScreenName = keyof StackParamList;
