import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

type Props = {
  taskName: string;
  done: boolean;
  onRemove: () => void;
  onDone: () => void;
}

export function Task({ taskName, done, onRemove, onDone }: Props) {
  return (
    done ? (
      <View style={styles.taskDone}>
        <TouchableOpacity onPress={onDone}>
          <Image source={require('../../../assets/images/done.png')} />
        </TouchableOpacity>
        <Text style={styles.taskDoneText}>
          {taskName}
        </Text>
        <TouchableOpacity onPress={onRemove}>
          <Image source={require('../../../assets/images/trash.png')} />
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.task}>
        <TouchableOpacity onPress={onDone}>
          <Image source={require('../../../assets/images/check.png')} />
        </TouchableOpacity>
        <Text style={styles.taskText}>
          {taskName}
        </Text>
        <TouchableOpacity onPress={onRemove}>
          <Image source={require('../../../assets/images/trash.png')} />
        </TouchableOpacity>
      </View>
    )
  );
}
