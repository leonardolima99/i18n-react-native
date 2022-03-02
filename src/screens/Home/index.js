import React, {useReducer} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native';

import {useTranslation} from 'react-i18next';

const downloadedReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};
    default:
      throw new Error();
  }
};

const downloadedInitialState = {count: 0};

const Home = () => {
  const [state, dispatch] = useReducer(
    downloadedReducer,
    downloadedInitialState,
  );

  const {t} = useTranslation('home');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.welcome}>{t('welcome')}</Text>
        <Text style={styles.downloaded}>
          {state.count > 0 ? (
            <Text>
              {t('downloadedStart')}
              <Text style={styles.downloadedCount}>{state.count}</Text>
              {t('downloadedEnd', {count: state.count})}
            </Text>
          ) : (
            <Text>{t('downloaded_zero')}</Text>
          )}
        </Text>
        <Text style={styles.description}>
          Apenas demonstrando que podemos mudar dinamicamente o idioma durante o
          tempo de execução, isso é essencial para algumas aplicaçōes.
        </Text>
        <View style={styles.actions}>
          <Pressable
            style={styles.button}
            onPress={() => dispatch({type: 'INCREMENT'})}>
            <Text style={styles.textButton}>{t('button_increment')}</Text>
          </Pressable>
          {state.count > 0 ? (
            <Pressable
              style={styles.button}
              onPress={() => dispatch({type: 'DECREMENT'})}>
              <Text style={styles.textButton}>{t('button_decrement')}</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 15,
    color: '#333',
    flex: 1,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  downloaded: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
  },
  downloadedCount: {
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  actions: {
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 8,
  },
  textButton: {
    color: '#0091ff',
  },
});

export default React.memo(Home);
