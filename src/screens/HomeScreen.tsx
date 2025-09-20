import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Card, RadioButton, Text, TextInput } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import "../../assets/images/shimla.jpg";
import GradientButton from "../components/GradientButton";
import TrendingCard from "../components/TrendingCard";


export default function MainScreen() {
  const [from, setFrom] = useState("");  
  const [to, setTo] = useState(""); 
  const [tripType, setTripType] = useState("budget");

  const [departureDate, setDepartureDate] = useState(undefined);
  const [returnDate, setReturnDate] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [fieldType, setFieldType] = useState(null); // which field user tapped


  const onConfirm = (params) => {
    if (fieldType === "departure") {
      setDepartureDate(params.date);
    } else if (fieldType === "return") {
      setReturnDate(params.date);
    }
    setOpen(false);
  };

  const trendingData = [
    { id: "1", title: "Shimla", desc: "The 'Queen of Hills,' famous for its colonial architecture", travelers: "561 travelers now", image: require("../../assets/images/shimla.jpg") },
    { id: "2", title: "Chakrata", desc: "Peaceful and scenic hill station in Uttarakhand", travelers: "78 travelers now", image: require("../../assets/images/chakrata.jpg") },
  ];

  const testimonials = [
    {
      id: "1",
      name: "Jenny Wilson",
      rating: 5,
      review: "A Must-Have for Any Traveler!",
      desc: "This app is brilliant. The interface is so clean and easy to use. I booked my entire weekend getaway to the coast in under 20 minutes ...",
      image: require("../../assets/images/user1.jpg"),
    },
    {
      id: "2",
      name: "Robert Fox",
      rating: 4,
      review: "Amazing App Experience!",
      desc: "Very smooth experience booking trips. Loved how quick and simple it was.",
      image: require("../../assets/images/user2.jpg"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar.Image size={40} source={require("../../assets/images/profile.jpg")} />
        <View>
          <Text style={styles.greeting}>Hello Nipun</Text>
          <Text style={styles.subtext}>Lets Plan Your Trip</Text>
        </View>
      </View>

      {/* Form */}
      <Card style={styles.formCard}>
        <Card.Content>
          <TextInput
        label="From"
        value={from}
        onChangeText={(text) => setFrom(text)}  // update state when user types
        style={styles.input}
      />

      <TextInput
        label="To"
        value={to}
        onChangeText={(text) => setTo(text)}
        style={styles.input}
      />
          {/* <View style={styles.row}>
            <TextInput label="Departure Date" value="" style={styles.halfInput} />
            <TextInput label="Return Date" value="" style={styles.halfInput} />
          </View> */}

          <View style={styles.row}>
      <TextInput
        label="Departure Date"
        value={departureDate ? departureDate.toDateString() : ""}
        style={styles.halfInput}
        // editable={false} // prevent typing
        onPressIn={() => {
          setFieldType("departure");
          setOpen(true);
        }}
      />

      <TextInput
        label="Return Date"
        value={returnDate ? returnDate.toDateString() : ""}
        style={styles.halfInput}
        // editable={false}
        onPressIn={() => {
          setFieldType("return");
          setOpen(true);
        }}
      />

      {/* Date Picker Modal */}
      <DatePickerModal
        mode="single"
        visible={open}
        onDismiss={() => setOpen(false)}
        date={new Date()}
        onConfirm={onConfirm}
        locale="en" // Add your desired locale, e.g., "en" for English
      />
    </View>

          <View style={styles.row}>
            <RadioButton.Group onValueChange={setTripType} value={tripType} style={styles.row}>
              <View style={styles.radioRow}>
                <RadioButton value="budget" />
                <Text>Budget Trip</Text>
              </View>
              <View style={styles.radioRow}>
                <RadioButton value="exclusive" />
                <Text>Exclusive Trip</Text>
              </View>
              <View style={styles.radioRow}>
                <RadioButton value="female" />
                <Text>Female Traveler</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.row}>
            <TextInput label="Amount" value="20000" style={styles.halfInput} />
            <TextInput label="No Of Travelers" value="1" style={styles.halfInput} />
          </View>

          <GradientButton
          style={styles.button}
                        title="Generate Itinerary"
                        onPress={() => {console.log('====================================');}} // 👈 use "MainPage"
                      />
          
        </Card.Content>
      </Card>

      {/* Trending */}
      <Text style={styles.sectionTitle}>Trending</Text>
      <FlatList
        horizontal
        data={trendingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <TrendingCard
  title={item.title}
  subtitle={item.desc}
  travelers={561}
  image={item.image}
/>

        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Testimonials */}
      <Text style={styles.sectionTitle}>Testimonies</Text>
      <FlatList
        horizontal
        data={testimonials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.testimonialCard}>
            <Card.Content>
              <Avatar.Image size={60} source={item.image} style={{ alignSelf: "center" }} />
              <Text style={styles.testimonialName}>{item.name}</Text>
              <Text style={styles.testimonialReview}>"{item.review}"</Text>
              <Text style={styles.testimonialDesc}>{item.desc}</Text>
            </Card.Content>
          </Card>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10, marginTop: 30 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 10,marginTop: 30 },
  greeting: { fontSize: 18, fontWeight: "bold" },
  subtext: { fontSize: 14, color: "#666" },
  formCard: { marginBottom: 20, borderRadius: 10, backgroundColor: "#EDEDED99",
 },
  input: { marginBottom: 10, backgroundColor: "#f5f5f5" },
  row: { flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" },
  halfInput: { flex: 1, margin: 5, backgroundColor: "#f5f5f5" },
  radioRow: { flexDirection: "row", alignItems: "center", marginRight: 10 },
  button: { marginTop: 20,  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  trendingCard: { width: 200, marginRight: 10, borderRadius: 10 },
  trendingTitle: { fontWeight: "bold", fontSize: 16, marginTop: 5 },
  trendingDesc: { fontSize: 12, color: "#666" },
  trendingTravelers: { fontSize: 12, color: "#1E3A8A", marginTop: 2 },
  testimonialCard: { width: 250, marginRight: 10, borderRadius: 10, padding: 10 },
  testimonialName: { textAlign: "center", fontWeight: "bold", marginVertical: 5 },
  testimonialReview: { textAlign: "center", fontStyle: "italic", marginBottom: 5 },
  testimonialDesc: { fontSize: 12, color: "#666", textAlign: "center" },
});
