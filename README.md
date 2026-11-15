# UniEvents
# UniEvents – Student Event Management App

Student Name: R.A.K.Ranasinghe
Student ID: PS/2022/060  

Course: Mobile Application Development  
Assignment: Assignment 01

---

## 1. Introduction

UniEvents is a mobile application developed using React Native and Expo. It is designed to help university students discover and explore university events easily.

Students can view upcoming events, read event details, filter events by category, and save their favorite events.

The main purpose of this application is to provide a simple platform where students can find information about university events in one place.

## 2. Main Features

- View upcoming university events.
- Browse all available events.
- View detailed information about each event.
- Add and remove favorite events.
- View saved events on the Favorites screen.
- Receive local notifications.
- Detect when the application moves between background and foreground states.

## 3. Application Screens

The application contains five main screens.

### 3.1 Home Screen
Displays a welcome message and a list of upcoming university events.

### 3.2 Events Screen
Displays all available events. Students can filter events according to categories such as Technology, Education, Entertainment, and Sports.

### 3.3 Event Details Screen
Displays detailed information about a selected event, including its title, date, time, location, and description.

### 3.4 Favorites Screen
Displays events saved by the user. Users can also remove events from their favorites.

### 3.5 Profile Screen
Displays basic student profile information.

## 4. Technologies Used

- React Native
- JavaScript
- Expo
- Expo Router
- React Hooks
- React Native Components
- expo-notifications

## 5. React Native Components Used

| Component | Purpose |
|---|---|
| View | Organizing UI layouts |
| Text | Displaying text |
| Image | Displaying event images |
| Pressable | Handling user interactions |
| FlatList | Displaying event lists |
| Modal | Displaying category filter options |
| ScrollView | Scrolling through event details |

## 6. State Management

The application uses React's useState hook and React Context API to manage interactive data.

The FavoritesContext provides shared favorite event data across multiple screens.

When a user adds an event to favorites, the updated data is immediately available on the Favorites screen.


## 7. AppState Implementation

[Complete this section after implementing the AppState API.]

The application uses React Native's AppState API to detect when the application moves between background and foreground states.

An event listener is used to monitor changes in the application state.


## 8. Project Demonstration Video

Video Link: https://drive.google.com/file/d/14xLhwW8f5vqT04qxMxLRCmdN2PIQxTYe/view?usp=drive_link

The demonstration video includes:

- Application overview
- Navigation between screens
- Viewing event details
- Adding and removing favorite events
- AppState functionality
- Local notification functionality

## 9. Conclusion

UniEvents provides a simple and user-friendly platform for university students to discover and explore university events.

This project demonstrates the use of React Native components, Expo Router navigation, shared state management, AppState API, and local notifications in mobile application development.

---

**Developed as part of the Mobile Application Development Assignment 01.**
