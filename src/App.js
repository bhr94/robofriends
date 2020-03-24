import React , {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
        componentDidMount(){
            // in this method we can use fetch() method which is used to get api with url
            // then we can set the result to the robots. instead of taking robots' detaile like
            // name and id from the local file like robots.js we can take it from an external api 
            // fetch() method
        }        
        
        onSearchChange = (event) => {
            this.setState({searchfield: event.target.value})
        }
        render(){
            const filteredRobots = this.state.robots.filter(robots => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
            return (
                <div className ="tc">
                    <h1>RoboFriends</h1>
                     <SearchBox searchChange = {this.onSearchChange}/>
                     <Scroll>
                     <CardList robots = {filteredRobots}/>
                     </Scroll>
                </div>
            );
        }
    }
export default App;