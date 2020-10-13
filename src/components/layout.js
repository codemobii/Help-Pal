import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, Modal, Portal, Text } from "react-native-paper";
import TopNavigator from "../routes/top_navigator";
import ErrorScreen from "./error_screen";
import NothingFound from "./nothing_found";

export default function Layout({
  children,
  title = "Report",
  back,
  navigation,
  loading,
  nothing_found = false,
  error = false,
  refreshKey = null,
}) {
  return (
    <>
      <TopNavigator title={title} back={back} navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        {children}
        {nothing_found ? <NothingFound navigation={navigation} /> : null}
        {error ? (
          <ErrorScreen onpress={refreshKey} navigation={navigation} />
        ) : null}
      </ScrollView>
      <Portal>
        <Modal visible={loading}>
          <ActivityIndicator animating={true} color="#5c969e" />
        </Modal>
      </Portal>
    </>
  );
}
