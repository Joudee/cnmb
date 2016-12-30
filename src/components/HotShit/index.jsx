import React from 'react'
import styles from './index.less'

var Cutting = React.createClass({
    getInitialState:function(){
        return{
            
        }
    },
    handleSearchMoudeEnter:function(e){
        this.refs.searchInput.focus();
    },
    render: function () {
        return (
            <div className={styles.root}>
                <h1>热门屎</h1>
                <ul>
                    <li>
                        <h6>创建时间:2016.10.10 12:00</h6>
                    </li>
                </ul>
            </div>
        )
    }
})

module.exports = Cutting