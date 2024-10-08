import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Modal, FlatList, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native';






export default function Inicio() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisiblecar, setModalVisiblecar] = useState(false);
  const [modalVisiblesobre, setModalVisiblesobre] = useState(false);

    // Estado para a lista de camisas
    const [camisas, setCamisas] = useState([
      { id: '1', image: require('./Inicio/saopaulo.png') },
      { id: '2', image: require('./Inicio/flamengo.png') },
      { id: '3', image: require('./Inicio/cruzeiro.png') },
      { id: '4', image: require('./Inicio/palmeiras.png') },
    ]);
  

  const route = useRoute();
  const userEmail = route.params?.userEmail;


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



          <View /* Nav Bar das camisas */ style={styles.camisasContainer} > 
            <FlatList
              data={camisas}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContent} // Use um estilo definido para a lista
              renderItem={({ item }) => (
                <View style={styles.camisaCard}>
                  <View style={styles.camisaItem}>
                    <Image source={item.image} style={styles.camisaImage} />
                  </View>
                  <Text style={styles.camisaNome}>Nome do Produto</Text>
                  <Text style={styles.camisaPreco}>R$ 99,90</Text>
                  <View style={styles.buttonContainerCard}>
                    <TouchableOpacity style={styles.comprarButton}>
                      <Text style={styles.buttonTextCard}>Comprar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addCarrinhoButton}>
                      <Text style={styles.buttonTextCard}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
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
                {userEmail && <Text style={{...styles.userEmail, textAlign: "center", fontSize:20}}>{userEmail}</Text>}

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
    flexDirection: "column",
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  
  
  imgcamisa: {
    width: 100,
    height: 150,
    textAlign: "center",
  },
  
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
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
  
  camisascar: {
    backgroundColor: "#fff",
    height: 130,
    width: 400,
    top: 200,
    right: -50,
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
  
  btmais: {
    height: 60,
    width: 60,
    left: 80,
    top: 100,
  },
  
  bttmais: {
    height: 250,
    width: 250,
    left: 40,
    top: 80,
  },
  
  imageButtonc: {
    top: -100,
    height: 40,
    width: 40,
    right: -260,
    backgroundColor: "#fff",
  },
  
  buttonImagec: {
    top: 160,
    height: 50,
    width: 50,
    right: -140,
    left: 120,
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
  
  carrinhonome: {
    color: "#fff",
    right: -190,
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
      height: 400,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
  modalView2: {
    width: 500,
    height: 1000,
  },
  
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#000",
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 120,
  },
  
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
    alignItems: 'center',
    justifyContent: 'center',
    position: 'static',
  },
  
  modalView3: {
    width: 50,
    height: 1000,
    right: 250,
  },
  
  textosobree: {
    color: '#fff',
    fontSize: 30,
  },
  
  textsobrenos: {
    color: '#000',
    fontSize: 20,
    top: 155,
  },
  
  camisasContainer: {
    marginTop: 20,
    alignItems: 'center', // Centraliza os itens horizontalmente
  },
  
  flatListContent: {
    justifyContent: 'center', // Centraliza os itens dentro da lista
    alignItems: 'center',
  },
  
  camisaCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.6, // Ajuste o tamanho do card se necessário
    elevation: 3, // Sombras para destacar o card
  },
  
  camisaItem: {
    width: '100%',
    height: 150, // Ajuste a altura da imagem da camisa
    marginBottom: 10,
  },
  
  camisaImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ajuste a imagem dentro do card
  },
  
  camisaNome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  
  camisaPreco: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  
  buttonContainerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  
  comprarButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 5,
  },
  
  addCarrinhoButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 2,
    borderRadius: 5,
  },
  
  buttonTextCard: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});



  /*telinhameio:{
    backgroundColor:"#fff",
    height:130,
    width:400,
    top:200,
    right:-50,
  },*/