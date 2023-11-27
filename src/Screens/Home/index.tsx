import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {

    const [participants, setParticipants] = useState<string[]>([])
    const [participantsName, setParticipantsName] = useState('')

    function handleAddUser() {
        if(participants.includes(participantsName)){
            return Alert.alert("Participante ja adicionado", "Para de ser burro, o cara já está participando")
        }
        setParticipants(participants => [...participants, participantsName])
        setParticipantsName('')
    }

    function handleRemoverUser(name:string) {

        return  Alert.alert("Deseja remover ?", `Deseja remover o ${name}?`,[{
            text:"sim",
            onPress:() =>  
                setParticipants(prevState => prevState.filter(participant => participant !== name))
        },
        {
            text:"Não",
            style:"cancel"
        }])

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nome do evento</Text>
            <Text style={styles.description}>
                Quinta, 16 de Novembro de 2023
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    onChangeText={setParticipantsName}
                    value={participantsName}
                    placeholderTextColor="#6B6B6B"
                />
                <TouchableOpacity style={styles.button} onPress={handleAddUser} >
                    <Text style={{ fontSize: 24, fontWeight: "800" }}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant key={item} name={item} remove={()=>handleRemoverUser(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.noEmpy} >
                        Não há ninguem cadastrado ainda.
                    </Text>
                )}
            />

        </View>
    )
}

