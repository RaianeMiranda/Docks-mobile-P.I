import React from 'react';
import { render } from '@testing-library/react-native';
import { LoginScreen } from '../screens/LoginScreen';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

describe('LoginScreen', () => {
    test('renders email and password fields', () => {
    const { getByTestId } = render(<LoginScreen navigation={navigation.openDrawer()} />);
    const emailField = getByTestId('Email');
    const passwordField = getByTestId('Senha');

    expect(emailField).toBeDefined();
    expect(passwordField).toBeDefined();
  });
});