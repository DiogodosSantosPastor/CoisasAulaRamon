import {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Image, Button } from 'react-native'
import {CameraView, useCameraPermissions} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camera(){
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [ladoCamera, setLadoCamera] = useState('back')
    const [scanned, setScanned] = useState(false);

    if(!permissao){
        return <View></View>
    }

    if (!permissao.granted){
        return(
            <View style={styles.container}>
                <Text style={styles.textopermissao}>Você precisa da permissao para utilizar a camera</Text>
                <Button
                title='pedir permissão'
                onPress={pedirPermissao}
                />
            </View>
        )
    }
    const inverterLadoCamera = () => {
        setLadoCamera(ladoCamera == 'back' ? 'front' : 'back')
    }

    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            qualiy: 0.5,
            base64: true
        })
        setFoto(foto)
        console.log(foto)
    }
    const salvarFoto = async () => {
        MediaLibrary.saveToLibraryAsync(foto.uri)
        if(!permissaoSalvar.status == 'granted'){
            await pedirPermissaoSalvar
        }
    }
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === "granted");
        };
    
        getBarCodeScannerPermissions();
      }, []);
    
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    
    return(
        <View style={styles.container}>
            {foto ?
                <View>
                    <Button title='descartar imagem' onPress={()=> setFoto(null)}></Button>
                    <Button title='salvar foto' onPress={salvarFoto}/>
                    <Image style={styles.image} source={{uri: foto.uri}} />
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    {scanned && (
                        <Button title={"escanear denovo"} onPress={() => setScanned(false)} />
                    )}
                </View>
                :
                <CameraView style={styles.camera} facing={ladoCamera} ref={cameraRef}/>
                
            }
    
        <CameraView 
         style={styles.camera}
         facing={ladoCamera}
         ref={cameraRef}
         barcodeScannerSettings={{
            barcodeTypes: ["qr"],
         }}
         onBarcodeScanned={(data) => console.log(data.raw)}
         >
            <View style={styles.buttonContainer}>
                <Button title= 'tirar-foto' onPress={tirarFoto}/>
                
                <Button title= 'inverter-lado' onPress={inverterLadoCamera}/>
            </View>
        </CameraView>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },

    textopermissao:{
        textAlign:'center'
    },
    camera:{
        flex:1,
    },
    buttonContainer:{
        flex:1
    },
    image:{
        width:'100%',
        height:'100%'
    }
})