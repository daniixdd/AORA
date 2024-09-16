import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const CustomButton = ({ title, onPress, loading }) => {
  return (
    <TouchableOpacity 
      onPress={!loading ? onPress : null} 
      style={{
        backgroundColor: loading ? '#ccc' : '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
      }}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
