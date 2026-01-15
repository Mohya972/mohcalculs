import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Screen = ({ expression, result }) => {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.expressionText}>{expression || " "}</Text>
            <Text style={styles.resultText}>{result}</Text>
        </View>
    );
};

const Index = () => {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("0");
    const [lastResult, setLastResult] = useState("");

    const handlePress = (value) => {
        if (value === '=') {
            if (!expression) return;
            try {
                // Remplace la virgule par le point pour le calcul
                const fixedExpression = expression.replace(/,/g, '.');
                const finalResult = eval(fixedExpression);
                const stringResult = finalResult.toString().replace('.', ',');
                setResult(stringResult);
                setLastResult(stringResult);
            } catch (error) {
                setResult("Erreur");
            }
        } else if (value === 'REINITIALISER') {
            setExpression("");
            setResult("0");
        } else if (value === 'DEL') {
            setExpression((prev) => prev.slice(0, -1));
        } else if (value === 'REP') {
            if (lastResult !== "" && lastResult !== "Erreur") {
                setExpression((prev) => prev + lastResult);
            }
        } else {
            const lastChar = expression.slice(-1);
            // Empêcher d'attaquer par un signe interdit
            if (expression === "" && ["+", ",", ")"].includes(value)) return;
            // Empêcher les doublons d'opérateurs
            if (["+", ","].includes(lastChar) && ["+", ","].includes(value)) return;

            setExpression((prev) => prev + value);
        }
    };

    // Fonction utilitaire pour générer les boutons d'une ligne
    const renderRow = (keys) => (
        <View style={styles.row}>
            {keys.map((key) => {
                let buttonStyle = styles.button;
                let textStyle = styles.buttonText;

                // Styles spécifiques selon la touche
                if (key === "DEL") buttonStyle = [styles.button, { backgroundColor: '#4d4d4d' }];
                if (key === "+") buttonStyle = [styles.button, { backgroundColor: '#e975ca' }];
                if (key === "REP") textStyle = [styles.buttonText, { fontSize: 16, color: '#00d4ff' }];
                if (["(", ")"].includes(key)) textStyle = [styles.buttonText, { color: '#f39c12' }];

                return (
                    <TouchableOpacity key={key} style={buttonStyle} onPress={() => handlePress(key)}>
                        <Text style={textStyle}>{key}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Moh Calculs Add</Text>

            <Screen expression={expression} result={result} />

            <View style={styles.buttonsGroup}>
                {/* Ligne 1 */}
                {renderRow(["DEL", "7", "8", "9"])}

                {/* Ligne 2 */}
                {renderRow(["(", "4", "5", "6"])}

                {/* Ligne 3 */}
                {renderRow([")", "1", "2", "3"])}

                {/* Ligne 4 */}
                {renderRow(["REP", "0", ",", "+"])}

                {/* Ligne 5 - Touche Egale Large */}
                <View style={styles.row}>
                    <TouchableOpacity 
                        style={[styles.button, styles.fullWidthButton, { backgroundColor: '#069813' }]} 
                        onPress={() => handlePress("=")}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>

                {/* Ligne 6 - Touche Réinitialiser Large */}
                <View style={styles.row}>
                    <TouchableOpacity 
                        style={[styles.button, styles.fullWidthButton, { backgroundColor: '#780c09ff' }]} 
                        onPress={() => handlePress("REINITIALISER")}>
                        <Text style={[styles.buttonText, { fontSize: 18 }]}>REINITIALISER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#121412ff',
        padding: 15,
        margin: 4,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 75,
        minHeight: 70,
        flex: 1, // Permet aux boutons de s'étendre équitablement
    },
    fullWidthButton: {
        marginTop: 5,
    },
    buttonsGroup: {
        alignItems: 'center',
        marginTop: 20,
        width: '95%',
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
    },
    expressionText: {
        color: '#b3b3b3',
        fontSize: 26,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    resultText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    screenContainer: {
        width: '90%',
        height: 130,
        backgroundColor: '#252525',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 15,
        marginTop: 10,
        elevation: 5,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 40,
        marginBottom: 10,
    },
});