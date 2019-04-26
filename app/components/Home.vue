<template>
  <Page>
    <!-- <ActionBar title="Monitor"></ActionBar> -->
    <ActionBar backgroundColor="#075e54" flat="true">
      <StackLayout orientation="vertical" width="100%" height="100%" backgroundColor="#075e54">
        <!-- <Image src="~/images/native_logo.png" class="action-image"></Image> -->
        <Label text="Monitor" class="action-label"></Label>
        <StackLayout backgroundColor="#075e54">
          <StackLayout orientation="horizontal" marginTop="5" marginBottom="5">
            <TextField
              backgroundColor="white"
              paddingLeft="20"
              borderRadius="20"
              v-model="textFieldValue"
              width="80%"
              height="40"
              fontSize="14"
              hint="Search"
            ></TextField>
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </ActionBar>
    <TabView androidTabsPosition="bottom">
      <!--//TODO: is there a vue source for this? -->
      <TabViewItem id="parent4" title="Home">
        <Label text="Label in Tab 1"/>
      </TabViewItem>
      <TabViewItem title="Profile">
        <Label text="Label in Tab 2"/>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import AddReptile from "./AddReptile";

Vue.use(RadSideDrawer);

export default {
  methods: {
    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.closeDrawer();
    },
    addNewReptile() {
      this.$navigateTo(AddReptile);
    }
  },

  data() {
    return {
      mainContentText:
        "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component" +
        " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer."
    };
  }
};
</script>


<style scoped>
ActionBar {
  background-color: transparent;
}
.action-image {
  width: 50;
  height: 50;
  vertical-align: center;
}
.album-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}
.action-label {
  color: white;
  font-size: 24;
  font-weight: bold;
  text-align: center;
}
.description-label {
  margin-bottom: 15;
}
</style>
