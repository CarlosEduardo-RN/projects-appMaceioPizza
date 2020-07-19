import React,{ Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import _ from 'lodash';
import ListView from 'deprecated-react-native-listview';
import firebase from 'firebase';


export default class Adicional extends Component {

    constructor(){
        super()
        this.state = { mostraAdicional: ''}
    }

    UNSAFE_componentWillMount(){
        this.mostraAdicional();
    }
    componentDidMount(){
        this.mostraAdicional();
    }
    componentDidUpdate(){
        this.mostraAdicional();
    }
    mostraAdicional(){
        firebase.database().ref('adicional')
            .once("value", snapshot => { this.setState({
                mostraAdicional: this.state.mostraAdicional = snapshot.val()})})
            
            const arrayAdicional = _.map(this.state.mostraAdicional, (val, uid) => { return{ ...val, uid}});
            this.criaFonteDeDados(arrayAdicional);
    }

    criaFonteDeDados(arrayAdicional) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.fonteDeDados = ds.cloneWithRows(arrayAdicional);
    }

    render(){
        return(
            <View style={styles.container}>
                <BarraNavegacao voltar  navigator={this.props.navigator} />
                <ListView enableEmptySections dataSource={this.fonteDeDados} renderRow={data => 
                    <View style={styles.cardItens}>
                        <Text style={styles.txtCardItem}>{data.Sabor}</Text>
                        <Text style={styles.precoCardItem}>R${data.Preço}</Text>
                    </View>}/>
                <View style={{height: 20, width:'98%',justifyContent: 'flex-end', marginBottom: 10}}>
                    <Button  title="FINALIZAR PEDIDO" onPress={() => {this.props.navigator.push({id: 'algomais'});}} color="#B8860B" />
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
    }


});