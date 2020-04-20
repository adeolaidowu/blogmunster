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
      fileInputChanged: false,
    };
  }

  // handleChange = (e) => {
  //   this.setState(() => {
  //     const id = e.target.id;
  //     const value = e.target.value;
  //     return { id: value };
  //   });
  // };..

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
        imageLink: this.state.imageLink,
      });
    }
  };

  handleFileInput = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  // handleImageChange = (e) => {
  //   if (e.target.files[0]) {
  //     const image = e.target.files[0];
  //     this.setState(() => ({
  //       image,
  //     }));
  //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  // console.log('Upload is ' + progress + '% done');;
  //       },
  //       (error) => {
  //         console.log("error", error);
  //       },
  //       () => {
  //         storage
  //           .ref("images")
  //           .child(image.name)
  //           .getDownloadURL()
  //           .then((url) => {
  //             this.setState(() => ({
  //               imageLink: url,
  //             }));
  //             console.log("firebase url is", url);
  //           });
  //       }
  //     );
  //   }
  // };

  handleImageChange = (e) => {
    const image = e.target.files[0];
    this.setState(() => ({
      image,
    }));
    console.log(e.target.value);
  };

  handleImageUpload = () => {
    const uploadTask = storage
      .ref()
      .child(`images/${this.state.image.name}`)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
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
        <input
          type="file"
          id="imageInput"
          //hidden="hidden"
          onChange={this.handleImageChange}
        />
        <button type="button" onClick={this.handleFileInput}>
          Add Image
        </button>
        <button type="button" onClick={this.handleImageUpload}>
          Upload Image
        </button>
        <button>Post</button>
      </form>
    );
  }
}

export default PostForm;
