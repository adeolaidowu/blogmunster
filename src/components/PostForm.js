import React, { Component } from "react";
import moment from "moment";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.post ? props.post.title : "",
      content: props.post ? props.post.content : "",
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      error: "",
    };
  }

  // handleChange = (e) => {
  //   this.setState(() => {
  //     const id = e.target.id;
  //     const value = e.target.value;
  //     return { id: value };
  //   });
  // };

  handleTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  handleContentChange = (e) => {
    const content = e.target.value;
    this.setState(() => ({ content }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.content) {
      this.setState(() => ({
        error: "Please provide title and content",
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        title: this.state.title,
        content: this.state.content,
        createdAt: this.state.createdAt.valueOf(),
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="Post title"
          id="title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          placeholder="Post content"
          id="content"
          value={this.state.content}
          onChange={this.handleContentChange}
        ></textarea>
        <button>Post</button>
      </form>
    );
  }
}

export default PostForm;
