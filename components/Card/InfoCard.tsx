import { ReactNode } from 'react';
import { View } from 'react-native';
import { Typography } from '../Typography';

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  children: string;
}
export function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {icon}
        <Typography variant="default">{title}</Typography>
      </View>
      <Typography variant="small">{children}</Typography>
    </View>
  );
}
