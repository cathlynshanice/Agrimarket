import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface RoleCardProps {
  title: string;
  image: any;
  onPress: () => void;
}

export default function RoleCard({ title, image, onPress }: RoleCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});

