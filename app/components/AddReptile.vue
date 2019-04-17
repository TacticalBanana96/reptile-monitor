<template>
  <Page>
    <ActionBar title="YOUR APP"></ActionBar>

    <StackLayout>
      <Label class="body m-20" :text="message" textWrap="true"></Label>
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
      message: "Please Enter Your Reptiles information"
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
