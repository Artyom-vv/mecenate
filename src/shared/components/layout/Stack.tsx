import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

type StackProps = ViewProps & {
  gap?: number;
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
};

export const Stack: React.FC<StackProps> = ({
  gap,
  direction = 'column',
  align = 'flex-start',
  justify = 'flex-start',
  style,
  children,
  ...rest
}) => {
  return (
    <View
      style={[
        styles.base,
        { flexDirection: direction, alignItems: align, justifyContent: justify },
        gap != null && { gap },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

export const Row: React.FC<Omit<StackProps, 'direction'>> = (props) => (
  <Stack direction="row" {...props} />
);

export const Column: React.FC<Omit<StackProps, 'direction'>> = (props) => (
  <Stack direction="column" {...props} />
);

const styles = StyleSheet.create({
  base: {},
});
