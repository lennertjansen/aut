import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, useColorScheme } from 'react-native';
import { palette } from '../theme';

type ViewType = 'month' | 'week' | 'day' | 'agenda';

interface ViewTypeSelectorProps {
  selectedView: ViewType;
  onViewChange: (viewType: ViewType) => void;
}

const ViewTypeSelector: React.FC<ViewTypeSelectorProps> = ({
  selectedView,
  onViewChange,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const viewTypes: ViewType[] = ['month', 'week', 'day', 'agenda'];

  return (
    <View style={styles.container}>
      {viewTypes.map((type) => (
        <TouchableOpacity
          key={type}
          style={[
            styles.button,
            {
              backgroundColor: selectedView === type
                ? (isDarkMode ? palette.primaryDark : palette.primary)
                : 'transparent',
              borderColor: isDarkMode ? palette.primaryDark : palette.primary,
            },
          ]}
          onPress={() => onViewChange(type)}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: selectedView === type
                  ? (isDarkMode ? palette.textDark : palette.surface)
                  : (isDarkMode ? palette.primaryDark : palette.primary),
              },
            ]}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ViewTypeSelector; 