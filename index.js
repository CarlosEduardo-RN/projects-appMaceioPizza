import { Navigator }        from 'react-native-deprecated-custom-components';
import { AppRegistry }      from 'react-native';
import React, { Component } from 'react';
import {name as appName}    from './app.json';
import firebase from 'firebase';
// =====================================================
// imports das cenas utilizadas na navegação dos componentes
import Adicional 	from './src/components/Adicional';
import Painel       from './src/components/Painel';
import AlgoMais 	from './src/components/AlgoMais';
import Finais 		from './src/components/Finais';
import PedidoFinalizado from './src/components/PedidoFinalizado';
// =====================================================
// imports das cenas utilizadas na navegação dos assets
import FormLogin      from './src/assets/FormLogin';
import FormCadastro   from './src/assets/FormCadastro';
// ========================================================


export default class App extends Component {

	componentWillMount(){
        var firebaseConfig = {
			apiKey: "AIzaSyD0PIuuQ7eRvjcRabgwpqySi2wgg5vdv1k",
			authDomain: "maceio-pizza.firebaseapp.com",
			databaseURL: "https://maceio-pizza.firebaseio.com",
			projectId: "maceio-pizza",
			storageBucket: "maceio-pizza.appspot.com",
			messagingSenderId: "448906181018",
			appId: "1:448906181018:web:b6f6d63a0de1d7ddae6223",
			measurementId: "G-GCFWBRWD6L"
		};
          // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

	render() {
		if(firebase.auth()){
			return (
				<Navigator
					initialRoute={{ id: 'painel' }}
					renderScene={(route, navigator) => {
						switch (route.id) {
							case 'painel':
								return (<Painel navigator={navigator} />);
							case 'login':
								return (<FormLogin navigator={navigator} />);
							case 'cadastro':
								return (<FormCadastro navigator={navigator} />);
							case 'adicional':
								return( <Adicional navigator={navigator} />);
							case 'algomais':
								return(<AlgoMais navigator={navigator}/>);
							case 'finais':
								return(<Finais navigator={navigator} />);
							case 'concluido':
								return(<PedidoFinalizado navigator={navigator} />);
							default: return false;
						}
					}} 
				/>
			);
		}
		return (
			<Navigator
				initialRoute={{ id: 'login' }}
				renderScene={(route, navigator) => {
					switch (route.id) {
						case 'painel':
							return (<Painel navigator={navigator} />);
                        case 'login':
                            return (<FormLogin navigator={navigator} />);
                        case 'cadastro':
							return (<FormCadastro navigator={navigator} />);
						case 'adicional':
							return( <Adicional navigator={navigator} />);
						case 'algomais':
							return(<AlgoMais navigator={navigator}/>);
						case 'finais':
							return(<Finais navigator={navigator} />);
						case 'concluido':
							return(<PedidoFinalizado navigator={navigator} />);
						default: return false;
					}
				}} 
			/>
		);
	}
}

AppRegistry.registerComponent(appName, () => App);
