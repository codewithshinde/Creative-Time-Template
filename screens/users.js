import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const windowWidth = Dimensions.get('window').width;

const UsersScreen = () => {
  const users = [
    {
      id: 1,
      name: 'Leah - Manag...',
      role: 'Manager',
      image: 'https://storage.googleapis.com/a1aa/image/fdbf666e-851e-422d-dc56-c37bf5b79319.jpg',
      bgColor: '#2a2c30',
      selected: false
    },
    {
      id: 2,
      name: 'Cashier',
      role: 'Cashier',
      image: 'https://storage.googleapis.com/a1aa/image/bc98d23c-6703-43b8-4c34-926e47cf04ca.jpg',
      bgColor: '#3a3c50',
      selected: false
    },
    {
      id: 3,
      name: 'Heather - Ser...',
      role: 'Server',
      image: 'https://storage.googleapis.com/a1aa/image/14416e38-c390-4085-fc61-92338b3a929d.jpg',
      bgColor: 'black',
      selected: true
    },
    {
      id: 4,
      name: 'Amelie - Server',
      role: 'Server',
      image: 'https://storage.googleapis.com/a1aa/image/81f04b09-5667-4f44-e3c9-84291de953a6.jpg',
      bgColor: 'black',
      selected: true
    },
    {
      id: 5,
      name: 'Gus - Server',
      role: 'Server',
      image: 'https://storage.googleapis.com/a1aa/image/7f84597c-e2be-4f04-bc2c-e7a145e7df02.jpg',
      bgColor: 'black',
      selected: false
    },
    {
      id: 6,
      name: 'Sam - Barten...',
      role: 'Bartender',
      image: 'https://storage.googleapis.com/a1aa/image/502f068f-3aa8-4993-08da-46479eade417.jpg',
      bgColor: 'black',
      selected: false
    },
    {
      id: 7,
      name: 'Steve - Busser',
      role: 'Busser',
      image: 'https://storage.googleapis.com/a1aa/image/5dbc7996-a79d-4c27-12cd-7e14be9d58b8.jpg',
      bgColor: 'black',
      selected: false
    },
    {
      id: 8,
      name: 'Mary',
      role: '',
      image: 'https://storage.googleapis.com/a1aa/image/a9f2840d-227f-4c2f-c9d5-ef23cd016b5b.jpg',
      bgColor: 'black',
      selected: false
    },
    {
      id: 9,
      name: 'Larry',
      role: '',
      image: 'https://storage.googleapis.com/a1aa/image/7a36a66f-c701-4d33-f3cd-2ac0f3c679f9.jpg',
      bgColor: 'black',
      selected: false
    },
    {
      id: 10,
      name: 'Kate',
      role: '',
      image: 'https://storage.googleapis.com/a1aa/image/17f89db7-5204-4432-cd6d-1ee565f8d64b.jpg',
      bgColor: 'black',
      selected: false
    },
    {
      id: 11,
      name: 'Bob',
      role: '',
      image: 'https://storage.googleapis.com/a1aa/image/9fc21152-715f-4455-f275-751066fb33d1.jpg',
      bgColor: 'black',
      selected: false
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <View style={styles.infoContainer}>
            <FontAwesomeIcon icon={faInfoCircle} style={styles.infoIcon} />
            <View style={styles.infoText}>
              <Text style={styles.infoLine}>App: 7.36.20237</Text>
              <Text style={styles.infoLine}>Server: 8.0.144599</Text>
              <Text style={styles.infoLine}>Lightspeed L-Series</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.helpContainer}>
            <Text style={styles.helpText}>Help Center</Text>
            <FontAwesomeIcon icon={faQuestionCircle} style={styles.helpIcon} />
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/dd2676bf-412a-4359-33cf-e92c7cf8d9e7.jpg' }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Login buttons */}
        <View style={styles.loginButtons}>
          <TouchableOpacity style={styles.userLoginButton}>
            <Text style={styles.userLoginText}>USER LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pinLoginButton}>
            <Text style={styles.pinLoginText}>PIN LOGIN</Text>
          </TouchableOpacity>
        </View>

        {/* User grid */}
        <ScrollView contentContainerStyle={styles.userGrid}>
          {users.map((user) => (
            <TouchableOpacity key={user.id} style={styles.userCard}>
              <View style={[styles.userImageContainer, { backgroundColor: user.bgColor }]}>
                <Image
                  source={{ uri: user.image }}
                  style={styles.userImage}
                  resizeMode="contain"
                />
                {user.selected && <View style={styles.selectedIndicator} />}
              </View>
              <Text style={styles.userName} numberOfLines={1}>
                {user.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Bottom bar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity>
            <Text style={styles.bottomLink}>Restaurant Manager</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomLink}>Explore new features!</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomLink}>Tools</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c20',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  mainBox: {
    width: '100%',
    maxWidth: 1024,
    //aspectRatio: 4 / 3,
    borderRadius: 24,
    borderWidth: 1,
    //borderColor: '#374151',
    backgroundColor: '#1a1c20',
    padding: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    color: '#3b82f6',
    marginRight: 8,
  },
  infoText: {},
  infoLine: {
    color: '#9ca3af',
    fontSize: 12,
    lineHeight: 16,
  },
  helpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpText: {
    color: '#3b82f6',
    fontSize: 12,
    marginRight: 4,
  },
  helpIcon: {
    color: '#3b82f6',
    fontSize: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    height: 40,
    width: 120,
  },
  loginButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  userLoginButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  pinLoginButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  userLoginText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  pinLoginText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  userGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
    paddingHorizontal: 16,
  },
  userCard: {
    width: 80,
    alignItems: 'center',
  },
  userImageContainer: {
    width: 80,
    height: 112,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#374151',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 64,
    height: 96,
  },
  selectedIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#16a34a',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  userName: {
    color: '#9ca3af',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
    width: '100%',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  bottomLink: {
    color: '#3b82f6',
    fontSize: 12,
  },
});

export default UsersScreen;