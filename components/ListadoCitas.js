import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const Citas = ({cita, borrarCita}) => {

    return (    
        <View style={styles.cita}>
            <View style={styles.info}>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.data}>{cita.paciente}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.label}>Dueno:</Text>
                <Text style={styles.data}>{cita.dueno}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.label}>Telefono:</Text>
                <Text style={styles.data}>{cita.telefono}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.label}>Fecha:</Text>
                <Text style={styles.data}>{cita.fecha}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.label}>Hora:</Text>
                <Text style={styles.data}>{cita.hora}</Text>
            </View>

            <Text style={styles.label}>Sintomas:</Text>
            <Text>{cita.sintomas}</Text>

            <TouchableHighlight 
                style={styles.btnDelete}
                onPress={() => borrarCita(cita.id)}
            >
                <Text style={styles.deleteText}>Eliminar &times;</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 5
    },  
    label: {
        fontWeight: 'bold',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    data:{
        marginLeft: 10
    },
    btnDelete: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#d9534f',
        marginVertical: 10
    },
    deleteText:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    }
})


export default Citas;