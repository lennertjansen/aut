import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { palette } from '../theme';

interface EventCardProps {
  event: {
    id: string;
    name: string;
    time: string;
    venue: string;
    organizer: string;
  };
  onPress: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onPress }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? palette.surfaceDark : palette.surface,
          borderColor: isDarkMode ? palette.dividerDark : palette.divider,
        },
      ]}
    >
      <View style={styles.timeContainer}>
        <Text style={[
          styles.time,
          { color: isDarkMode ? palette.textDark : palette.text }
        ]}>
          {event.time}
        </Text>
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={[
          styles.title,
          { color: isDarkMode ? palette.textDark : palette.text }
        ]}>
          {event.name}
        </Text>
        
        <View style={styles.detailsContainer}>
          <Icon
            name="location-on"
            size={16}
            color={isDarkMode ? palette.textSecondaryDark : palette.textSecondary}
            style={styles.icon}
          />
          <Text style={[
            styles.details,
            { color: isDarkMode ? palette.textSecondaryDark : palette.textSecondary }
          ]}>
            {event.venue}
          </Text>
        </View>
        
        <View style={styles.detailsContainer}>
          <Icon
            name="person"
            size={16}
            color={isDarkMode ? palette.textSecondaryDark : palette.textSecondary}
            style={styles.icon}
          />
          <Text style={[
            styles.details,
            { color: isDarkMode ? palette.textSecondaryDark : palette.textSecondary }
          ]}>
            {event.organizer}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  timeContainer: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRightWidth: 1,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  icon: {
    marginRight: 6,
  },
  details: {
    fontSize: 14,
  },
});

export default EventCard; 