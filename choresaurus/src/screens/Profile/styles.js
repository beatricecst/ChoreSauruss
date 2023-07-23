import { ImageBackground, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6E9",
  },
     userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        color: '#916C63',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#916C63',
      },
      caption: {
        fontSize: 20,
        color: '#916C63',
        lineHeight: 12,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#916C63',
        borderBottomWidth: 1,
        borderTopColor: '#916C63',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
      },
      menuItemImage: {
        width: 24,
        height: 24,
        marginRight: 10,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
      ratingSection: {
        marginBottom: 8,
        marginLeft: 10,
      },
      ratingHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      ratingHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10, // Adjust the marginRight value to create space between text and image
      },
      ratingImage: {
        width: 300, // Adjust the width and height as needed for your image
        height: 100,
      },
      division: {
        width: 400,
        height: 150,
      }
    });
