import React,{ Component} from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

export default class Finais extends Component {

    render(){
        return(
            <View style={styles.container}>
                <BarraNavegacao />
                <View style={{height: 50,backgroundColor:'red', alignItems: 'flex-start'}}><Text style={{fontSize: 25, color:'#fff'}}>SEU PEDIDO FOI REALIZADO COM SUCESSO!</Text></View>
                <View style={{height: 50, width:'98%',justifyContent: 'flex-end', marginBottom: 10, marginTop: 250}}>
                    <Button  title="FINALIZAR" onPress={() => {this.props.navigator.push({id: 'painel'});}} color="#B8860B" />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        alignItems: 'center'
    },
    cardItens: {
        flex: 1,
        width: 370,
        height: '100%',
        backgroundColor: 'red',
        alignItems: 'flex-start',
        justifyContent:'center',
        marginBottom: 5,
        borderBottomWidth: 2
    }
});