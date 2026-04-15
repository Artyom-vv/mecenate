import { NavigatorScreenParams } from '@react-navigation/native';
import { FeedStackParamList } from './stacks/FeedStack';

export type RootStackParamList = {
  FeedStack: NavigatorScreenParams<FeedStackParamList>;
};
