import React, { Component } from 'react';

class Search extends Component {


        filterUpdate() {
                const val = this.myValue.value
                this.props.filterUpdate(val)
        }
        render() {

                console.log('FilterText value', this.props.filterText)
                return (
                        <div className="section1">
                                <div className="searchfield">
                                        <form>
                                                <input
                                                        className="inputfield"
                                                        type="text"
                                                        ref={(value) => { this.myValue = value }}
                                                        placeholder="Search..."
                                                        // Callback function
                                                        onChange={this.filterUpdate.bind(this)}
                                                />
                                        </form>
                                </div>
                        </div>
                )
        }
}

export default Search;