import React, { useState, useCallback, useEffect } from "react";
import { View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Dimensions } from 'react-native';

export default function Player({ route }) {
  const [playing, setPlaying] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { urlVideo } = route.params;

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  useEffect(() => {
    setPlaying(true);
  }, []);

  const show_alert = (e) => {
      e.preventDefault();
      Alert.alert(0);
  }

  return (
    <View>
      <YoutubePlayer
        height={windowHeight}
        width={windowWidth}
        play={playing}
        videoId={urlVideo}
        onChangeState={onStateChange}
        allowsFullscreenVideo={false}
        controls={false}
        forceAndroidAutoplay={true}
        onPress={() => show_alert()}
      />
    </View>
  );
}