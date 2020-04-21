import React, { Component } from "react";
import moment from "moment";
import { storage } from "../firebase/firebase";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.post ? props.post.title : "",
      content: props.post ? props.post.content : "",
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      image: null,
      imageLink: props.post ? props.post.imageLink : "",
      error: "",
      uploadProgress: props.post ? props.post.imageLink : "",
      fileInputChanged: false,
    };
  }

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
        error: "Please provide title and content*",
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        title: this.state.title,
        content: this.state.content,
        createdAt: this.state.createdAt.valueOf(),
        imageLink: this.state.imageLink,
      });
    }
  };

  handleFileInput = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  handleImageChange = (e) => {
    const image = e.target.files[0];
    this.setState(() => ({
      image,
      uploadProgress: "",
    }));
    const uploadTask = storage.ref().child(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        if (progress === "100") {
          this.setState(() => ({
            uploadProgress: "done",
          }));
        }
      },
      (error) => {
        console.log("error", error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.setState(() => ({
            imageLink: downloadURL,
          }));
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  render() {
    let imageText;
    this.props.post && this.props.post.imageLink
      ? (imageText = "Change Image")
      : (imageText = "Add Image");
    return (
      <form onSubmit={this.handleSubmit} className="form">
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <div className="form-group">
          <label htmlFor="title">Post Title*</label>
          <input
            type="text"
            placeholder="Post title"
            id="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Post content*</label>
          <textarea
            className="form-control"
            placeholder="Post content"
            id="content"
            value={this.state.content}
            onChange={this.handleContentChange}
          ></textarea>
        </div>
        <input
          type="file"
          id="imageInput"
          hidden="hidden"
          onChange={this.handleImageChange}
        />
        <button
          className="button btn-secondary"
          type="button"
          onClick={this.handleFileInput}
        >
          {imageText}
        </button>
        <button className="button btn-primary">Post</button>
      </form>
    );
  }
}

export default PostForm;
