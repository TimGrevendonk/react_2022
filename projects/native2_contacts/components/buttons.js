import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function Buttons({ handlePrevious, handlePhone, handleNext, handleAdd, handleUpdate, handleDelete }) {
  return (
    <View>
      <View style={styles.horizontal}>
        <TouchableOpacity onPress={handlePrevious}>
          <Image source={require('../buttons/back.png')} style={styles.small} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePhone}>
          <Image source={require('../buttons/phonei.png')} style={styles.small} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Image source={require('../buttons/next.png')} style={styles.small} />
        </TouchableOpacity>
      </View>
      <View style={styles.horizontal}>
        <TouchableOpacity onPress={handleAdd}>
          <Image source={require('../buttons/add.png')} style={styles.small} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUpdate}>
          <Image source={require('../buttons/update.png')} style={styles.small} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Image source={require('../buttons/delete.png')} style={styles.small} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center'
  },
  small: {
    width: 75,
    height: 75,
    margin: 5,
    borderRadius: 75
  },
});