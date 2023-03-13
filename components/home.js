import { View, Text, Button, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TranscCard from './transcCard';
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as Progress from 'react-native-progress';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function HomeScreen2({ navigation }) {

    const [balance, setBalance] = useState();

    if (balance == null) {
        console.log("Getting value from API")
        axios
            .get(`http://www.randomnumberapi.com/api/v1.0/random?min=10000&max=50000&count=1`)
            .then(async (res) => {
                setBalance(res.data[0]);
                return await AsyncStorage.setItem('balance', JSON.stringify(res.data[0]))
            })
            .catch((err) => {
                if (err.response && err.response.data)
                    console.error(err.response.data);
                else console.error(err);
            });
    }

    return (
        <ScrollView style={styles.mainBody}>

            {/* User BLock */}
            <View style={styles.userBlock}>

                {/* User Block Header */}
                <View style={styles.userBlockHeader}>

                    {/* User Profile Picture */}
                    <View style={{ width: "20%" }}>
                        <Image source={require("../assets/images/user.png")} style={styles.profileImg} />
                    </View>

                    {/* Username */}
                    <View style={{ width: "65%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Text>Welcome to TechnnectPay</Text>
                        <Text style={styles.userName}>Kedar Ayare</Text>

                    </View>

                    {/* Notification Bell */}
                    <View style={{ width: "15%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../assets/images/notiBell.png")} style={styles.bellImg} />
                    </View>

                </View>

                {/* User Block Summary */}
                <View style={styles.userBlockSummary}>
                    <View style={{ width: "65%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Text style={{ fontSize: RFPercentage(2.5), fontFamily: "Inter-Regular", marginLeft: "5%" }}>Total Balance</Text>
                        <Text style={{ fontSize: RFPercentage(4), fontFamily: "Inter-Bold", color: "white", marginLeft: "5%" }}>{"\u20B9 "} {balance} </Text>
                    </View>
                    <TouchableOpacity style={{ width: "35%", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <Image source={require("../assets/images/topUp.png")} style={styles.topupImg} />
                        <Text>Top up money</Text>
                    </TouchableOpacity>
                </View>

            </View>


            {/* Grid Box */}
            <View style={styles.gridBox}>

                {/* Left Panel */}
                <View style={[styles.gridLeft, styles.gridPanel]}>

                    {/* LEFT - Top */}
                    <TouchableOpacity
                        style={[styles.gridLeftTop, styles.gridCommonCard]}
                        onPress={() => {
                            navigation.push("BankDetails")
                        }}
                    >

                        {/* Header */}
                        <View style={styles.gridCardHeader}>
                            <View style={styles.gridCardLogoBox}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2567/2567943.png" }} style={styles.gridLogoImg}></Image>
                            </View>
                        </View>

                        {/* Body */}
                        <View style={{ width: "90%", alignSelf: "center", height: height * 0.18, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                            <Text style={{ fontFamily: "Inter-Bold", fontSize: RFPercentage(2.5), color: "white" }}>Your Budget</Text>
                            <View>
                                <Text style={{ marginBottom: height * 0.01, fontSize: RFPercentage(2.5), color: "white", fontFamily: "Inter-Bold" }}>
                                    {"\u20B9 "}1543  <Text style={{ fontSize: RFPercentage(2), color: "grey", fontFamily: "Inter-Regular" }}>
                                        / September
                                    </Text>
                                </Text>
                                <Progress.Bar
                                    progress={0.7}
                                    width={null}
                                    color={"#4AC067"}
                                    unfilledColor={"#177a30"}
                                    borderWidth={0}
                                    height={height * 0.01}
                                />
                            </View>

                        </View>
                    </TouchableOpacity>


                    {/* LEFT - Bottom */}
                    <View style={[styles.gridLeftBottom, styles.gridCommonCard]}>

                        {/* Header */}
                        <View style={styles.gridCardHeader}>
                            <View style={styles.gridCardLogoBox}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/63/63977.png" }} style={styles.gridLogoImg}></Image>
                            </View>
                        </View>

                        {/* Body */}
                        <View style={{ display: "flex", width: "90%", alignSelf: "center", marginTop: height * 0.02, height: height * 0.25, flexDirection: "column", justifyContent: "space-around" }}>
                            <View>
                                <Text style={{ fontFamily: "Inter-Bold", fontSize: RFPercentage(2.5) }}>Cash Flow</Text>
                                <Text style={{ fontFamily: "Inter-Bold", fontSize: RFPercentage(3), color: "white" }}>{"\u20B9 "} +18000</Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: "Inter-Bold", fontSize: RFPercentage(2), marginBottom: height * 0.01 }}>Deposits</Text>
                                <Progress.Bar
                                    progress={0.7}
                                    width={null}
                                    color={"#4AC067"}
                                    borderWidth={0}
                                    height={height * 0.01}
                                    marginBottom={height * 0.02}
                                />
                                <Text style={{ fontFamily: "Inter-Bold", fontSize: RFPercentage(2), marginBottom: height * 0.01 }}>WithDrawls</Text>
                                <Progress.Bar
                                    progress={0.3}
                                    width={null}
                                    color={"#FF7043"}
                                    borderWidth={0}
                                    height={height * 0.01}
                                />
                            </View>
                        </View>

                    </View>

                </View>

                {/* Right Panel */}
                <View style={[styles.gridRight, styles.gridPanel]}>

                    {/* RIGHT - Top */}
                    <View style={[styles.gridRightTop, styles.gridCommonCard]}>

                        {/* Header */}
                        <View style={styles.gridCardHeader}>
                            <View style={styles.gridCardLogoBox}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/879/879864.png" }} style={styles.gridLogoImg}></Image>
                            </View>
                        </View>

                        {/* Body */}
                        <View style={{ width: "90%", alignSelf: "center", marginTop: height * 0.02, height: height * (0.25), display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                            <Text style={{ fontFamily: "Inter-Bold", color: "white", fontSize: RFPercentage(2.5) }}>Top Expenses</Text>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/9487/9487568.png" }} style={styles.gridGraph}></Image>
                            <View>
                                <Text style={{ fontFamily: "Inter-Bold", fontSize: RFPercentage(2) }}>Groceries</Text>
                                <Text style={{ fontFamily: "Inter-Bold", fontSize: RFPercentage(2.5), color: "white" }}>{"\u20B9  "} 1234</Text>
                            </View>
                        </View>
                    </View>

                    {/* RIGHT - Bottom */}
                    <View style={[styles.gridCommonCard, styles.gridRightBottom]}>
                        <View style={{ width: "90%", height: "90%", marginTop: "5%", alignSelf: "center", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                            <Text style={{ fontFamily: "Inter-Bold", fontSize: RFPercentage(2.3), color: "white" }}>Activate your best tarrif plan</Text>
                            <Text style={{ fontFamily: "Inter-Bold", fontSize: RFPercentage(2.5), color: "white" }}> {"\u20B9 "}200 <Text style={{ fontFamily: "Inter-Regular", fontSize: RFPercentage(2), color: "#E2DCDC" }}>/ Month</Text></Text>
                            <Image source={require("../assets/images/add.png")} style={{ resizeMode: "contain", height: "30%", aspectRatio: 1, alignSelf: "flex-end" }}></Image>
                        </View>
                    </View>
                </View>
            </View >

            {/* Latest Transactions */}
            < View style={styles.latestTransc} >
                <Text style={{ fontSize: 20, fontFamily: "Inter-Bold", marginTop: height * 0.02, marginBottom: height * 0.02 }}>Latest Transactions</Text>
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
                        transcType={"credit"}
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
            </View >
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    mainBody: {
        height: height,
        width: width,
        backgroundColor: "#181A20"
    },
    userBlock: {
        height: height * 0.24,
        width: width,
        backgroundColor: "#24252B",
        alignSelf: "center",
        borderBottomLeftRadius: width * 0.05,
        borderBottomRightRadius: width * 0.05,
    },
    userBlockHeader: {
        display: "flex",
        flexDirection: "row",
        height: "30%",
        width: "95%",
        alignSelf: "center",
        marginTop: height * 0.02
    },
    profileImg: {
        height: "100%",
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 100
    },
    bellImg: {
        height: "50%",
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 100
    },
    userName: {
        fontFamily: "Inter-Bold",
        color: "white",
        fontSize: RFPercentage(2.5)
    },

    userBlockSummary: {
        width: "95%",
        display: "flex",
        flexDirection: "row",
        height: "60%",
        alignSelf: "center",
    },

    topupImg: {
        height: "40%",
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 100,
        marginBottom: "5%"
    },

    gridBox: {
        height: height * 0.6,
        width: width,
        display: "flex",
        flexDirection: "row",
        marginTop: height * 0.01,
        justifyContent: "space-evenly",
    },
    gridPanel: {
        width: width * 0.45,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    gridCommonCard: {
        width: "100%",
        backgroundColor: "#24252B",
        borderRadius: width * 0.02,
        display: "flex",
        flexDirection: "column"
        // backgroundColor: "red"
    },

    gridCardHeader: {
        // backgroundColor: "yellow",
        height: height * 0.05
    },
    gridCardLogoBox: {
        height: (height * 0.04) * 0.9,
        width: (height * 0.04) * 0.9,
        marginLeft: "5%",
        marginTop: "5%",
        backgroundColor: "yellow",
        borderRadius: width * 0.02,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    gridLeftTop: {
        height: "40%",
    },
    gridLeftBottom: {
        height: "55%",
    },
    gridRightTop: {
        height: "55%",
    },
    gridRightBottom: {
        height: "40%",
        backgroundColor: "#8766EB",
    },

    gridLogoImg: {
        width: "80%",
        resizeMode: 'contain',
        aspectRatio: 1
    },

    gridGraph: {
        width: "40%",
        resizeMode: 'contain',
        aspectRatio: 1,
        alignSelf: "center"
    },

    latestTransc: {
        width: width * 0.93,
        alignSelf: "center",
        marginTop: height * 0.01,
    }
});

