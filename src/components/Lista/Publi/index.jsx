import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

import love from "../../../../assets/love.png"
import loveRed from "../../../../assets/love-red.png" 
import msg from "../../../../assets/msg.png"


function Publi(props){
    const [curtida, setCurtida] = useState(love)
    const [curti, setCurti] = useState(false)
    const [likrs, setLikrs] = useState(props.data.likers)

    function lik(){
       if(!curti){
            setCurtida(loveRed)
            setCurti(true)
            setLikrs(likrs + 1)
       }else{
            setCurtida(love)
            setCurti(false)
            setLikrs(likrs - 1)
       }
    }

    function mostralik(liker){
        if(liker === 0){
            return null
        }
        return(
            <Text style={estilos.curtidas}>{likrs} {likrs === 1 ? "Curtida" : "curtidas"}</Text>
        )
    }
    
    return(
        <View>
            <View style={estilos.viewPerfil}>
                <Image style={estilos.fotoPerfil} source={{uri: props.data.imgperfil}}/>
                <Text style={estilos.nomePerfil}>{props.data.nome}</Text>
            </View>
            <Image resizeMode="cover" style={estilos.fotoPublicacao} source={{uri: props.data.imgPublicacao}}/>
            <View style={estilos.feedBtn}>
                <TouchableOpacity onPress={lik}>
                    <Image style={estilos.likOff} source={curtida}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={estilos.likOff} source={msg}/>
                </TouchableOpacity>
            </View>

            {mostralik(likrs)}

            <View style={estilos.rodaPe}>
                <Text style={estilos.nomeRodaPe}>{props.data.nome} :</Text>
                <Text style={estilos.descricaoRodaPe}>{props.data.descricao}</Text>
            </View>
        </View>
    )
}

export default Publi

const estilos = StyleSheet.create({
    viewPerfil:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    nomePerfil:{
       fontSize: 22,
       marginLeft: 10,
    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    fotoPublicacao:{
        flex: 1,
        height: 400,
    },
    feedBtn:{
        flexDirection: "row",
        padding: 8,
    },
    likOff:{
        width: 40,
        height: 40,
    },
    rodaPe:{
        flexDirection: "row",
        padding: 8,
    },
    nomeRodaPe:{
        fontSize: 15,
        fontWeight: "bold"
    },
    descricaoRodaPe:{
        paddingLeft: 8,
    },
    curtidas:{
        marginLeft: 10,
        fontWeight: "bold",
    }
})