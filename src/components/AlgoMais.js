import React,{ Component} from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import BarraNavegacao from './BarraNavegacao';


const Comida = require('../img/comida.png');
const Bebida = require('../img/bebidas.png');
const Sobremesa = require('../img/sobremesa.png');
const Hamburguer = require('../img/trio.png');

export default class AlgoMais extends Component {

    render(){
        return(
            <View style={styles.container}>
                <BarraNavegacao voltar  navigator={this.props.navigator} />
                <View style={{height: 50,backgroundColor:'red', alignItems: 'flex-start'}}><Text style={{fontSize: 25, color:'#fff'}}>Algo Mais?</Text></View>
               
                <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => false}><Image style={styles.img} source={Bebida} /><View><Text style={styles.txt}>BEBIDAS</Text></View></TouchableOpacity></View>
                <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => false}><Image style={styles.img} source={Sobremesa} /><View><Text style={styles.txt}>SOBREMESAS</Text></View></TouchableOpacity></View>
                <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => false}><Image style={styles.img} source={Hamburguer} /><View><Text style={styles.txt}>TRIOS</Text></View></TouchableOpacity></View>
                <View style={{height: 50, width:'98%',justifyContent: 'flex-end', marginBottom: 10, marginTop: 250}}>
                    <Button  title="FINALIZAR PEDIDO" onPress={() => {this.props.navigator.push({id: 'finais'});}} color="#B8860B" />
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
    },
    txtCardItem:{
        fontSize: 20,
        color: '#FFDEAD'
    },
    ingredienteCardItem: {
        fontSize: 15,
        color: '#FFDEAD'
    },
    precoCardItem: {
        fontSize: 18,
        color: '#FFDEAD'
    },
    container:{
        flex:1,
        backgroundColor:'red',
        alignItems: 'center'
    },
    cont:{
        flex:1,
        backgroundColor:'red',
        margin: 15
    },
    card:{
        flexDirection:'row',
        width:'98%',
        height: 70,
        margin:3,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
    },
    img:{
        margin: 10
    },
    txt:{
        fontSize: 25
    },
    viu_txt:{
        alignItems:'center',
        justifyContent:'center'
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
    },
    txtCardItem:{
        fontSize: 20,
        color: '#FFDEAD'
    },
    ingredienteCardItem: {
        fontSize: 15,
        color: '#FFDEAD'
    },
    precoCardItem: {
        fontSize: 18,
        color: '#FFDEAD'
    }
});