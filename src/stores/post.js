import { EventEmitter } from "events";

class PostStore extends EventEmitter {
  constructor() {
    super();

    this.posts = [];
    this.buffer = [];
    this.model = null;

    this.getPosts = this.getPosts.bind(this);
    this.fillBuffer = this.fillBuffer.bind(this);
    this.setModel = this.setModel.bind(this);
  }

  getPosts() {
    this.posts = [...this.posts, ...this.buffer];
    this.buffer = []; // Explicitly empty buffer, incase it's requested before async fetch is finished.
    this.model.getPosts(); // This emits an event with posts, where fillBuffer is the listener.
    return this.posts;
  }

  fillBuffer(posts) {
    this.buffer = posts;
  }

  setModel(model, eventNames, methods) {
    // Decouple from the model's interface
    const { getPosts } = methods;
    this.model = {
      getPosts
    };
    model.on(eventNames.postsReceived, this.fillBuffer);
    this.model.getPosts(); // get Some initial posts
  }
}

const postStore = new PostStore();
export { postStore };
