import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedScreen } from '@features/feed/components/FeedScreen';
import { PostScreen } from '@features/post/components/PostScreen';

export type FeedStackParamList = {
  Feed: undefined;
  PostDetail: { postId: string };
};

const Stack = createNativeStackNavigator<FeedStackParamList>();

export const FeedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Feed" component={FeedScreen} />
    <Stack.Screen name="PostDetail" component={PostScreen} />
  </Stack.Navigator>
);
