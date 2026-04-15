import React, { useMemo, useState } from 'react';
import { Image, StyleSheet, View, type ImageStyle, type StyleProp, type ViewStyle } from 'react-native';

import { baseTheme } from '@theme';

interface AvatarProps {
  uri?: string | null;
  size?: number;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

export const Avatar: React.FC<AvatarProps> = ({
  uri,
  size = 40,
  style,
  imageStyle,
}) => {
  const [hasError, setHasError] = useState(false);

  const shouldShowImage = !!uri && !hasError;

  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        width: size,
        height: size,
        borderRadius: size / 2,
      },
      style,
    ],
    [size, style],
  );

  const resolvedImageStyle = useMemo(
    () => [
      styles.image,
      {
        borderRadius: size / 2,
      },
      imageStyle,
    ],
    [size, imageStyle],
  );

  return (
    <View style={containerStyle}>
      {shouldShowImage ? (
        <Image
          source={{ uri }}
          style={resolvedImageStyle}
          resizeMode="cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const theme = baseTheme;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.surface,
  },
});
