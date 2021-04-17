import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";

import Logo from "./logo";
import SearchBar from "./search-bar";
import RecentPosts from "./recent-posts";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

class Home extends Component {
  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push("/results");
    });
}

  render() {
    return (
      <div className="home">
        <Logo />
        <SearchBar page="home" onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Home);