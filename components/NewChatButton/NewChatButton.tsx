import { Color } from '@/constants/Colors';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export function NewChatButton() {
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('chat', {
          conversationId: undefined,
        })
      }>
      <FontAwesome5
        name="edit"
        size={20}
        color={Color.white}
        style={{ marginRight: 16 }}
      />
    </TouchableOpacity>
  );
}
