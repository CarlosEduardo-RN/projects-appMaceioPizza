import React, {Component} from 'react';
import { View,Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import firebase from 'firebase';

const btnVoltar = require('../img/btn_volta.png');

export default class BarraNavegacao extends Component {


    sair(){
        firebase.auth().signOut;
    }

    render(){
        if (this.props.voltar) {
            return (
                <View style={styles.img}> 
                    <TouchableHighlight underlayColor='red' activeOpacity={0.3} onPress={() => { this.props.navigator.pop();}}>
                        <Image source={btnVoltar} />
                    </TouchableHighlight>
                        <Text style={styles.txt} >Maceió Pizza</Text>
                </View>
            );
        }
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Maceió Pizza</Text>
                <TouchableHighlight
                    onPress={()=> this.sair()}>
                        <Text>Sair</Text>
                    </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    img:{
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center'
    },
    txt:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 100
    }
});

