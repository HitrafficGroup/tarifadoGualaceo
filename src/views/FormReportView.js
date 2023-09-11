import React,{useState} from "react";
import { StyleSheet, Image,Text, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import { Stack, TextInput,ActivityIndicator } from "@react-native-material/core";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar, Card, IconButton } from 'react-native-paper';
const FormReportView = () => {

    const [text, onChangeText] = useState('');
    const [loading, setLoading] = useState(false);
    const [vehicleData, setVehicleData] = useState(
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

    const [modalVisible, setModalVisible] = React.useState(false);

    const consumirApi = async () => {
        let placa_aux = text.toLocaleUpperCase()
        setLoading(true)
        if (placa_aux.length < 6) {
            placa_aux = "PBJ7247"
        }
        try {
            const response = await fetch(
                `http://ec2-13-58-22-224.us-east-2.compute.amazonaws.com/data_ant?placa=${placa_aux}`,
            );
            const json = await response.json();
            setVehicleData(json)
            console.log(json)
            setLoading(false)
            setModalVisible(true)
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
            setLoading(false)
        }
       

    }
    return (
        <View style={styles.container} >
            {loading ? (
            <ActivityIndicator  size="large" />
            ) :
            (
            <SafeAreaView >
                
                <ScrollView style={styles.scrollView}>
                    <Stack fill center spacing={10}>
                        <Text style={styles.title}>Ingresar Placa</Text>
                    <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/placa2.png')}
                />
                       
                        <TextInput
                            style={styles.input}
                            label="Ingresa La placa"
                            variant="outlined"
                            onChangeText={onChangeText}
                            value={text}
                        />
                        <TouchableOpacity
                            style={styles.menuBtn}
                            onPress={() => { consumirApi() }}
                        >
                            <Stack center direction="row" spacing={20}>
                                <Text style={styles.textMenu}>
                                    Traer Datos
                                </Text>
                                <MaterialCommunityIcons name="cloud-download" size={24} color="white" />
                            </Stack>
                        </TouchableOpacity>

                    </Stack>
                </ScrollView>
            </SafeAreaView>
             )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Stack fill  spacing={10}>
                            <Text style={styles.modalText}>Datos del Vehiculo:</Text>
                            <Stack  direction="row" spacing={20}>
                                <Text style={styles.titleText}>Marca:</Text>
                                <Text >{vehicleData.marca}</Text>
                            </Stack>
                            <Stack  direction="row" spacing={20}>
                                <Text style={styles.titleText}>Color:</Text>
                                <Text >{vehicleData.color}</Text>
                            </Stack>
                            <Stack  direction="row" spacing={20}>
                                <Text style={styles.titleText}>Year:</Text>
                                <Text >{vehicleData.year}</Text>
                            </Stack>
                  
                                <Text style={styles.titleText}>Descripcion:</Text>
                                <Text  >{vehicleData.descripcion}</Text>
             
                            <Stack  direction="row" spacing={20}>
                                <Text style={styles.titleText}>tipo:</Text>
                                <Text >{vehicleData.tipo}</Text>
                            </Stack>
                            <Stack  direction="row" spacing={20}>
                                <Text style={styles.titleText}>Fecha:</Text>
                                <Text >{vehicleData.fecha_matricula}</Text>
                            </Stack>
                  
                            <Pressable
                                style={styles.btnCancelar}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={styles.btnAceptar}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Procesar</Text>
                            </Pressable>
           
                        </Stack>
                    </View>
                </View>
            </Modal>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent:"center",
    },
    scrollView: {
        marginHorizontal: 20,
    },
    input: {
        width: "100%",
        marginTop: 10
    },
    Button: {
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    titleText: {
        color:"#BDC3C7",
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
    },
    menuBtn: {
        backgroundColor: "#2ECC71",
        padding: 10,
        width: "100%",
        alignSelf: "center",
        borderRadius: 10
    },
    textMenu: {
        fontSize: 15,
        textAlign: "center",
        color: "white"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        width:280,
        height:370,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    btnAceptar: {
        backgroundColor: '#2ECC71',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        color:"white",
        width:"100%",
    },
    btnCancelar: {
        backgroundColor: '#EC7063',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width:"100%",
        color:"white"
    },
    modalText: {
        fontWeight: 'bold',
        flexWrap: "wrap",
        textAlign: 'center',
        color:"#34495E"
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      tinyLogo: {
        width: 210,
        height: 120,
        marginBottom:60,
        alignSelf:"center"
      },
});

export default FormReportView;