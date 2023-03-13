import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const TranscCard = ({ title, category, amount, transcType, date, imgSrc }) => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


    function getPriceString() {
        var res = "\u20B9  "
        if (transcType == "credit") {
            res += "+"
        } else {
            res += "-"
        }
        res += "" + amount
        return res
    }

    function dateFormat() {
        var today = new Date()
        if (date.getDate() == today.getDate()) {
            return "Today"
        }
        var res = date.getDate() + " " + months[date.getMonth()] + " " + (date.getFullYear() % 100)
        return res
    }

    return (
        <View style={{ height: height * 0.08, marginBottom: height * 0.03, display: "flex", flexDirection: "row" }}>
            <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                <Image source={{ uri: imgSrc }} style={{ width: "80%", resizeMode: 'contain', aspectRatio: 1, borderRadius: 100 }}></Image>
            </View>
            <View style={{ width: "60%", height: "100%", display: "flex", flexDirection: "column" }}>
                <Text style={{ fontFamily: "Inter-Bold", color: "white", height: "50%", fontSize: RFPercentage(3), marginLeft: "6%" }}>{title}</Text>
                <Text style={{ fontFamily: "Inter-Regular", height: "50%", textAlignVertical: "center", fontSize: RFPercentage(2), marginLeft: "6%" }}>{category}</Text>
            </View>
            <View style={{ width: "20%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Text style={(transcType == "credit") ? styles.creditText : styles.debitText}>{getPriceString()}</Text>
                <Text>{dateFormat()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    creditText: {
        color: "#4AC067"
    },
    debitText: {
        color: "#FF7043"
    }
})

export default TranscCard