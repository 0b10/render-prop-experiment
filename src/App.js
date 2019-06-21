import React from "react";
import { Layout, RowContainer } from "./layouts";
import { Posts } from "./components";
import { themeStore, postStore } from "./stores";
import { setTheme } from "./actions/theme";
import { postsModel } from "./model";

postStore.setModel(
  postsModel,
  { postsReceived: "received" },
  { getPosts: postsModel.getPosts }
);

function App() {
  // FIXME: remove these statements
  window.setTheme = setTheme;
  window.postsModel = postsModel;

  return (
    <Layout>
      <RowContainer wrap>
        <Posts
          getTheme={themeStore.getTheme}
          themeStore={themeStore}
          postStore={postStore}
          getPosts={postStore.getPosts}
          eventNames={{ themeChange: "change", postsUpdated: "update" }}
        />
      </RowContainer>
    </Layout>
  );
}

export default App;
