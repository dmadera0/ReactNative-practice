import React, {Component} from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

class NameList extends Component {

    state = {
        characters: []
    }
    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(console.log(character)
        //  => this.setState({character}))

    }
    
    
    

    
    displayCharacters = ( ) => {
        return this.state.characters.map(character => {
            console.log()
            return <View style={styles.constainer}>
                <FlatList key={character.char_id} character={character}/>
                </View>
        })
    }
    render() {
        return (
            <View>
                {displayCharacters()}
            </View>
        )
    }

    styles =StyleSheet.create({
        constainer:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}

