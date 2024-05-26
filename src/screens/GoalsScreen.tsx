import { GoalCard } from '@/components/GoalCard';
import { getTasks } from '@/service/api';
import { useQuery } from '@tanstack/react-query';
import { ScrollView } from 'react-native';

export function GoalsScreen() {
  const { data } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 16,
      }}>
      {data?.map(task => <GoalCard key={task.id} goal={task} />)}
    </ScrollView>
  );
}
