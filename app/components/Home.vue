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
    <StackLayout orientation="vertical" width="100%" height="100%">
      <Button text="Add New Reptile" @tap="addNewReptile"/>
      <GridLayout>
        <ListView
          class="list-group"
          separatorColor="transparent"
          for="todo in todos"
          @itemTap="onItemTap"
          style="height:75%"
          :key="index"
        >
          <v-template>
            <Label :text="todo" class="list-group-item-heading" textWrap="true"/>
          </v-template>
        </ListView>
      </GridLayout>
      <!-- <ListView class="list-group" for="item on items" @itemTap="onItemTap" style="height:75%">
        <v-template>
      <item :item="item.name" @clicked="showItem(item)"/>-->
      <!-- </v-template>
      </ListView>-->
      <!-- </GridLayout> -->

      <!-- <v-template>
          <Label :text="reptile.name" class="list-group-item-heading" textWrap="true"/>
        </v-template>
      </ListView>-->
    </StackLayout>
  </Page>
</template>

<script>
export default {
  methods: {
    onItemTap: function(args) {
      console.log("Item with index: " + args.index + " tapped");
    },
    addNewReptile() {},
    onButtonTap() {
      if (this.textFieldValue === "") return; // Prevents users from entering an empty string.
      console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
      this.todos.unshift({ name: this.textFieldValue }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen.
      this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
    }
  },

  data() {
    return {
      todos: [
        {
          name: "Manila Ultimate Tombstone Burger",
          cover: "~/assets/images/food/burger640.jpg",
          images: [
            { src: "~/app/images/no_icon.jpg" },
            { src: "~/app/images/no_icon.jpg" },
            { src: "~/app/images/no_icon.jpg" },
            { src: "~/app/images/no_icon.jpg" },
            { src: "~/app/images/no_icon.jpg" },
            { src: "~/app/images/no_icon.jpg" }
          ],
          category: "Burger",
          categoryTag: "#2D9CDB",
          price: "300.00",
          likes: 987,
          isLike: false,
          isFavorite: true,
          comments: 13,
          rating: "4.5",
          description: "a"
        },
        {
          name: "Quezon Chocolate Marble Pancake",
          cover: "~/assets/images/food/pancake640.jpg",
          images: [
            { src: "~/app/images/no_icon.jpg" },
            { src: "~/app/images/no_icon.jpg" },
            { src: "~/app/images/no_icon.jpg" },
            { src: "~/app/images/no_icon.jpg" },
            { src: "~/app/images/no_icon.jpg" },
            { src: "~/app/images/no_icon.jpg" }
          ],
          category: "Pancake",
          categoryTag: "#e4ce0d",
          price: "230.00",
          likes: 891,
          isLike: true,
          isFavorite: true,
          comments: 7,
          rating: "4.0",
          description: "a"
        }
      ],
      textFieldValue: ""
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
