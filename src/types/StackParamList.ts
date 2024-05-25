import { TabsParamList } from "./TabsParamList";

export type StackParamList = {
} & TabsParamList;

export type ScreenName = keyof StackParamList;
