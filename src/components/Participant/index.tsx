import { View, Text,TouchableOpacity} from 'react-native'
import { styles } from './styles'

interface Props{
    name:string,
    remove:()=>void
}

export function Participant({name,remove}:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <TouchableOpacity style={styles.button} onPress={remove} >
                    <Text style={{fontSize:24, fontWeight:"800"}}>
                        -
                    </Text>
                </TouchableOpacity>
        </View>
    )
}