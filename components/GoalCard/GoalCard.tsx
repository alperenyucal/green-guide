import { View } from 'react-native';
import { Color } from '@/constants/Colors';
import { Task, updateTaskScore } from '@/service/api';
import { useSettingsStore } from '@/store/settingsStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';

interface GoalCardProps {
  goal: Task;
  hideDescription?: boolean;
}

export function GoalCard({ goal, hideDescription }: GoalCardProps) {
  const { user, score, setScore } = useSettingsStore();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateTaskScore,
    onSuccess: task => {
      queryClient.setQueryData(['tasks'], (tasks: Task[] | undefined) =>
        tasks?.map(t => (t.id === task.id ? task : t)),
      );
    },
  });

  const isCompleted =
    goal.condition === 'gte'
      ? goal.user_scores[user] >= goal.total_amount
      : goal.user_scores[user] <= goal.total_amount;

  const goalReward = 20;

  useEffect(() => {
    if (isCompleted) {
      setScore(score + goalReward);
    } else {
      setScore(score - goalReward);
    }
  }, [isCompleted, setScore]);

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: isCompleted ? Color.lightGreen : Color.lightBlue,
        borderRadius: 24,
        shadowColor: Color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
      }}>
      <View style={{ flex: 1 }}>
        <Typography variant="defaultSemiBold">{goal.name}</Typography>
        {!hideDescription && (
          <Typography
            variant="default"
            style={{
              color: Color.navy,
            }}>
            {goal.description}
          </Typography>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 16,
        }}>
        <IconButton
          icon="minus"
          onPress={() => {
            mutation.mutate({
              task: goal.id,
              score: goal.user_scores[user] - 1,
            });
          }}
        />
        <Typography
          variant="title"
          style={{
            width: 40,
            textAlign: 'center',
            color: isCompleted ? Color.green : Color.blue,
          }}>
          {goal.user_scores[user]}
        </Typography>
        <IconButton
          icon="plus"
          onPress={() => {
            mutation.mutate({
              task: goal.id,
              score: goal.user_scores[user] + 1,
            });
          }}
        />
      </View>
    </View>
  );
}
