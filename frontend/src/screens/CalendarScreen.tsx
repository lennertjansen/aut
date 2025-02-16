import React, { useState, useCallback } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { Calendar, CalendarProvider, ExpandableCalendar, AgendaList, WeekCalendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { calendarThemeLight, calendarThemeDark, palette } from '../theme';

type ViewType = 'month' | 'week' | 'day' | 'agenda';

const CalendarScreen: React.FC = () => {
  const [viewType, setViewType] = useState<ViewType>('month');
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  // Sample events data - in real app, this would come from your API
  const events = {
    '2024-02-15': [{
      id: '1',
      name: 'Techno Night',
      time: '23:00',
      venue: 'Club X',
      organizer: 'DJ Smith'
    }],
    '2024-02-16': [{
      id: '2',
      name: 'Jazz Evening',
      time: '20:00',
      venue: 'Jazz Cafe',
      organizer: 'Jazz Club Amsterdam'
    }]
  };

  const renderCalendarView = () => {
    const theme = isDarkMode ? calendarThemeDark : calendarThemeLight;

    switch (viewType) {
      case 'month':
        return (
          <Calendar
            theme={theme}
            markedDates={{
              '2024-02-15': { marked: true, dotColor: theme.dotColor },
              '2024-02-16': { marked: true, dotColor: theme.dotColor }
            }}
            onDayPress={(day) => {
              // Handle day press - navigate to day view or show events
              console.log('Day pressed:', day);
            }}
            enableSwipeMonths
          />
        );
      case 'week':
        return (
          <WeekCalendar
            theme={theme}
            onDayPress={(day) => {
              console.log('Day pressed:', day);
            }}
          />
        );
      case 'agenda':
        return (
          <CalendarProvider
            date="2024-02-15"
            theme={theme}
          >
            <ExpandableCalendar
              theme={theme}
              firstDay={1}
            />
            <AgendaList
              sections={Object.entries(events).map(([date, items]) => ({
                title: date,
                data: items
              }))}
              renderItem={({ item }) => (
                <View style={[
                  styles.agendaItem,
                  { backgroundColor: isDarkMode ? palette.surfaceDark : palette.surface }
                ]}>
                  <View style={styles.eventInfo}>
                    <Text style={[
                      styles.eventTitle,
                      { color: isDarkMode ? palette.textDark : palette.text }
                    ]}>
                      {item.name}
                    </Text>
                    <Text style={[
                      styles.eventDetails,
                      { color: isDarkMode ? palette.textSecondaryDark : palette.textSecondary }
                    ]}>
                      {`${item.time} • ${item.venue}`}
                    </Text>
                    <Text style={[
                      styles.eventOrganizer,
                      { color: isDarkMode ? palette.textSecondaryDark : palette.textSecondary }
                    ]}>
                      {item.organizer}
                    </Text>
                  </View>
                </View>
              )}
            />
          </CalendarProvider>
        );
      default:
        return null;
    }
  };

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? palette.backgroundDark : palette.background }
    ]}>
      <View style={styles.viewTypeSelector}>
        {/* Add view type selector buttons here */}
      </View>
      {renderCalendarView()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTypeSelector: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  agendaItem: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  eventDetails: {
    fontSize: 14,
    marginBottom: 2,
  },
  eventOrganizer: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default CalendarScreen; 