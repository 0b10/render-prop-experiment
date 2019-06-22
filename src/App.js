import React from "react";
import { RowContainer } from "./layouts";
import { Layout } from "./Layout";
import { Posts } from "./components";
import { themeStore, postsStore } from "./stores";
import { setTheme } from "./actions/theme";
import { postsModel } from "./model";

postsStore.setModel(
  postsModel,
  { postsReceived: "received" },
  { getPosts: postsModel.getPosts }
);

function App() {
  // FIXME: remove these statements
  window.setTheme = setTheme;
  window.postsModel = postsModel;

  // FIXME: change getPosts to loadPosts (also related behaviours)
  return (
    <Layout>
      <RowContainer wrap>
        <Posts
          getTheme={themeStore.getTheme}
          themeStore={themeStore}
          postsStore={postsStore}
          getPosts={postsStore.getPosts}
          loadPosts={postsStore.loadPosts}
          eventNames={{ themeChange: "change", postsUpdated: "update" }}
        />
      </RowContainer>
    </Layout>
  );
}

export default App;
