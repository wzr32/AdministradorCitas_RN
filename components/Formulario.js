import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Button, 
    TouchableHighlight, 
    Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const Formulario = ({data, setData}) => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [cita, setCita] = useState({
        paciente: '',
        dueno: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const confirmDate = (date) => {
        let options = {year: 'numeric', month: 'short', day: '2-digit'}
        let fixedDate = date.toLocaleDateString('es-ES', options)
        setCita({...cita, fecha: fixedDate})
        hideDateModal()
    };

    const confirmTime = (time) => {
        const options = {hour: 'numeric', minute: '2-digits'}
        let fixedTime = time.toLocaleString('en-US', options)
        setCita({...cita, hora: fixedTime})
        hideTimeModal()
    };

    const showAlert = () => {
        Alert.alert(
            'Error', //titulo
            'Todos los campos son Obligatorios', //mensaje
            [{ //arreglo de botonos
                text: 'OK'
            }]
        )
    }

    const showDateModal = () => {
        setShowDatePicker(true);
    };

    const showTimeModal = () => {
        setShowTimePicker(true);
    };

    const hideDateModal = () => {
        setShowDatePicker(false);
    };

    const hideTimeModal = () => {
        setShowTimePicker(false);
    };

    const crearNuevaCita = () => {
        const {paciente, dueno, telefono, fecha, hora, sintomas} = cita;
        
        if (paciente.trim() === '' ||
            dueno.trim() === '' ||
            telefono.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === '') {
            showAlert()
            return;
        }

        cita.id = shortid.generate();

        const nuevaCita = [...data, cita ]
        setData(nuevaCita)

        console.log(nuevaCita)
        setCita({
            paciente: '',
            dueno: '',
            telefono: '',
            fecha: '',
            hora: '',
            sintomas: '',
        });
    };

    
    return (
        <View style={styles.formulario}>
            <Text style={styles.label}>Paciente:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(texto) => setCita({...cita, paciente: texto})}
                value={cita.paciente}
            />

            <Text style={styles.label}>Dueno:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(texto) => setCita({...cita, dueno: texto})}
                value={cita.dueno}
            />

            <Text style={styles.label}>Telefono:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(texto) => setCita({...cita, telefono: texto})}
                keyboardType='phone-pad'
                value={cita.telefono}
            />


            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button
                    title="Selecione una Fecha" 
                    onPress={() => showDateModal()}
                />
                <DateTimePickerModal
                    isVisible={showDatePicker}
                    mode="date"
                    onConfirm={confirmDate}
                    onCancel={hideDateModal}
                    locale='es-ES'
                    headerTextIOS='Elige la Fecha'
                    cancelTextIOS='Cancelar'
                    confirmTextIOS='Aceptar'
            />
            </View>

            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button
                    title="Selecione una Hora" 
                    onPress={() => showTimeModal()}
                />
                <DateTimePickerModal
                    isVisible={showTimePicker}
                    mode="time"
                    onConfirm={confirmTime}
                    onCancel={hideTimeModal}
                    locale='es-ES'
                    headerTextIOS='Elige la Hora'
                    cancelTextIOS='Cancelar'
                    confirmTextIOS='Aceptar'
                />
            </View>

            <Text style={styles.label}>Sintomas:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(texto) => setCita({...cita, sintomas: texto})}
                multiline
                value={cita.sintomas}
            />

            <TouchableHighlight
                style={styles.btn}
                onPress={() => crearNuevaCita()}
            >
                <Text style={styles.btnText}>Submit</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#ffffff',
        padding: 10,
    },  
    label: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 15
    },
    input: {
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    btn: {
        backgroundColor: '#c6c6c6',
        paddingVertical: 5,
        marginHorizontal: 5,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff'
    }
})

export default Formulario

