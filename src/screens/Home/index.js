import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
// import { removeAuth } from '../../actions/authAction';
import Reactotron from 'reactotron-react-native'

class Home extends React.Component {

  componentDidMount() {
    Reactotron.log('hello rendering world')
  }
  render() {
    return (
      <View>
        <Text>Ceee</Text>
        <TouchableOpacity
        // onPress={() => this.props.dispatchRemoveAuth()}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // dispatchRemoveAuth: () => dispatch(removeAuth()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
