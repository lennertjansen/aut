import { Theme } from '@react-navigation/native';

export const palette = {
  primary: '#6200ee',
  primaryDark: '#3700b3',
  secondary: '#03dac6',
  secondaryDark: '#018786',
  background: '#f6f6f6',
  backgroundDark: '#121212',
  surface: '#ffffff',
  surfaceDark: '#1e1e1e',
  error: '#b00020',
  errorDark: '#cf6679',
  text: '#000000',
  textDark: '#ffffff',
  textSecondary: '#666666',
  textSecondaryDark: '#999999',
  divider: '#e0e0e0',
  dividerDark: '#2e2e2e',
};

export const lightTheme = {
  dark: false,
  colors: {
    primary: palette.primary,
    background: palette.background,
    card: palette.surface,
    text: palette.text,
    border: palette.divider,
    notification: palette.error,
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    primary: palette.primaryDark,
    background: palette.backgroundDark,
    card: palette.surfaceDark,
    text: palette.textDark,
    border: palette.dividerDark,
    notification: palette.errorDark,
  },
};

export const calendarThemeLight = {
  backgroundColor: palette.background,
  calendarBackground: palette.surface,
  textSectionTitleColor: palette.textSecondary,
  selectedDayBackgroundColor: palette.primary,
  selectedDayTextColor: palette.surface,
  todayTextColor: palette.primary,
  dayTextColor: palette.text,
  textDisabledColor: palette.textSecondary,
  dotColor: palette.primary,
  selectedDotColor: palette.surface,
  arrowColor: palette.primary,
  monthTextColor: palette.text,
  textMonthFontWeight: 'bold' as const,
  textDayFontSize: 16,
  textMonthFontSize: 18,
  textDayHeaderFontSize: 14,
};

export const calendarThemeDark = {
  ...calendarThemeLight,
  backgroundColor: palette.backgroundDark,
  calendarBackground: palette.surfaceDark,
  textSectionTitleColor: palette.textSecondaryDark,
  selectedDayBackgroundColor: palette.primaryDark,
  selectedDayTextColor: palette.textDark,
  todayTextColor: palette.primaryDark,
  dayTextColor: palette.textDark,
  textDisabledColor: palette.textSecondaryDark,
  dotColor: palette.primaryDark,
  selectedDotColor: palette.textDark,
  arrowColor: palette.primaryDark,
  monthTextColor: palette.textDark,
}; 