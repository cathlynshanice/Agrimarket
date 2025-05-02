
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { useRouter } from 'expo-router';

// // import { useRouter } from 'next/navigation';


// export default function ChooseRolePage() {
//    const router = useRouter();
  
//    const handleChoosePetani = () => {
//     router.push('/petani/homepage');
//   };

  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Pilih Peran</Text>

//       {/* Petani */}
//       <TouchableOpacity style={styles.card} onPress={() => router.push('/petani/homepage')}>
//         {/* <Image source={require('../../../assets/image/farmer.png')} style={styles.image} /> */}
//         <Text style={styles.cardText}>Petani</Text>
//       </TouchableOpacity>

//       {/* Pengelolah */}
//       <TouchableOpacity style={styles.card} onPress={() => router.push('/+not-found')}>
//         {/* <Image source={require('../../../assets/image/processor.png')} style={styles.image} /> */}
//         <Text style={styles.cardText}>Pengelolah</Text>
//       </TouchableOpacity>

//       {/* Distributor */}
//       <TouchableOpacity style={styles.card} onPress={() => router.push('/+not-found')}>
//         {/* <Image source={require('../../../assets/image/distributor.png')} style={styles.image} /> */}
//         <Text style={styles.cardText}>Distributor</Text>
//       </TouchableOpacity>

//       {/* Konsumen */}
//       <TouchableOpacity style={styles.card} onPress={() => router.push('/+not-found')}>
//         {/* <Image source={require('../../../assets/image/consumer.png')} style={styles.image} /> */}
//         <Text style={styles.cardText}>Konsumen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 60,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#84b067',
//     marginBottom: 20,
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: '#84b067',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     marginBottom: 10,
//     resizeMode: 'contain',
//   },
//   cardText: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
// });










import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Homepage() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            Halo, <Text style={styles.name}>Pak Iman</Text>
          </Text>
          <Text style={styles.location}>Ngawi, Jawa Timur</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={{ marginHorizontal: 8 }} />
        <TextInput
          placeholder="Silahkan cari fitur yang anda ingin gunakan"
          style={styles.searchInput}
        />
      </View>

      {/* Weather */}
      <View style={styles.weatherBox}>
        <Text style={styles.date}>Senin, 30 April 2025</Text>
        <View style={styles.weatherContent}>
          <Text style={styles.temp}>30°C</Text>
          {/* <Image source={require('../../assets/sun-cloud.png')} style={{ width: 60, height: 60 }} /> */}
        </View>
      </View>

      {/* Features */}
      <View style={styles.features}>
        {[
          { label: 'Plantify', icon: 'local-florist' },
          { label: 'Forum', icon: 'forum' },
          { label: 'Kursus', icon: 'school' },
          { label: 'Mitra', icon: 'groups' },
          { label: 'Catatan', icon: 'sticky-note-2' },
          { label: 'Berkas', icon: 'folder' }
        ].map((item, index) => (
          <View key={index} style={styles.featureItem}>
            {/* <MaterialIcons name={item.icon} size={24} color="#ffc107" /> */}
            <Text>{item.label}</Text>
          </View>
        ))}
      </View>

      
      <Text style={styles.sectionTitle}>Pesanan Baru!</Text>

<View style={styles.orderCard}>
  {/* <Image source={require('../../assets/lettuce.png')} style={styles.orderImage} /> */}
  <Text style={styles.orderText}>
    1 Order baru saja di pesan oleh Cathlyn Shanice, silahkan klik untuk lihat detail.
  </Text>
</View>

  <View style={styles.orderCard}>
    {/* <Image source={require('../../assets/icon.png')} style={styles.orderImage} /> */}
    <Text style={styles.orderText}>
      1 Order baru saja di pesan oleh evermoresatu, silahkan klik untuk lihat detail.
    </Text>
  </View>


{/* Panen Musim Maret */}
<Text style={styles.sectionTitle}>Panen Musim Maret</Text>
      <View style={styles.orderCard}>
        {/* <Image source={require('../../assets/march-harvest.png')} style={styles.orderImage} /> */}
        <Text style={{ fontWeight: 'bold', color: 'green', marginBottom: 4 }}>MARET</Text>
        <Text style={styles.orderText}>
          Bulan Maret merupakan masa panen bagi berbagai komoditas pertanian, terutama jagung,
          padi dan kedelai.
        </Text>
      </View>

      
  <Text style={styles.sectionTitle}>Panen Musim Maret</Text>
  <View style={styles.orderCard}>
    {/* <Image source={require('../../assets/march-harvest.png')} style={styles.orderImage} /> */}
    <View>
      <Text style={{ fontWeight: 'bold', color: 'green', marginBottom: 4 }}>MARET</Text>
      <Text style={styles.orderText}>
        Bulan Maret merupakan masa panen bagi berbagai komoditas pertanian, terutama jagung, 
        padi dan kedelai.
      </Text>
    </View>
  </View>




    <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Ionicons name="home" size={20} color="green" />
      <Text style={{ color: 'green' }}>Beranda</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Ionicons name="storefront-outline" size={20} color="gray" />
      <Text style={{ color: 'gray' }}>Toko</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Ionicons name="chatbox-ellipses-outline" size={20} color="gray" />
      <Text style={{ color: 'gray' }}>Percakapan</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Ionicons name="person-outline" size={20} color="gray" />
      <Text style={{ color: 'gray' }}>Profil</Text>
    </TouchableOpacity>
  </View>

      </ScrollView>
      
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  name: {
    color: 'green'
  },
  location: {
    fontSize: 12,
    color: 'gray'
  },
  searchBar: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 40,
    marginBottom: 20
  },
  searchInput: {
    flex: 1
  },
  weatherBox: {
    backgroundColor: '#4fc3f7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20
  },
  date: {
    color: '#fff',
    marginBottom: 8
  },
  weatherContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  temp: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  featureItem: {
    width: '22%',
    alignItems: 'center',
    marginVertical: 10
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  orderCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#a5d6a7',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    alignItems: 'center'
  },
  orderImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  orderText: {
    flex: 1
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  navItem: {
    alignItems: 'center'
  }
  
});
