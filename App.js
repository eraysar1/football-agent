import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const players = [
  { id: '1', name: 'Ali Yalçın', age: 21, position: 'ST', potential: 84 },
  { id: '2', name: 'Carlos Ribeiro', age: 19, position: 'CAM', potential: 91 },
  { id: '3', name: 'Mehmet Demir', age: 28, position: 'CB', potential: 77 },
  { id: '4', name: 'Yuki Tanaka', age: 22, position: 'RW', potential: 86 },
  { id: '5', name: 'Leonardo Russo', age: 24, position: 'CM', potential: 88 },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oyuncu Listesi</Text>
      <FlatList
        data={players}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detay', { player: item })}
          >
            <Text style={styles.name}>{item.name} ({item.age})</Text>
            <Text style={styles.info}>
              Pozisyon: {item.position} | Potansiyel: {item.potential}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function DetailScreen({ route }) {
  const { player } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{player.name} Detayları</Text>
      <View style={styles.card}>
        <Text style={styles.name}>Yaş: {player.age}</Text>
        <Text style={styles.info}>Pozisyon: {player.position}</Text>
        <Text style={styles.info}>Potansiyel: {player.potential}</Text>
      </View>
    </View>
  );
}

function TransferScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transfer Ekranı</Text>
      <Text style={styles.info}>Burada maaş, bonus ve süre seçimi olacak.</Text>
    </View>
  );
}

function ManagerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menajer Profili</Text>
      <Text style={styles.info}>Bütçe: 1.000.000 $"</Text>
      <Text style={styles.info}>Popülerlik: 50/100</Text>
    </View>
  );
}

function MediaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medya & Tweet Akışı</Text>
      <Text style={styles.info}>“Ali Yalçın 2 gol attı!”</Text>
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Oyuncular" component={HomeScreen} />
      <Tab.Screen name="Transfer" component={TransferScreen} />
      <Tab.Screen name="Menajer" component={ManagerScreen} />
      <Tab.Screen name="Medya" component={MediaScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ana" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Detay" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  info: {
    color: '#bbb',
    fontSize: 14,
  },
});
