<script src="http://192.168.2.20:8097"></script>
import React from 'react';
import { useState } from 'react'
import {FlatList, StyleSheet, View, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {    
    const [courseGoals, setCourseGoals] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
   
    function onAddGoal(goal) {
        console.log('onAddGoal')
        if (goal !== undefined) {
            setCourseGoals(goals => [
                ...goals,
                {
                    text: goal,
                    id: Math.random()
                }
            ])
        }
        setIsModalVisible(false)
    }

    function handleAddNewGoal() {
        setIsModalVisible(true)
    }

    function handleDeleteGoal(id) {
        console.log(id)
        setCourseGoals(goals => {
            return goals.filter(g => g.id !== id)
        })
    }

    return (
        <>
        <StatusBar style='light'/>
        <View style={styles.appContainer}>
            <Button title="Add New Goal" color="#5e0acc" onPress={handleAddNewGoal}/>
            <GoalInput isVisible={isModalVisible} onAddGoal={onAddGoal}/>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={itemData => {
                        return (
                            <GoalItem handleLongPress={handleDeleteGoal} item={itemData.item}/>
                        );
                    }}
                    keyExtractor={(item, index) => { return item.id }}
                    alwaysBounceVertical={false}
                    />
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        flex: 1
        
    },  
    goalsContainer: {
        flex: 5
    }
})