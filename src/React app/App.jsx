import React, {Component} from "react";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1 className="text-3xl font-bold underline">Hello World!</h1>
          <button className="border-solid border-4 hover:border-dotted rounded-md border-indigo-600 m-10 text-white text-3xl bg-sky-500 p-5">
            Subscribe
          </button>
        </div>
      </>
    );
  }
}

export default App;
