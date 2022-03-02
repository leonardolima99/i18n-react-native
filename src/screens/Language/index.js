/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import {useTranslation} from 'react-i18next';

const Language = () => {
  const {t, i18n} = useTranslation('language');

  console.log('Language', i18n.language);
  const languages = useMemo(() => {
    return [
      {name: t('portuguese'), id: 'pt-BR'},
      {name: t('english'), id: 'en-US'},
    ];
  }, [i18n.language]);

  const onPressLanguage = useCallback(language => {
    i18n.changeLanguage(language);
  }, []);

  const renderItem = ({item}) => {
    const isSelected = item.id === i18n.language;
    return (
      <View style={styles.item}>
        <View style={styles.nameContainer}>
          <Pressable onPress={() => onPressLanguage(item.id)}>
            <Text style={styles.languageName}>{item.name}</Text>
          </Pressable>
        </View>
        {isSelected ? <View style={styles.selected} /> : null}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={languages}
          key={(item, index) => String(index)}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 15,
  },
  item: {
    height: 45,
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  languageName: {
    color: '#333',
    fontSize: 16,
  },
  list: {
    marginTop: 20,
    color: '#333',
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: 'lightgreen',
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

export default React.memo(Language);
