import { View } from 'react-native';
import { Color } from '@/constants/Colors';
import { Typography } from '../Typography';

interface LevelProgressProps {
  points: number;
}

export function LevelProgress({ points }: LevelProgressProps) {
  const level = Math.floor(points / 100) + 1;
  const progress = points % 100;
  const nextLevel = level + 1;
  const pointsToNextLevel = 100 - (progress % 100);

  return (
    <View style={{ gap: 4 }}>
      <View
        style={{
          backgroundColor: 'lightgray',
          borderRadius: 4,
          height: 4,
          width: '100%',
        }}>
        <View
          style={{
            width: `${progress}%`,
            backgroundColor: Color.green,
            height: 4,
            borderRadius: 4,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 4,
        }}>
        <Typography
          style={{
            color: Color.green,
          }}>
          Level {level}
        </Typography>
        <View
          style={{
            flexDirection: 'row',
            gap: 4,
          }}>
          <Typography variant="small">{pointsToNextLevel} pts to</Typography>
          <Typography
            style={{
              color: Color.green,
            }}
            variant="small">
            Level {nextLevel}
          </Typography>
        </View>
      </View>
    </View>
  );
}
