import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle, faQuestionCircle, faBackspace } from '@fortawesome/free-solid-svg-icons';

const PinLoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
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

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/0bd73276-217d-4895-96ad-e8369d061d99.jpg' }}
            style={styles.logo}
          />
          <Text style={styles.logoText}>lightspeed</Text>
        </View>

        <View style={styles.loginTypeContainer}>
          <TouchableOpacity style={styles.userLoginButton}>
            <Text style={styles.userLoginText}>USER LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pinLoginButton}>
            <Text style={styles.pinLoginText}>PIN LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pinContainer}>
          <Text style={styles.pinPrompt}>Enter personal PIN</Text>
          
          <View style={styles.pinDotsContainer}>
            <View style={styles.pinDot} />
            <View style={styles.pinDot} />
            <View style={styles.pinDot} />
            <View style={styles.pinDot} />
          </View>

          <View style={styles.keypad}>
            <View style={styles.keypadRow}>
              <TouchableOpacity style={styles.keypadButton}>
                <Text style={styles.keypadText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.keypadButton}>
                <Text style={styles.keypadText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.keypadButton}>
                <Text style={styles.keypadText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keypadRow}>
              <TouchableOpacity style={styles.keypadButton}>
                <Text style={styles.keypadText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.keypadButton}>
                <Text style={styles.keypadText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.keypadButton}>
                <Text style={styles.keypadText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keypadRow}>
              <TouchableOpacity style={styles.keypadButton}>
                <Text style={styles.keypadText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.keypadButton}>
                <Text style={styles.keypadText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.keypadButton}>
                <Text style={styles.keypadText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keypadRow}>
              <View style={styles.emptyButton} />
              <TouchableOpacity style={styles.keypadButton}>
                <Text style={styles.keypadText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.keypadButton}>
                <FontAwesomeIcon icon={faBackspace} style={styles.backspaceIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Restaurant Manager</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Explore new features!</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Tools</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c20',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    color: '#3b82f6',
    marginRight: 8,
  },
  infoText: {
    marginLeft: 8,
  },
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
    fontSize: 14,
    marginRight: 4,
  },
  helpIcon: {
    color: '#3b82f6',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  loginTypeContainer: {
    flexDirection: 'row',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 32,
  },
  userLoginButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'black',
  },
  pinLoginButton: {
    backgroundColor: '#3b63f5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#3b63f5',
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
  pinContainer: {
    backgroundColor: '#121417',
    borderRadius: 6,
    padding: 24,
    width: 280,
  },
  pinPrompt: {
    color: '#9ca3af',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  pinDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 24,
  },
  pinDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6b7280',
  },
  keypad: {
    gap: 12,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  keypadButton: {
    backgroundColor: '#2f3138',
    borderRadius: 6,
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyButton: {
    width: 72,
    height: 72,
  },
  keypadText: {
    color: 'white',
    fontSize: 18,
  },
  backspaceIcon: {
    color: 'white',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footerLink: {
    color: '#3b82f6',
    fontSize: 14,
  },
});

export default PinLoginScreen;