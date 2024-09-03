import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorApp = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const handleCalculation = (operation) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }

    switch (operation) {
      case 'add':
        setResult(num1 + num2);
        break;
      case 'subtract':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        setResult(num2 !== 0 ? num1 / num2 : 'Cannot divide by zero');
        break;
      default:
        setResult('');
    }
  };

  const reset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculator App</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter First Number"
          textAlign="center"
          keyboardType="numeric"
          value={firstNumber}
          onChangeText={setFirstNumber}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Second Number</Text>
        <TextInput
          style={styles.input}

          placeholder="Enter Second Number"
          textAlign="center"
          keyboardType="numeric"
          value={secondNumber}
          onChangeText={setSecondNumber}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('add')}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('subtract')}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('multiply')}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('divide')}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultLabel}>Result</Text>
      <Text style={styles.result}>{result}</Text>
      <TouchableOpacity onPress={reset}>
        <Text style={styles.resetButton}>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    marginBottom: 100,
    marginTop: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    padding: 20,

  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 4,

  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 30,
    marginVertical: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  resetButton: {
   textAlign: 'center',
   color: '#007bff',
  },
  resultLabel: {
    fontSize: 16,
    marginTop: 20,
  },
  result: {
    fontSize: 24,
  },
});

export default CalculatorApp;