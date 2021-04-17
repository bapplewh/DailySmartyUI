import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component {
    handleFormSubmit = function({query}) {
        this.props.onSubmit(query);
    }

    renderInput(field) {
        return <input type="text" placeholder="&#xF002; Search DailySmarty" {...field.input} />
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className={`search-bar search-bar__${this.props.page}`} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="search-bar__wrapper">
                    <div className="search-bar__wrapper">
                        <Field name="query" component={this.renderInput} />
                        <p>Press return to search</p>
                    </div>
                </div>
            </form>
        );
    }
}

SearchBar = reduxForm({
    form: "searchbar"
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;