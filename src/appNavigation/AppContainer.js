import React, { useEffect, useCallback } from 'react';
import { Button, View, Text, BackHandler, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from './NavigationService';
import TopLevelNavigator from './Router';
import I18n from "i18n-js";
import { getLanguageTag } from "i18n";

export default function AppContainer() {
  const language = useSelector(store => store.auth.language);
  I18n.locale = language || getLanguageTag()

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);


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
