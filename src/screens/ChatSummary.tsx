import { Typography } from '@/components/Typography';
import { imagetoText } from '@/service/llm';
import { useChatStore } from '@/store/chatStore';
import { useQuery } from '@tanstack/react-query';
import { ScrollView } from 'react-native';

export function ChatSummary() {
  const { conversations } = useChatStore();

  const allHistory = JSON.parse(
    `[${conversations
      .map(conversation =>
        conversation.history.map(([m1, m2]) => `["${m1}", "${m2}"]`).join(', '),
      )
      .join(',')}]`,
  );
  const { data, isPending } = useQuery({
    queryKey: ['chatSummar11'],
    queryFn: () =>
      imagetoText({
        prompt: allHistory,
        history: [],
      }),
  });

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 30,
        gap: 20,
      }}>
      <Typography variant="defaultSemiBold">Conversations Insights</Typography>
      {isPending && <Typography>Loading...</Typography>}
      <Typography>{data?.llm_response}</Typography>
    </ScrollView>
  );
}
