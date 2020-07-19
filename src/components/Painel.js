import firebase from 'firebase';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import React, { Component } from 'react';
import _ from 'lodash';
import ListView from 'deprecated-react-native-listview'
import b64 from 'react-native-base64';

import BarraNavegacao from './BarraNavegacao';


const Comida = require('../img/comida.png');
const Bebida = require('../img/bebidas.png');
const Sobremesa = require('../img/sobremesa.png');
const Hamburguer = require('../img/trio.png');

export default class Painel extends Component{
    constructor(props){
        super(props);
        this.state = { pizza: 0, bebidas: 0, trios: 0, sobremesa: 0, mostraPizzas: '' }
        }
    

    mostraPizza(){
        firebase.database().ref('pizza')
            .on("value", snapshot => { this.setState({
                mostraPizzas: this.state.mostraPizzas = snapshot.val()
            })});

        const arrayPizzas = _.map(this.state.mostraPizzas, (val, uid) => { return{ ...val, uid}});
        this.criaFonteDeDados(arrayPizzas);
    }

    mostraLista_pizza(){
        this.setState({
            pizza: this.state.pizza = 1,
            bebidas: this.state.bebidas = 0,
            trios: this.state.trios = 0,
            sobremesa: this.state.sobremesa = 0,
        });
        this.mostraPizza();
    } 

    criaFonteDeDados(arrayPizzas) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.fonteDeDados = ds.cloneWithRows(arrayPizzas);
    }

    salvaPedido(){
        /*const emailb64 = b64.encode(mail);
        console.log(emailb64);*/
        console.log(this.props.email);
    }

    render(){
        if(this.state.pizza == 1){  
            return(
                <View style={styles.container}>
                    <BarraNavegacao />
                    <ScrollView style={styles.cont}>
                        <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => this.mostraLista_pizza()}><Image style={styles.img} source={Comida} /><View><Text style={styles.txt}>PIZZAS</Text></View></TouchableOpacity></View>
                        <ListView enableEmptySections dataSource={this.fonteDeDados} renderRow={data => 
                            <TouchableHighlight onPress={() => {this.salvaPedido()}}underlayColor='transparent'>
                                <View style={styles.cardItens}>
                                    <Text style={styles.txtCardItem}>{data.Sabor}</Text>
                                    <Text style={styles.ingredienteCardItem}>{data.Ingrediente}</Text>
                                    <Text style={styles.precoCardItem}>R${data.Preço}</Text>
                                </View>
                            </TouchableHighlight>}/>
                        <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => false}><Image style={styles.img} source={Bebida} /><View><Text style={styles.txt}>BEBIDAS</Text></View></TouchableOpacity></View>
                        <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => false}><Image style={styles.img} source={Sobremesa} /><View><Text style={styles.txt}>SOBREMESAS</Text></View></TouchableOpacity></View>
                        <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => false}><Image style={styles.img} source={Hamburguer} /><View><Text style={styles.txt}>TRIOS</Text></View></TouchableOpacity></View>
                    </ScrollView>
                </View>
                );
        }
        return(
        <View style={styles.container}>
            <BarraNavegacao />
            <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => this.mostraLista_pizza()}><Image style={styles.img} source={Comida} /><View><Text style={styles.txt}>PIZZAS</Text></View></TouchableOpacity></View>
            <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => false}><Image style={styles.img} source={Bebida} /><View><Text style={styles.txt}>BEBIDAS</Text></View></TouchableOpacity></View>
            <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => false}><Image style={styles.img} source={Sobremesa} /><View><Text style={styles.txt}>SOBREMESAS</Text></View></TouchableOpacity></View>
            <View style={styles.card}><TouchableOpacity style={styles.card} onPress={() => false}><Image style={styles.img} source={Hamburguer} /><View><Text style={styles.txt}>TRIOS</Text></View></TouchableOpacity></View>
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