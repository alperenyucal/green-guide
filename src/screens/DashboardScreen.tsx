import { Conversations } from '@/components/Conversations';
import { LevelProgress } from '@/components/LevelProgress';
import { Typography } from '@/components/Typography';
import { ScrollView, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function DashboardScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 20,
        paddingHorizontal: 20,
        paddingTop: insets.top + 20,
        paddingBottom: insets.bottom + 20,
      }}>
      <View
        style={{
          minWidth: 240,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}>
        <Image
          source={{
            uri: 'https://i.pravatar.cc',
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
        />
        <View style={{ gap: 4, flex: 1 }}>
          <Typography variant="default">John Doe</Typography>
          <LevelProgress points={620} />
        </View>
      </View>

      <Conversations />
    </ScrollView>
  );
}
