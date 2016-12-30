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
                <a>创建新屎</a>
                <div className='searchFrame' onMouseEnter={this.handleSearchMoudeEnter}>
                    <i className="iconfont icon-icon-test"></i>
                    <input type='text' ref='searchInput' placeholder='关键词搜索屎'/>
                </div>
            </div>
        )
    }
})

module.exports = Cutting