import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#737380'
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 22,
    lineHeight: 24,
    color: '#737380'
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },

  incidentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  incidentHeaderItem: {
    width: '50%'
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    borderTopColor: '#F0F0F5',
    borderTopWidth: 1,
    
    paddingTop: 20
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  }
});