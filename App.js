import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, Button} from 'react-native';
import ListadoCitas from './components/ListadoCitas';
import Formulario from './components/Formulario';

const App = () => {

    const [mostrarForm, setMostrarForm] = useState(true);
    const [data, setData] = useState([]);

    const borrarCita = id => {
        setData( (data) =>
            data.filter(d => d.id !== id)
        );
    };

    return(
        <View style={styles.main}>
            <Button 
                title={mostrarForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
                onPress={() => {setMostrarForm(!mostrarForm)}}
            />
            {mostrarForm 
                ?
                    <ScrollView>
                        <Formulario 
                            data={data}
                            setData={setData}
                        /> 
                    </ScrollView>
                :

                    null
            }
            
                <Text 
                    style={styles.header}
                >   
                    {data.length !== 0
                        ? 'Administrador de citas' 
                        : 'No hay citas'
                    }
                </Text>
            
            <FlatList 
                data={data}
                keyExtractor={(data) => data.id}
                renderItem={ ({item}) => (
                    <ListadoCitas 
                        cita={item}
                        borrarCita={borrarCita}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    main:{
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 10,
        backgroundColor: '#aa076b',
    }, 
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 15
    }
})

export default App;