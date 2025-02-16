import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Switch,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { palette } from '../theme';

interface Organizer {
  id: string;
  name: string;
  type: string;
  isEnabled: boolean;
}

const FollowingScreen: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [organizers, setOrganizers] = useState<Organizer[]>([
    { id: '1', name: 'Club X', type: 'Venue', isEnabled: true },
    { id: '2', name: 'DJ Smith', type: 'Artist', isEnabled: true },
    { id: '3', name: 'Jazz Club Amsterdam', type: 'Venue', isEnabled: true },
    { id: '4', name: 'Electronic Music Collective', type: 'Organizer', isEnabled: true },
  ]);

  const toggleOrganizer = (id: string) => {
    setOrganizers(organizers.map(org =>
      org.id === id ? { ...org, isEnabled: !org.isEnabled } : org
    ));
  };

  const renderItem = ({ item }: { item: Organizer }) => (
    <TouchableOpacity
      style={[
        styles.organizerItem,
        {
          backgroundColor: isDarkMode ? palette.surfaceDark : palette.surface,
          borderColor: isDarkMode ? palette.dividerDark : palette.divider,
        },
      ]}
      onPress={() => {/* Navigate to organizer profile */}}
    >
      <View style={styles.organizerInfo}>
        <Text style={[
          styles.organizerName,
          { color: isDarkMode ? palette.textDark : palette.text }
        ]}>
          {item.name}
        </Text>
        <Text style={[
          styles.organizerType,
          { color: isDarkMode ? palette.textSecondaryDark : palette.textSecondary }
        ]}>
          {item.type}
        </Text>
      </View>
      
      <Switch
        value={item.isEnabled}
        onValueChange={() => toggleOrganizer(item.id)}
        trackColor={{
          false: isDarkMode ? palette.dividerDark : palette.divider,
          true: isDarkMode ? palette.primaryDark : palette.primary,
        }}
        thumbColor={palette.surface}
      />
    </TouchableOpacity>
  );

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? palette.backgroundDark : palette.background }
    ]}>
      <View style={styles.header}>
        <Text style={[
          styles.title,
          { color: isDarkMode ? palette.textDark : palette.text }
        ]}>
          Following
        </Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {/* Navigate to discover screen */}}
        >
          <Icon
            name="add"
            size={24}
            color={isDarkMode ? palette.primaryDark : palette.primary}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={organizers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    padding: 8,
  },
  list: {
    padding: 16,
  },
  organizerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  organizerInfo: {
    flex: 1,
  },
  organizerName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  organizerType: {
    fontSize: 14,
  },
});

export default FollowingScreen; 