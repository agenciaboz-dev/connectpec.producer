import React from "react";
import { Button, Text } from "react-native-paper";
import { colors } from "../../style/colors";

interface LoginButtonProps {
  onPress: () => void;
  text: "Cadastre-se" | "Continuar" | "Voltar";
}

export const LoginButton: React.FC<LoginButtonProps> = ({ onPress, text }) => {
  return (
    <Button
      style={{
        backgroundColor:
          text === "Continuar" ? colors.inversePrimary : undefined,
      }}
      labelStyle={{}}
      onPress={onPress}
    >
      <Text
        variant={text === "Continuar" ? "labelLarge" : "titleLarge"}
        style={{
          color:
            text === "Continuar"
              ? colors.onSecondaryContainer
              : colors.secondaryContainer,
          fontWeight: text === "Continuar" ? 500 : 700,
        }}
      >
        {text}
      </Text>
    </Button>
  );
};
