import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalProvider'; // Asumiendo que manejas autenticación global
import { View, Text } from 'react-native';

const Home = () => {
  const { user } = useContext(GlobalContext); // Suponiendo que `user` es parte del contexto global
  const [dateTime, setDateTime] = useState(new Date());

  // Función para actualizar la fecha y hora
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Actualiza cada segundo
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        {user ? `¡Bienvenido, ${user.name}!` : 'Bienvenido a la plataforma'}
      </Text>
      <Text style={{ marginTop: 10, fontSize: 18 }}>
        {`Fecha y hora actual: ${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}
      </Text>
      {/* Aquí va el resto del contenido de la página */}
    </View>
  );
};

export default Home;
