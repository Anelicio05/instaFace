import React from "react";
import {View, Image, StyleSheet, TouchableOpacity} from "react-native"

import logo from "../../../assets/logo.png"
import msg from "../../../assets/msg.png"

function Topo(){
    return(
        <View style={estilos.logoBox}>
            <Image source={logo} style={estilos.logo}/>

            <TouchableOpacity>
                <Image source={msg} style={estilos.logoMsg}/>
            </TouchableOpacity>
        </View>
    )
}

export default Topo

const estilos = StyleSheet.create({
    logoBox:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: 40,
        paddingHorizontal: 10,
        borderBottomWidth: 0.2,
        borderColor: "#dbdbdb",
    },
    logo:{
        width: 150,
        height: 60,
    },
    logoMsg:{
        width: 45,
        height: 45,
    }
})