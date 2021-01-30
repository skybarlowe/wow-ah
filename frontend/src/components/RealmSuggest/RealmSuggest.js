import React from "react";
import Autosuggest from "react-autosuggest";
import realmList from "/Users/adribarlowe/Documents/GitHub/wow-ah/frontend/src/realmList.json";
import "/Users/adribarlowe/Documents/GitHub/wow-ah/frontend/src/RealmSugget.css";

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : realmList.filter(
        (realm) => realm.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

class RealmSuggest extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Search realmlist",
      value,
      onChange: this.onChange,
    };

    return (
      <nav className="navbar-nav navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav m-2">
          <li class="nav-item">
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default RealmSuggest;
