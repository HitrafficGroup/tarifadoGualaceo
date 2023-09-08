import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import React from 'react';
export default function App() {

  const [text, onChangeText] = React.useState('');
  const [vehicleData, setVehicleData] = React.useState(
    {
      marca: "",
      color: "",
      year: "",
      descripcion: "",
      tipo: "",
      fecha_matricula: "",
      year_matricula: "",
      servicio: ""
    }
  );


  const consumirApi = async () => {
    let placa_aux = text.toLocaleUpperCase()
    if (placa_aux.length < 6) {
      placa_aux = "PBJ7247"
    }
    try {
      const response = await fetch(
        `http://192.168.1.14:3000/data_ant?placa=${placa_aux}`,
      );
      const json = await response.json();
      setVehicleData(json)
      console.log(json)
    } catch (error) {
      setVehicleData({
        marca: "",
        color: "",
        year: "",
        descripcion: "",
        tipo: "",
        fecha_matricula: "",
        year_matricula: "",
        servicio: ""
      })
      console.error(error);
    }


  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarifado Gualaceo </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder='Ingrese la Placa'
          value={text}
        />
        <Button
          style={styles.Button}
          onPress={consumirApi}
          title="TRAER INFORMACION"
          color="#2E86C1"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Marca:</Text>
          <Text >{vehicleData.marca}</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Color:</Text>
          <Text >{vehicleData.color}</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Year:</Text>
          <Text >{vehicleData.year}</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Descripcion:</Text>
          <Text style={{ flex: 1, width: 1 }} >{vehicleData.descripcion}</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>tipo:</Text>
          <Text >{vehicleData.tipo}</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Fecha:</Text>
          <Text >{vehicleData.fecha_matricula}</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4
  },
  Button: {
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleText: {
    fontWeight: 'bold',
    flexWrap: "wrap",
    marginRight: 20
  },
  formContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    width: 250
  }
});

