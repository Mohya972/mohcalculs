import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const index = () => {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>Moh Calculs +</Text>
      </View>

      <View>
        
      </View>

      <View style={styles.buttonsGroup}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>(</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                        <Text style={styles.buttonText}>÷</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                        <Text style={styles.buttonText}>x</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>+/-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>,</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.resetButton} onPress={() => setCount(0)}>
                    <Text style={styles.buttonText}>REINITIALISER</Text>
                </TouchableOpacity>
            </View>
      
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  button : {
    backgroundColor: '#121412ff',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 80,
  },

  buttonsGroup: {
  // Ce conteneur englobe tous les boutons
    alignItems: 'center',
  },

  buttonText : {
    color: 'white',
    fontSize: 18
  },

  content : {
    flex : 1,
    backgroundColor : 'orange',
    alignItems : 'center',
  },
  title : {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  resetButton: {
    backgroundColor: '#780c09ff',
    marginTop: 10, 
    padding: 15, 
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'stretch', 
    marginHorizontal: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})