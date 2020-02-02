import React, {useState} from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OutlineButton from '../../components/OutlineButton/OutlineButton.js';

import icon from '../../assets/images/icon.png';

const Home: () => React$Node = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logIn = () => {
    setLoggedIn(true);
  };

  const logOut = () => {
    setLoggedIn(false);
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0.0, 0.99]}
      colors={['#11998E', '#38ef7d']}
      style={styles.container}>
      <Image source={icon} style={styles.icon} />

      <Text style={styles.appName}>Physio-Space</Text>

      <OutlineButton content="Log In" method={logIn} />
      <OutlineButton content="Sign Up" method={() => {}} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '40%',
    height: undefined,
    aspectRatio: 1,
  },
  appName: {
    color: 'white',
    fontSize: 40,
    marginTop: 20,
    marginBottom: 40,
  },
});

export default Home;
