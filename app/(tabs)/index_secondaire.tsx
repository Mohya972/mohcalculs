import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Composant ECRAN de CALCULATRICE à 2 lignes (expression et résultat)
const Screen = ({ expression, result }) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.expressionText}>
        {expression || " "}
      </Text>
      <Text style={styles.resultText}>
        {result}
      </Text>
    </View>
  )
} // Fin du Composant ECRAN

const index = () => {

  // Déclaration de variables d'état
  const [expression, setExpression] = useState(""); // L'expression tapée
  const [result, setResult] = useState("0"); // Le résultat calculé

  // Gestion des touches
  const handlePress = (value) => {
    if (value === '=') {
      try {
        // On remplace les symboles visuels par des opérateurs JS valides
        const fixedExpression = expression
          .replace(/x/g, '*')
          .replace(/÷/g, '/')
          .replace(/,/g, '.');

        // Calcul du résultat
        const finalResult = eval(fixedExpression);
        setResult(finalResult.toString());
      } catch (error) {
        setResult("Erreur");
      }
    } else if (value === 'C') {
      // Réinitialisation
      setExpression("");
      setResult("0");
    } else if (value === 'DEL') {
      // Efface le dernier caractère
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === '+/-') {
      if (expression) {
        setExpression((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
      }
    } else {
      // Ajoute la valeur à l'expression
      setExpression((prev) => prev + value);
    }
  }; // Fin de Gestion des touches

  return (
    <View style={styles.content}>

      {/* Marque Déposée de l'Appli ;) */}
      <View>
        <Text style={styles.title}>Moh Calculs Plus</Text>
      </View>

      {/* Zone de l'écran */}
      <Screen
        expression={expression}
        result={result} />

      {/* Pavé Numérique */}
      <View style={styles.buttonsGroup}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#4d4d4d' }]} onPress={() => handlePress("DEL")}>
            <Text style={styles.buttonText}>DEL</Text>
          </TouchableOpacity>
          {["(", ")", "÷"].map((char) => (
            <TouchableOpacity key={char} style={styles.button} onPress={() => handlePress(char)}>
              <Text style={styles.buttonText}>{char}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          {["7", "8", "9", "x"].map((char) => (
            <TouchableOpacity key={char} style={styles.button} onPress={() => handlePress(char)}>
              <Text style={styles.buttonText}>{char}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          {["4", "5", "6", "-"].map((char) => (
            <TouchableOpacity key={char} style={styles.button} onPress={() => handlePress(char)}>
              <Text style={styles.buttonText}>{char}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          {["1", "2", "3", "+"].map((char) => (
            <TouchableOpacity key={char} style={styles.button} onPress={() => handlePress(char)}>
              <Text style={styles.buttonText}>{char}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("+/-")}>
            <Text style={styles.buttonText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("0")}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(".")}>
            <Text style={styles.buttonText}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#069813' }]} onPress={() => handlePress("=")}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.resetButton} onPress={() => handlePress("C")}>
          <Text style={styles.buttonText}>REINITIALISER</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#121412ff',
    padding: 15,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
    minHeight: 70,
  },

  buttonsGroup: {
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },

  content: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  expressionText: {
    color: '#b3b3b3',
    fontSize: 28,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  resetButton: {
    backgroundColor: '#780c09ff',
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 10,
  },
  resultText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  screenContainer: {
    width: '75%',
    height: 140,
    backgroundColor: '#252525',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    marginTop: 30,
  },
})