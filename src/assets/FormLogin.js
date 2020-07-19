import React, {Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import firebase from 'firebase';

import Painel from '../components/Painel';

const Logo = require('../img/logo.png');

export default class FormLogin extends Component {

    constructor(props){
        super(props);

        this.state ={ email: '', senha:'', erro:''}
    }

    mudaEmail(mail){
        this.setState({email: this.state.email = mail});
    }
    mudaSenha(key){
        this.setState({senha: this.state.senha = key});
    }
    adicionaFirebase(){

        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.senha)
        .then(()=>{this.props.navigator.push({id: 'painel'})})
        .catch((err) => this.setState({erro: this.state.erro = err.message}));
    }

    render(){
        return( 
            <View style={styles.container}>
                <View><Image source={Logo} /></View>
                <View style={styles.entrada}><TextInput placeholder='E-MAIL' onChangeText={(mail)=>this.mudaEmail(mail)}></TextInput></View>
                <View style={styles.entrada}><TextInput placeholder='SENHA' onChangeText={(key)=>this.mudaSenha(key)} ></TextInput></View>
                <View style={styles.entrar}><TouchableOpacity onPress={() => {this.adicionaFirebase(this.mail,this.senha)}}><Text style={styles.txt}>ACESSAR</Text></TouchableOpacity></View>
                <View><Text>{this.state.erro}</Text></View>
                <View style={styles.btn_txt}><TouchableOpacity onPress={() => {this.props.navigator.push({id: 'cadastro'});}}><Text style={styles.txt}>Cadastre-se</Text></TouchableOpacity></View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    cont:{
        flex:1,
        backgroundColor:'#D3D3D3'
    },  
    container:{
        flex:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
    },
    entrada:{
        backgroundColor:'#FFDEAD',
        borderRadius: 7,
        width:'98%',
        margin: 5
    },
    txt:{
        color:'#B8860B',
        margin: 10
    },
    btn_txt:{
        justifyContent: 'space-between',
        flexDirection:'row'
    },
    entrar:{
        alignItems:'center',
        backgroundColor:'#FFDEAD',
        borderRadius: 9,
        width: "60%"
    }
});