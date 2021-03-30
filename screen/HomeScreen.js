import React from 'react';
import { SearchBar} from 'react-native-elements';
//import {db,auth} from '../FireBase';
//db.ref().push("Shanu");

 class HomeScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {  
    const { search } = this.state;
    
    return (
        
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      
      
      ) ;
  }
}

export default HomeScreen ;
