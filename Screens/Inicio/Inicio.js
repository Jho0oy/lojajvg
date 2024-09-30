import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Modal, FlatList, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function Inicio() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisiblecar, setModalVisiblecar] = useState(false);
  const [modalVisiblesobre, setModalVisiblesobre] = useState(false);


  return ( /* modal Inicial */
    <View style={styles.container}>
      <ImageBackground source={require('./Inicio/fundo.png')} style={styles.imageBackground}>
        <View style={styles.black}>
          <Text style={styles.text}>MVF SPORT</Text>
          <TouchableOpacity style={styles.imageButton} onPress={() => setModalVisible(true)}>
            <Image source={require('./Inicio/menu.png')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageButtonc} onPress={() => setModalVisiblecar(true)}>
            <Image source={require('./Inicio/car.png')} style={styles.buttonImagec} />
          </TouchableOpacity>      
          

          
          <View /* Nav Bar das camisas */ style={styles.buttonContainer}>  
            <TouchableOpacity style={styles.button}> 
              <Text style={styles.buttonText}>BRASILEIRÃO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>EUROPA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>COPA DO MUNDO</Text>
            </TouchableOpacity>
          </View>

          


          <Modal /* modal carrinho */
            animationType="slide"
            transparent={true}
            visible={modalVisiblecar}
            onRequestClose={() => {
              setModalVisiblecar(!modalVisiblecar);
            }}>
            <ImageBackground source={require('./Inicio/fundo.png')} style={styles.imageBackground}>
            <View style={styles.centeredView}>
            <View style={styles.black2}>
              <Text style={styles.textcar}>CARRINHO</Text>
              </View>
              <View style={styles.modalView2}>
              <View style={styles.camisascar}>
              </View>

                <TouchableOpacity
                  style={{ ...styles.openButton,margin: 20,height:40,width:250,alignItems:'center',justifyContent:'center',right:30,borderRadius:5,top:-320,left:-220, }}
                  onPress={() => setModalVisiblecar(!modalVisiblecar)}>
                  <Image source={require('./Inicio/voltar.png')} style={styles.buttonImage} />
                </TouchableOpacity>
           
              </View>
            </View>
            </ImageBackground>
          </Modal>


          <Modal /* modal menu */
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>MVF SPORT</Text>

                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: '#fff',margin: 20,height:40,width:250,alignItems:'center',justifyContent:'center',borderRadius:5}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyleHome}>HOME</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => setModalVisiblesobre(true)}
                  style={{...styles.openButton, backgroundColor: '#fff',margin: 20,height:40,width:250,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                  <Text style={styles.textStyle}>SOBRE NÓS</Text>
                </TouchableOpacity>
                
                
                <Modal /* modal sobre nós */
                animationType="slide"
                transparent={true}
                visible={modalVisiblesobre}
                onRequestClose={() => {setModalVisiblesobre(!modalVisiblesobre);}}>
                <ImageBackground source={require('./Inicio/fundo.png')} style={styles.imageBackground}>
                <Text style={styles.textsobrenos}>Aqui vai ficar o texto sobre nós</Text>
                <View style={styles.centeredVieww}>
                <View style={styles.black3}> 
                <Text style={styles.textosobree}>SOBRE NÓS</Text>
                </View>
                  <View style={styles.telinhameio}>
                  </View>
                  <View style={styles.modalView3}>
                    <TouchableOpacity
                      style={{ ...styles.openButton,margin: 20,height:40,width:250,alignItems:'center',justifyContent:'center',right:30,borderRadius:5,top:-140,left:-205}}
                      onPress={() => setModalVisiblesobre(!modalVisiblesobre)}>
                      <Image source={require('./Inicio/voltar.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                  </View>
                </View>
                </ImageBackground>
              </Modal>
               
              </View>
            </View>
          </Modal>
         
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  containerr: {
    flex:1
  },
  imgcamisa: {
    width:100,
    top:350,
    textAlign:"center",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    bottom: -170,
    right: -120,
  },
  textcar: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    bottom: -170,
   
  },
  black: {
    backgroundColor: '#000',
    width: 480,
    height: 300,
    top: -370,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    top: 130,
   
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: -1,
    borderRadius: 5,
  },
  camisascar:{
    backgroundColor:"#fff",
    height:130,
    width:400,
    top:200,
    right:-50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageButton: {
    top: -100,
    left: -130,
    height: 10,
    width: 30,
    right: 40,
  },
  buttonImage: {
    top: 160,
    height: 70,
    width: 70,
    right: -170,
  },
  btmais:{
    height:60,
    width:60,
    left:80,
    top:100,
  },
  bttmais:{
    height:250,
    width:250,
    left:40,
    top:80,
   
  },
  imageButtonc: {
    top: -100,
    height: 40,
    width: 40,
    right: -260,
    backgroundColor:"#fff"
  },
  buttonImagec: {
    top: 160,
    height: 50,
    width: 50,    
    right: -140,
    left:120,
  },
  nav: {
    backgroundColor: '#fff',
    width: 300,
    height: 400,
    left: 90,
    top: 250,
    borderRadius: 20,
  },
  btcamisas: {
    width: 50,
    height: 50,
  },
  carrinhonome:{
    color:"#fff",
    right:-190,
   fontSize: 30,
  },
  camisas: {
    width: 450,
    height: 400,
    left: -65,
    top: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#A39E9E",
    borderRadius: 20,
    padding: 35,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 300,
      height: 400
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalView2:{
    width:500,
    height:1000,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 180
  },

  /*modal sobre nós */
  centeredVieww: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  black3: {
    backgroundColor: '#000',
    width: 410,
    height: 150,
    top: 134,
    alignItems:'center',
    justifyContent:'center',

    position:'static'
  },
  modalView3:{
    width:50,
    height:1000,
    right:250,
  },
  textosobree: {
    color: '#fff',
    fontSize: 30,
  },
  textsobrenos: {
    color: '#000',
    fontSize: 20,
    top: 155
  }
  /*telinhameio:{
    backgroundColor:"#fff",
    height:130,
    width:400,
    top:200,
    right:-50,
  },*/
});



