import { Color } from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface IconButtonProps extends TouchableOpacityProps {
  icon: string;
}

export function IconButton({ icon, onPress, style }: IconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <FontAwesome5 name={icon} size={20} color={Color.blue} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Color.blue,

    borderRadius: 32,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
