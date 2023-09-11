import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert,Image } from "react-native";
import { Stack } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeView = () => {
    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
   
            <Stack fill center spacing={30}>
            <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/logo.png')}
                />
                <TouchableOpacity
                    style={styles.disable}
                    disabled={true}
                    activeOpacity={true ? 1 : 0.7}
                >
                    <Stack center direction="row"  spacing={20}>
                        <Text style={styles.textMenu}>
                            Registro Automatico
                        </Text>
                        <MaterialCommunityIcons name="robot" size={24} color="white" />
                    </Stack>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBtn}
                    onPress={()=> navigation.navigate("Form")}
                >
                    <Stack center direction="row" spacing={20}>
                        <Text style={styles.textMenu}>
                            Registro Manual
                        </Text>
                        <MaterialCommunityIcons name="book-edit" size={24} color="white" />
                    </Stack>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBtn}
                    onPress={()=> navigation.navigate("Report")}
                >
                  <Stack center direction="row" spacing={20}>
                        <Text style={styles.textMenu}>
                            Revisar Reportes
                        </Text>
                        <MaterialCommunityIcons name="clipboard-file" size={24} color="white" />
                    </Stack>
                </TouchableOpacity>
            </Stack>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    menuBtn: {
        backgroundColor: "purple",
        padding: 10,
        width: "50%",
        width: 230,
        alignSelf: "center",
        borderRadius: 10
    },
    textMenu: {
        fontSize: 15,
        textAlign: "center",
        color: "white"
    },
    tinyLogo: {
        width: 240,
        height: 150,
        marginBottom:60,
        alignSelf:"center"
      },
      disable:{
        backgroundColor: "#D3D3D3",
        padding: 10,
        width: "50%",
        width: 230,
        alignSelf: "center",
        borderRadius: 10
      }




})

export default HomeView;