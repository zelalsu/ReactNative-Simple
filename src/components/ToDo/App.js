import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Input from './Input/Input';
import TodoList from './TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const activeTodos = todos.filter(todo => !todo.isDone); 
//filter metodu ile tamamlanmamış ögeleri seçer. ve bir koşul döndürür.
//bir todo ögesinin isdone  özelliğininn false olduğunu ifade eder. 
//Eğer isDone true ise, !todo.isDone false döndürür ve filter metodu bu öğeyi atlar.
//Eğer isDone false ise, !todo.isDone true döndürür ve filter metodu bu öğeyi döndürür.
// Sonuç olarak, activeTodos değişkeni tamamlanmamış to-do öğelerini içeren bir dizi döndürür.
  const renderTodo = ({item}) => (
    <TodoList todos={item} isDone={isDone} deleteTodo={deleteTodo} />
  );

  const addTodo = () => {
    console.log('addTodo : ' + text);

    setTodos([...todos, {
      id: Date.now() + Math.random(),
      name: text,
      isDone: false
    }]);

    setText('');
  };

//   const isDone= id => {
//     const newTodoList = todos.map(todo => {
//       if (todo.id === id) {
//         todo.isDone = !todo.isDone;
//       }
//       return todo;
//     });
//     setTodos(newTodoList);
//   };

//her bit öge için todo.id ve ve verilen id karşılaştırılması yapılır.Eğer eşleşirse todo ögesi çoğaltılır ve isdone özelliği tersine çevrilir.
const isDone = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const deleteTodo = id => {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>{activeTodos.length}</Text>
      </View>      
      <View style={styles.innerContainer}>
        <FlatList data={todos} renderItem={renderTodo} />
      </View>
      <Input text={text} setText={setText} addTodo={addTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    padding: 20,
    justifyContent: 'space-between',
  },  
  innerContainer: {
    flex: 1,
    marginTop: 10,
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    color: '#ffa500',
  },
});

export default App;