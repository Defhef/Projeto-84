import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image
} from "react-native";

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderItem = ({ item: post}) =>{
        return <PostCard post={post} navigation={this.props.navigation}/>;
    }
}