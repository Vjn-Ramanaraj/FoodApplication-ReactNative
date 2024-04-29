import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

const Settings = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkModeEnabled((previousState) => !previousState);
  };

  const toggleNotifications = () => {
    setIsNotificationsEnabled((previousState) => !previousState);
  };

  return (
    <View style={[styles.container, isDarkModeEnabled && styles.darkModeContainer]}>
      <Text style={[styles.heading, isDarkModeEnabled && styles.darkModeText]}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={[styles.settingLabel, isDarkModeEnabled && styles.darkModeText]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkModeEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={[styles.settingLabel, isDarkModeEnabled && styles.darkModeText]}>Notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isNotificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotifications}
          value={isNotificationsEnabled}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  darkModeContainer: {
    backgroundColor: '#000',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  darkModeText: {
    color: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingLabel: {
    fontSize: 16,
    color: '#000',
  },
});
