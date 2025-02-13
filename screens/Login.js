// screens/Login.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Estado para el nombre en el registro

  const handleLogin = () => {
    // Aquí iría la lógica para el login (aún no conectada a la API)
    console.log("Login:", email, password);
    // Por ahora, navega a Home
    navigation.navigate("Home");
  };

  const handleRegister = () => {
    // Aquí iría la lógica para el registro (aún no conectada a la API)
    console.log("Registro:", name, email, password);
    // Por ahora, navega a Home
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icons/logo.png")} // Ruta al logo
        style={styles.logo}
        resizeMode="contain" // Ajusta el tamaño del logo
      />
      <Text style={styles.title}>{isLogin ? "Login" : "Register"}</Text>

      {!isLogin && ( // Campo de nombre solo en registro
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Pass"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title={isLogin ? "Login" : "Register"}
        onPress={isLogin ? handleLogin : handleRegister}
        color="#6b4f3b" // Background color
        titleStyle={{ fontWeight: "bold", borderRadius: "40" }} // Text style
      />
      <TouchableOpacity
        onPress={() => setIsLogin(!isLogin)}
        style={styles.switchButton}
      >
        <Text>
          {isLogin
            ? "Dont have an account? Sign up"
            : "Already have an account? Sign in"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  switchButton: {
    marginTop: 10,
  }
});

export default Login;
