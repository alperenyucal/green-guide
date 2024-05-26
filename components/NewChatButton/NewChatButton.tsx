import { Color } from '@/constants/Colors';
import { cup_img } from '@/constants/Images';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { imagetoText } from '@/service/llm';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export function NewChatButton() {
  const navigation = useAppNavigation();

  imagetoText({
    image: cup_img,
    prompt: 'How can i recycle this item?',
    history: [],
  }).then(res => {
    console.log(res);
  });

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
