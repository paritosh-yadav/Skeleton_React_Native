/**
 * @flow
 */
import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StatusBar,
    FlatList,
    View,
    Text,
    Button,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './home.component.style';

type HomeScreenNavigationProp = StackNavigationProp<null, 'Home'>;
type Props = {
    navigation: HomeScreenNavigationProp,
    counter: number,
    changeCounter: () => void,
    breweriesList: Array<Object> | null,
    fetchingBreweriesList: boolean,
    breweriesListError: null | Object,
};
export function HomeComponent({
    navigation,
    counter,
    changeCounter,
    breweriesList,
    fetchingBreweriesList,
    breweriesListError,
}: Props) {
    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <View style={styles.body}>
                    <Button
                        title="Go to Details"
                        onPress={() =>
                            navigation.navigate('Details', {
                                itemId: 86,
                                otherParam: 'anything',
                            })
                        }
                    />
                    <Button
                        title="Update the title"
                        onPress={() =>
                            navigation.setOptions({
                                title: 'Home Updated!',
                            })
                        }
                    />
                    <Button
                        testID="change_counter"
                        title="Change Counter"
                        onPress={changeCounter}
                    />

                    <View style={styles.sectionContainer}>
                        <Text testID="screen_text" style={styles.sectionTitle}>
                            Home Screen
                        </Text>
                        <Text
                            testID="counter_value"
                            style={styles.sectionTitle}>
                            Counter {counter.toString()}
                        </Text>
                        {breweriesListError && (
                            <Text>Error fetching list...</Text>
                        )}
                        {fetchingBreweriesList && !breweriesList && (
                            <Text>Loading...</Text>
                        )}
                        {breweriesList && (
                            <FlatList
                                contentContainerStyle={styles.scrollView}
                                data={breweriesList}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <Text style={styles.highlight}>
                                        {item.name}
                                    </Text>
                                )}
                            />
                        )}
                    </View>
                </View>
            </SafeAreaView>
        </Fragment>
    );
}
