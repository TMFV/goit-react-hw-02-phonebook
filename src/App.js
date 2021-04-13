import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function toUp(string) {
  return string.toUpperCase();
}

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    let arrayCont = [
      ...this.state.contacts,
      { id: uuidv4(), name: [data.name], number: data.number },
    ];
    this.setState({ ...this.state, contacts: arrayCont });
    this.filtredList(this.state.contacts, this.state.filter);
    arrayCont = [];
  };

  elDelete = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  deleteContactFromContactList = idContact => {
    let newArrAfterDel = this.elDelete(this.state.contacts, idContact);
    this.setState({
      ...this.state,
      contacts: [...newArrAfterDel],
    });
    this.filtredList(this.state.contacts, this.state.filter);
  };

  setFilterToState = filterData => {
    this.setState({ ...this.state, filter: `${filterData}` });
  };
  toCase = string => `${string.toUpperCase()}`;

  filtredList = (state, filter) => {
    return state.filter(cont => toUp(cont.name).includes(filter));
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.formSubmitHandler} />

        <Filter setFilterToState={this.setFilterToState} />
        <ContactList
          contacts={this.filtredList(this.state.contacts, this.state.filter)}
          del={this.deleteContactFromContactList}
        />
      </div>
    );
  }
}

export default App;
