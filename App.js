import React, { useState, useEffect, useCallback } from "react";
import { Platform, StatusBar, Image } from "react-native";
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { Images, products, materialTheme } from "./constants/";
import Screens from "./navigation/Screens";
import * as ScreenOrientation from 'expo-screen-orientation';

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

// cache app images
const assetImages = [
  Images.Pro,
  Images.Profile,
  Images.Avatar,
  Images.Onboarding,
];

// cache product images
products.map((product) => assetImages.push(product.image));

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        //Load Resources
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );
        await _loadResourcesAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const _loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <GalioProvider theme={materialTheme}>
        <Block flex>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <Screens />
        </Block>
      </GalioProvider>
    </NavigationContainer>
  );
}
