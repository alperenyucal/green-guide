import { ScreenName, StackParamList } from '@/src/types/StackParamList';
import { RouteProp, useRoute } from '@react-navigation/native';


export const useAppRoute = <T extends ScreenName>() =>
  useRoute<RouteProp<StackParamList, T>>();
