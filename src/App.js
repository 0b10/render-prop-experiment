import React from "react";
import { Layout, RowContainer } from "./layouts";
import { ContentItem } from "./components";
import { themeStore } from "./stores";
import { setTheme as setTheme_ } from "./actions/theme";

function App() {
  window.setTheme = setTheme_;
  return (
    <Layout>
      <RowContainer wrap>
        <ContentItem
          getTheme={themeStore.getTheme}
          themeStore={themeStore}
          eventNames={{ themeChange: "change" }}
          content={{
            title: "a title",
            body:
              "Existuje mnoho variant s pasážemi Lorem Ipsum, nicméně valná většina trpí neduhy v podobě snahy o vtipný text či použití naprosto náhodných slov, což nevypadá zrovna uvěřitelně. Pokud plánujete použít pasáž z Lorem Ipsum, měli byste mít jistotu, že v textu nebude nic, co by jej mohlo narušovat. Všechny generátory Lorem Ipsum na internetu mají tendenci opakovat kusy textu podle potřeby, díky čemuž je tento prvním pravým generátorem svého druhu. Používá totiž slovník více jak 200 latinských slov, která jsou kombinována do vět tak, aby text vypadal rozumně. Vzniklý text je potom prostý opakujících se pasáží, vloženého humoru nebo zkomolenin vzniklých z čísel a jiných znaků.",
            imgUrl:
              "https://www.wingsforkids.org/wp-content/uploads/cropped-placeholder.jpg",
            imgAltText: "A placeholder image",
            tags: ["tagOne", "tagTwo", "tagThree"]
          }}
        />
        <ContentItem
          getTheme={themeStore.getTheme}
          themeStore={themeStore}
          eventNames={{ themeChange: "change" }}
          content={{
            title: "a title",
            body:
              "Existuje mnoho variant s pasážemi Lorem Ipsum, nicméně valná většina trpí neduhy v podobě snahy o vtipný text či použití naprosto náhodných slov, což nevypadá zrovna uvěřitelně. Pokud plánujete použít pasáž z Lorem Ipsum, měli byste mít jistotu, že v textu nebude nic, co by jej mohlo narušovat. Všechny generátory Lorem Ipsum na internetu mají tendenci opakovat kusy textu podle potřeby, díky čemuž je tento prvním pravým generátorem svého druhu. Používá totiž slovník více jak 200 latinských slov, která jsou kombinována do vět tak, aby text vypadal rozumně. Vzniklý text je potom prostý opakujících se pasáží, vloženého humoru nebo zkomolenin vzniklých z čísel a jiných znaků.",
            imgUrl:
              "https://www.wingsforkids.org/wp-content/uploads/cropped-placeholder.jpg",
            imgAltText: "A placeholder image",
            tags: ["tagOne", "tagTwo", "tagThree"]
          }}
        />
        <ContentItem
          getTheme={themeStore.getTheme}
          themeStore={themeStore}
          eventNames={{ themeChange: "change" }}
          content={{
            title: "a title",
            body:
              "Existuje mnoho variant s pasážemi Lorem Ipsum, nicméně valná většina trpí neduhy v podobě snahy o vtipný text či použití naprosto náhodných slov, což nevypadá zrovna uvěřitelně. Pokud plánujete použít pasáž z Lorem Ipsum, měli byste mít jistotu, že v textu nebude nic, co by jej mohlo narušovat. Všechny generátory Lorem Ipsum na internetu mají tendenci opakovat kusy textu podle potřeby, díky čemuž je tento prvním pravým generátorem svého druhu. Používá totiž slovník více jak 200 latinských slov, která jsou kombinována do vět tak, aby text vypadal rozumně. Vzniklý text je potom prostý opakujících se pasáží, vloženého humoru nebo zkomolenin vzniklých z čísel a jiných znaků.",
            imgUrl:
              "https://www.wingsforkids.org/wp-content/uploads/cropped-placeholder.jpg",
            imgAltText: "A placeholder image",
            tags: ["tagOne", "tagTwo", "tagThree"]
          }}
        />
      </RowContainer>
    </Layout>
  );
}

export default App;
