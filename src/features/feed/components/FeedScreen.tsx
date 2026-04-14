import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FeedStackParamList } from '@navigation/stacks/FeedStack';

type NavProp = StackNavigationProp<FeedStackParamList, 'Feed'>;

export const FeedScreen = () => {
  const navigation = useNavigation<NavProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed</Text>
      <Button
        title="Открыть пост"
        onPress={() => navigation.navigate('PostDetail', { postId: 'post_1' })}
      />
    </View>
  );
};
