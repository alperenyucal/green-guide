import { Button, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Color } from '@/constants/Colors';
import { useChatStore } from '@/store/chatStore';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { Typography } from '../Typography';

export function Conversations() {
  const { conversations } = useChatStore();
  const navigation = useAppNavigation();
  const { deleteConversation } = useChatStore();

  return (
    <View
      style={{
        paddingVertical: 16,
        gap: 16,
      }}>
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <FontAwesome5 name="history" size={16} color={Color.gray} />
        <Typography variant="defaultSemiBold">Conversation History</Typography>
      </View>
      <View style={{ gap: 8 }}>
        {conversations
          .filter((_, i) => i < 3)
          .map(conversation => (
            <TouchableOpacity
              style={{
                backgroundColor: Color.lightBlue,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 8,
              }}
              key={conversation.id}
              onPress={() =>
                navigation.navigate('chat', { conversationId: conversation.id })
              }>
              <Typography variant="default" style={{ flex: 1 }}>
                {conversation.title.replace('Title:', '') || 'Untitled'}
              </Typography>
              <TouchableOpacity
                style={{ padding: 12, marginHorizontal: -12 }}
                onPress={() => {
                  deleteConversation(conversation.id);
                }}>
                <FontAwesome5 name="trash" color={Color.red} size={16} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        {conversations.length === 0 && (
          <Typography variant="default" style={{ color: Color.gray }}>
            No conversations yet.
          </Typography>
        )}
        <Button
          onPress={() => navigation.navigate('chatSummary')}
          title="Generate Insights"
        />
      </View>
    </View>
  );
}
