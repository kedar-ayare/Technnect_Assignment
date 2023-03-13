import { View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import PieChart from 'react-native-pie-chart'
import { RFPercentage } from 'react-native-responsive-fontsize';
import categoryPill from './categoryPill';
import CategoryPill from './categoryPill';
import TranscCard from './transcCard';




const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function BankDetails({ navigation }) {

    const [transcType, setTranscType] = useState("-");

    function getTransactions() {

        // FOR TYPE - SPENT
        if (transcType == "-") {
            return (
                <View>
                    <TranscCard
                        title={"Starbucks"}
                        category={"Food&Drink"}
                        amount={400}
                        transcType={"debit"}
                        date={new Date()}
                        imgSrc={"https://www.starbucks.in/assets/icon/logo.png"}
                    ></TranscCard>
                    <TranscCard
                        title={"Dinner Share"}
                        category={"Food&Drink"}
                        amount={1200}
                        transcType={"debit"}
                        date={new Date(2022, 1, 22)}
                        imgSrc={"https://cdn-icons-png.flaticon.com/512/9887/9887524.png"}
                    ></TranscCard>
                    <TranscCard
                        title={"Petrol"}
                        category={"Travel"}
                        amount={300}
                        transcType={"debit"}
                        date={new Date(2022, 2, 22)}
                        imgSrc={"https://cdn-icons-png.flaticon.com/512/1599/1599728.png"}
                    ></TranscCard>
                </View>
            )
        }
        // FOR TYPE - RECEIVED
        else {
            return (<View>
                <TranscCard
                    title={"Bank Interest"}
                    category={"Food&Drink"}
                    amount={400}
                    transcType={"credit"}
                    date={new Date()}
                    imgSrc={"https://www.starbucks.in/assets/icon/logo.png"}
                ></TranscCard>
                <TranscCard
                    title={"Drinks Contro"}
                    category={"Food&Drink"}
                    amount={1200}
                    transcType={"credit"}
                    date={new Date(2022, 1, 22)}
                    imgSrc={"https://cdn-icons-png.flaticon.com/512/9887/9887524.png"}
                ></TranscCard>
                <TranscCard
                    title={"Cab Share"}
                    category={"Travel"}
                    amount={300}
                    transcType={"credit"}
                    date={new Date(2022, 2, 22)}
                    imgSrc={"https://cdn-icons-png.flaticon.com/512/1599/1599728.png"}
                ></TranscCard>
            </View>)
        }
    }

    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']
    return (
        <View style={{ flex: 1 }}>

            {/* Header */}
            <View style={{ height: height * 0.08, width: "100%", backgroundColor: "#24252B", display: "flex", flexDirection: "row" }}>
                <TouchableOpacity style={{ width: "15%" }}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Image source={require('../assets/images/left.png')} style={{ resizeMode: "contain", height: "70%", marginTop: "15%", aspectRatio: 1 }}></Image>
                </TouchableOpacity>

                <Text style={{ height: "100%", width: "70%", textAlign: "center", textAlignVertical: "center", fontFamily: "Inter-SemiBold", fontSize: RFPercentage(3), color: "white" }}>Bank Details</Text>
            </View>

            {/* Body */}
            <ScrollView style={{ backgroundColor: "#181A20" }}>
                <View style={styles.timeSpanBox}>
                    <View style={styles.timePillSelected}>
                        <Text style={{ textAlignVertical: "center", fontSize: RFPercentage(2), height: "100%", color: "black", fontFamily: "Inter-Bold" }}>1 Month</Text>
                    </View>
                    <View style={styles.timePill}>
                        <Text style={{ textAlignVertical: "center", fontSize: RFPercentage(2), height: "100%", color: "white", fontFamily: "Inter-Bold" }}>3 Month</Text>
                    </View>
                    <View style={styles.timePill}>
                        <Text style={{ textAlignVertical: "center", fontSize: RFPercentage(2), height: "100%", color: "white", fontFamily: "Inter-Bold" }}>6 Month</Text>
                    </View>
                    <View style={styles.timePill}>
                        <Text style={{ textAlignVertical: "center", fontSize: RFPercentage(2), height: "100%", color: "white", fontFamily: "Inter-Bold" }}>1 Year</Text>
                    </View>

                </View>

                <View style={styles.pieContainer}>
                    <View style={styles.pie}>
                        <TouchableOpacity style={styles.pieSidePanels}>
                            <Image source={require('../assets/images/left.png')} style={styles.pieSideArrowImg}></Image>
                        </TouchableOpacity>
                        <PieChart
                            widthAndHeight={width * 0.6}
                            series={series}
                            sliceColor={sliceColor}
                            doughnut={true}
                            coverRadius={0.7}
                            coverFill={"#24252B"}
                        />

                        <TouchableOpacity style={styles.pieSidePanels}>
                            <Image source={require("../assets/images/next.png")} style={styles.pieSideArrowImg}></Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ alignSelf: 'center', fontFamily: "Inter-Bold", fontSize: RFPercentage(2.5), height: "8%", textAlignVertical: "center", marginBottom: height * 0.02 }}>Total Spent: {"\u20B9 "} 1700</Text>
                    <View style={styles.pieCategories}>
                        <CategoryPill title={"Groceries"} color={"#F44336"} />
                        <CategoryPill title={"Health care"} color={"#2196F3"} />
                        <CategoryPill title={"Food"} color={"#FFEB3B"} />
                        <CategoryPill title={"Shopping"} color={"#4CAF50"} />
                        <CategoryPill title={"Other"} color={"#FF9800"} />
                    </View>
                </View>

                <View style={styles.transcSwitch}>
                    <TouchableOpacity
                        style={(transcType == "-") ? styles.transcSwitchSelected : styles.transcSwitchButton}
                        onPress={() => {
                            setTranscType("-")
                        }}
                    >
                        <Text style={(transcType == "-") ? styles.transcTextSelected : styles.transcSwitchText}>Spent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={(transcType == "+") ? styles.transcSwitchSelected : styles.transcSwitchButton}
                        onPress={() => {
                            setTranscType("+")
                        }}
                    >
                        <Text style={(transcType == "+") ? styles.transcTextSelected : styles.transcSwitchText}>Received</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.transactions}>
                    {
                        getTransactions()
                    }
                </View>

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    timeSpanBox: {
        width: "90%",
        alignSelf: "center",
        height: height * 0.07,
        marginTop: height * 0.02,
        display: "flex",
        flexDirection: "row"
    },
    timePill: {
        height: "60%",
        backgroundColor: "#24252B",
        alignSelf: "flex-start",
        borderRadius: height,
        paddingHorizontal: 10,
        marginHorizontal: 4
    },
    timePillSelected: {
        height: "60%",
        backgroundColor: "#ECFE72",
        alignSelf: "flex-start",
        borderRadius: height,
        paddingHorizontal: 10,
        marginHorizontal: 4
    },


    pieContainer: {
        width: "90%",
        height: height * 0.50,
        alignSelf: "center",
        marginTop: height * 0.01,
        backgroundColor: "#24252B",
        borderRadius: width * 0.05
    },
    pie: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "65%",
        alignItems: "center",
    },
    pieSidePanels: {
        width: width * 0.15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    pieSideArrowImg: {
        width: "100%",
        resizeMode: "contain"
    },
    pieCategories: {
        width: "90%",
        height: "22%",
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    transcSwitch: {
        width: "90%",
        height: height * 0.07,
        marginTop: height * 0.02,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        borderRadius: height * 0.02,
        backgroundColor: "#424349"
    },
    transcSwitchButton: {
        width: "50%",
        alignItems: "center"
    },
    transcSwitchText: {
        height: "100%",
        textAlignVertical: "center",
        fontFamily: "Inter-Bold",
        fontSize: RFPercentage(2.5)
    },
    transcSwitchSelected: {
        width: "50%",
        alignItems: "center",
        backgroundColor: "#ECFE72",
        borderRadius: height * 0.02
    },
    transcTextSelected: {
        height: "100%",
        textAlignVertical: "center",
        fontFamily: "Inter-Bold",
        fontSize: RFPercentage(2.5),
        color: "black"
    },
    transactions: {
        marginTop: height * 0.04,
        width: "90%",
        alignSelf: "center",
    }



})