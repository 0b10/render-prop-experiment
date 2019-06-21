import { EventEmitter } from "events";
import faker from "faker";
// Stubs for now

class PostsModel extends EventEmitter {
  constructor() {
    super();
    this.getPosts = this.getPosts.bind(this);
  }

  async getPosts(num = 10) {
    const posts = Array.from({ length: num }, () => ({
      title: faker.lorem.words(),
      body: faker.lorem.sentences(),
      imgUrl:
        "https://www.wingsforkids.org/wp-content/uploads/cropped-placeholder.jpg",
      imgAltText: "A placeholder image",
      tags: Array.from({ length: Math.ceil(Math.random() * 5) }, () =>
        faker.lorem.word()
      )
    }));

    this.emit("received", posts);
  }
}

const postsModel = new PostsModel();
export { postsModel };
