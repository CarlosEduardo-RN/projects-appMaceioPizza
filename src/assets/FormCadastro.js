import React, {Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import firebase from 'firebase';


export default class FormLogin extends Component {

    constructor(props){
        super(props);
        this.state= {email: '', senha:'', nome:'', end:'',fone:''}
    }
    mudaNome(_nome){
        this.setState({nome: this.state.nome = _nome});
    }
    mudaEmail(_email){
        this.setState({email: this.state.email = _email});
    }
    mudaSenha(_senha){
        this.setState({senha: this.state.senha = _senha});
    }
    mudaEnd(_end){
        this.setState({end: this.state.end = _end});
    }
    mudaFone(_fone){
        this.setState({fone: this.state.fone = _fone});
    }
    adicionaFirebase(){

        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.senha)
        .then(()=>{this.props.navigator.push({id: 'login'})})
        .catch((erro) => console.log(erro));
    }
    render(){
        return(
            
        <View style={styles.container}>
            <BarraNavegacao voltar  navigator={this.props.navigator} />
            <View style={styles.cont}> 
                <View style={styles.entrada}><TextInput placeholder='NOME' onChangeText={(_nome) => this.mudaNome(_nome)}></TextInput></View>
                <View style={styles.entrada}><TextInput placeholder='E-MAIL' onChangeText={(_email) => this.mudaEmail(_email)}></TextInput></View>
                <View style={styles.entrada}><TextInput placeholder='SENHA' onChangeText={(_senha) => this.mudaSenha(_senha)}></TextInput></View>
                <View style={styles.entrada}><TextInput placeholder='CONFIRME SUA SENHA'></TextInput></View>
                <View style={styles.entrada}><TextInput placeholder='ENDEREÇO' onChangeText={(_end) => this.mudaEnd(_end)}></TextInput></View>
                <View style={styles.entrada}><TextInput placeholder='TELEFONE' onChangeText={(_fone) => this.mudaFone(_fone)}></TextInput></View>
            </View> 
            <View style={styles.btn_next}>
                <TouchableOpacity onPress={() => {this.adicionaFirebase()}}><View><Text  style={styles.btn_netx_txt}>CADASTRAR</Text></View></TouchableOpacity>
              </View> 
        </View>  
        );
      
    }
}

const styles = StyleSheet.create({
    cont:{
        marginTop:15
    },
    container:{
        flex:1,
        backgroundColor:'red'
    },
    entrada:{
        backgroundColor:'#FFDEAD',
        borderRadius: 7,
        width:'98%',
        margin: 5
    },
    txt:{
        color:'#fff',
        margin: 10
    },
    btn_txt:{
        justifyContent: 'space-between',
        flexDirection:'row'
    },
    btn_next:{
        alignItems:'center',
        backgroundColor:'red',
        marginTop: 12
    },
    btn_netx_txt:{
        color:'#FFDEAD',
        fontSize: 18
    }
});