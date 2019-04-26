<template>
  <Page>
    <ActionBar :title="header"></ActionBar>

    <StackLayout>
      <h1 class="body m-20" :text="message" textWrap="true"></h1>
      <RadCalendar height="1000px"/>
      <Button class="btn btn-primary" text="Add" @tap="add"></Button>
      <Button class="btn btn-primary" text="Back" @tap="back"></Button>
    </StackLayout>
  </Page>
</template>

<script>
import Home from "./Home";
export default {
  data() {
    return {
      header: "Monitor",
      title: "Enter info for your reptile!"
    };
  },
  methods: {
    add() {},
    back() {
      this.$navigateTo(Home);
    }
  }
};
</script>
