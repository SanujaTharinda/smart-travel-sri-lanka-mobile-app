import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Datepicker, Icon, Layout } from '@ui-kitten/components';
import Label from './Label';
import { PRIMARY } from '../../theme/colors';

const CalendarIcon = (props) => (
  <Icon {...props} name='calendar'/>
);

const DatePicker = ({ label, caption = "", date, setDate }) => {


  return (
    <Layout style={styles.container} level='1'>

      <Datepicker
        size = {"large"}
        label={() => <Label text = {label}/>}
        caption={caption}
        placeholder='Pick Date'
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        accessoryRight={CalendarIcon}
        
      />

    </Layout>
  );
};

export default React.memo(DatePicker);

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    borderColor: PRIMARY,
    marginVertical: 8
  }
});