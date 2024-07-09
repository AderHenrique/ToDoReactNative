import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";

interface TaskType {
  name: string;
  done: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleTaskAdd() {
    if (tasks.some(task => task.name === taskName)) {
      return Alert.alert('Tarefa já existe', 'Já existe uma tarefa dessa na lista');
    }
    setTasks(prevState => [...prevState, { name: taskName, done: false }]);
    setTaskName('');
  }

  function handleTaskRemove(taskName: string) {
    Alert.alert('Remover', `Deseja remover a tarefa ${taskName}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.name !== taskName)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleTaskDone(taskName: string) {
    setTasks(prevState =>
      prevState.map(task =>
        task.name === taskName ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} />
      <View style={styles.from}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#808080'}
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Image source={require('../../../assets/images/plus.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.infosBar}>
        <View style={styles.info}>
          <Text style={styles.infosTextNew}>Criadas</Text>
          <View style={styles.infosNumber}>
            <Text style={styles.infosNumberText}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.infosTextDone}>Concluídas</Text>
          <View style={styles.infosNumber}>
            <Text style={styles.infosNumberText}>{tasks.filter(task => task.done).length}</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={tasks}
        style={styles.flatList}
        keyExtractor={task => task.name}
        renderItem={({ item }) => (
          <Task
            key={item.name}
            taskName={item.name}
            done={item.done}
            onDone={() => handleTaskDone(item.name)}
            onRemove={() => handleTaskRemove(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Image source={require('../../../assets/images/clipboard.png')} />
            <Text style={styles.listEmptyText1}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.listEmptyText2}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </View>
  );
}
