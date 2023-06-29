import * as React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const LoadingIndicator = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
);

export default LoadingIndicator;