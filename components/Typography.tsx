import { Text, type TextProps, StyleSheet } from 'react-native';

export interface TypographyProps extends TextProps {
  variant?:
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'small'
    | 'tiny';
}

export function Typography({
  style,
  variant = 'default',
  ...rest
}: TypographyProps) {
  return (
    <Text
      style={[
        variant === 'default' ? styles.default : undefined,
        variant === 'title' ? styles.title : undefined,
        variant === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        variant === 'subtitle' ? styles.subtitle : undefined,
        variant === 'link' ? styles.link : undefined,
        variant === 'small' ? styles.small : undefined,
        variant === 'tiny' ? styles.tiny : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
  },
  tiny: {
    fontSize: 10,
    lineHeight: 16,
  },
});
