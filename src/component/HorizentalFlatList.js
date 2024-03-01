import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Colors } from '../constants/colors';
import normalize from '../utils/helpers/normalize';

const HorizontalFlatList = ({
    data,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        scrollEnabled={data.length>3}
        initialNumToRender={data.length>3?4:data.length}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{uri:item.poster}} style={styles.poster} resizeMode='stretch'/>
            <Text style={styles.itemname} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
            <Text style={styles.itemSE} numberOfLines={1} ellipsizeMode='tail'>S{item.season} {item.episode!=undefined?"E"+item.episode:""}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  item: {
    backgroundColor: Colors.black,
    borderWidth: normalize(0.45),
    borderRadius: normalize(5),
    width: normalize(80),
    borderColor: Colors.darkGrey,
    marginHorizontal: normalize(3),
    paddingBottom: normalize(10)
  },
  poster:{
    height:normalize(90),
    borderTopLeftRadius:normalize(5),
    borderTopRightRadius:normalize(5)
  },
  itemname:{
    textAlign:'center',
    fontSize: normalize(11),
    fontWeight: '700',
    marginTop: normalize(3),
    color:Colors.white,
    paddingHorizontal: normalize(10)
  },
  itemSE:{
    fontSize: normalize(10),
    textAlign:'center',
    fontWeight: '900',
    color: Colors.yellow
  }
});

export default HorizontalFlatList;
