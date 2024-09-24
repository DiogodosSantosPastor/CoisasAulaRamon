import React from 'react';
import { Slot } from 'expo-router';
import { AppProvider } from './AppContext';

export default function Layout() {
    return (
        <AppProvider>
            <Slot /> 
        </AppProvider>
    );
}
