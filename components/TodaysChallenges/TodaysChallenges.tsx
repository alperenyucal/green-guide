import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Color } from '@/constants/Colors';
import { getTasks } from '@/service/api';
import { useQuery } from '@tanstack/react-query';
import { GoalCard } from '../GoalCard';
import { Typography } from '../Typography';

export function TodaysChallenges() {
  const { data } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });

  return (
    <View
      style={{
        gap: 16,
      }}>
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <FontAwesome5 name="running" size={16} color={Color.gray} />
        <Typography variant="defaultSemiBold">
          Today&apos;s Challenges
        </Typography>
      </View>
      {data
        ?.filter((_, i) => i < 2)
        .map(task => <GoalCard key={task.id} hideDescription goal={task} />)}
    </View>
  );
}
