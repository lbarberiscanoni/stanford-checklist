import React, {Component} from 'react'
import ReactDOM from "react-dom";
import SearchInput from 'react-search-input'
import Configuration from "./configuration.json";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		}
		this.searchUpdated = this.searchUpdated.bind(this)
	}

	searchUpdated(e) {
		console.log(e);
		this.setState({
			searchTerm: e
		})
	}

	navigate(location) { 
		this.props.navigate(location)
	}


	render () {
		let components = []
		Configuration.map(
			(x) => { 
				let section = JSON.parse(x)["diagnosis_name"]
				if (section.toLowerCase().includes(this.state.searchTerm)) {
					components.push(<h5 onClick={ this.navigate.bind(this, section)} > { section } </h5>)
				}
			}
		)

		return (
			<div>
				<SearchInput onChange={this.searchUpdated.bind(this)} />
				{ components } 
		  	</div>
		)
	}

}

export default SearchBar
