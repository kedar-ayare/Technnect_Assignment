import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'

const height = Dimensions.get('window').height;

const CategoryPill = ({ title, color }) => {
    return (
        <View style={styles.categoryPill}>
            <View style={[styles.categoryPillCircle, { backgroundColor: color }]}></View>
            <Text style={{ textAlignVertical: "center", fontSize: RFPercentage(2), height: "100%", color: "white", fontFamily: "Inter-Bold" }}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryPill: {
        height: "45%",
        backgroundColor: "#181A20",
        alignSelf: "flex-start",
        borderRadius: height,
        paddingHorizontal: 10,
        marginHorizontal: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2
    },
    categoryPillCircle: {
        width: RFPercentage(1),
        height: "20%",
        borderRadius: height,
        marginRight: "5%"
    }
})

export default CategoryPill