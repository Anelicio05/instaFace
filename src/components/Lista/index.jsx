import React from "react";
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";

import Publi from "./Publi";
import feed from "../../mocks/feed"

function Lista(){
    return(
        <View style={estilos.lista}>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=> item.id.toString()}
                data={feed}
                renderItem={({item})=> <Publi data={item}/>}
            />
        </View>
    )
}

export default Lista

const estilos = StyleSheet.create({
    lista:{
        flex: 1,
    }
})