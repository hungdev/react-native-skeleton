import React, { useEffect, useCallback } from 'react';
import { Button, View, Text, BackHandler, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from './NavigationService';
import TopLevelNavigator from './Router';
import { setI18nConfig } from 'i18n'
import * as RNLocalize from "react-native-localize";

export default function AppContainer() {
  setI18nConfig();

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);

    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);

  handleLocalizationChange = () => {
    setI18nConfig();
  };

  const handleBackButton = () => {
    // Alert.alert('Are you sure you want to exit?')
    return true;
  };

  return (
    <TopLevelNavigator
      refs={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    ></TopLevelNavigator>
  );
}
