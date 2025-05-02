import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Halo, <Text style={styles.name}>Pak Iman</Text></Text>
            <Text style={styles.location}>Ngawi, Jawa Timur</Text>
          </View>
          <View style={styles.notification}>
            <Ionicons name="notifications-outline" size={24} />
            <View style={styles.badge} />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Silahkan cari fitur yang anda ingin gunakan"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.weatherCard}>
          <Text style={styles.date}>Senin, 30 April 2025</Text>
          <View style={styles.weatherRow}>
            <Text style={styles.temp}>30°C</Text>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/869/869869.png' }}
              style={styles.weatherIcon}
            />
          </View>
        </View>

        <View style={styles.menuRow}>
          <MenuItem label="Plantify" icon="local-florist" />
          <MenuItem label="Forum" icon="forum" />
          <MenuItem label="Kursus" icon="school" />
          <MenuItem label="Mitra" icon="groups" />
        </View>

        <View style={styles.menuRow}>
          <MenuItem label="Catatan" icon="sticky-note-2" />
          <MenuItem label="Berkas" icon="folder" />
        </View>

        <Text style={styles.newOrders}>Pesanan Baru!</Text>

        <View style={styles.orderBox}>
          <Image
            source={{ uri: 'https://source.unsplash.com/100x100/?vegetable' }}
            style={styles.orderImage}
          />
          <Text style={styles.orderText}>
            1 Order baru saja di pesan oleh Cathlyn Shanice, silahkan klik untuk lihat detail.
          </Text>
        </View>

        <View style={styles.orderBox}>
          <Image
            source={{ uri: 'https://source.unsplash.com/100x100/?green-beans' }}
            style={styles.orderImage}
          />
          <Text style={styles.orderText}>
            1 Order baru saja di pesan oleh evermoresatu, silahkan klik untuk lihat detail.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <NavItem label="Beranda" icon="home" active />
        <NavItem label="Toko" icon="store" />
        <NavItem label="Percakapan" icon="chat" />
        <NavItem label="Profil" icon="person" />
      </View>
    </View>
  );
}

// Inline sub-elements for Menu and Navbar (no external component)
const MenuItem = ({ label, icon }: { label: string, icon: any }) => (
  <View style={styles.menuItem}>
    <MaterialIcons name={icon} size={28} color="#f4af1b" />
    <Text style={styles.menuText}>{label}</Text>
  </View>
);

const NavItem = ({ label, icon, active }: { label: string, icon: any, active?: boolean }) => (
  <TouchableOpacity style={styles.navItem}>
    <Ionicons name={icon} size={22} color={active ? "#7AA35A" : "#999"} />
    <Text style={[styles.navText, active && { color: '#7AA35A' }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 16,
    },
    header: {
      marginTop: 48,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    greeting: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    name: {
      color: '#7AA35A',
    },
    location: {
      color: '#999',
    },
    notification: {
      position: 'relative',
    },
    badge: {
      width: 10,
      height: 10,
      backgroundColor: 'red',
      borderRadius: 5,
      position: 'absolute',
      right: -2,
      top: -2,
    },
    searchContainer: {
      marginTop: 20,
      borderWidth: 1,
      borderColor: '#7AA35A',
      borderRadius: 10,
      paddingHorizontal: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      height: 40,
    },
    weatherCard: {
      marginTop: 20,
      backgroundColor: '#4facfe',
      borderRadius: 12,
      padding: 16,
    },
    date: {
      color: '#fff',
      fontSize: 14,
      marginBottom: 8,
    },
    weatherRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    temp: {
      color: '#fff',
      fontSize: 28,
    },
    weatherIcon: {
      width: 48,
      height: 48,
    },
    menuRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 24,
    },
    menuItem: {
      alignItems: 'center',
    },
    menuText: {
      marginTop: 4,
      fontSize: 12,
    },
    newOrders: {
      marginTop: 24,
      fontWeight: 'bold',
      fontSize: 16,
    },
    orderBox: {
      marginTop: 12,
      borderWidth: 1,
      borderColor: '#7AA35A',
      borderRadius: 10,
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    orderImage: {
      width: 50,
      height: 50,
      borderRadius: 6,
      marginRight: 10,
    },
    orderText: {
      flex: 1,
      fontSize: 13,
    },
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 12,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      backgroundColor: '#fff',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    navItem: {
      alignItems: 'center',
    },
    navText: {
      fontSize: 12,
      color: '#999',
    },
  });
  