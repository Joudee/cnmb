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
                <h1>新屎</h1>
                <ul>
                    <li>
                        <b>1</b>
                        <a>江苏上米科技有限公司</a>
                    </li>
                    <li>
                        <b>2</b>
                        <a>江苏苏美达集团有限公司</a>
                    </li>
                    <li>
                        <b>3</b>
                        <a>神华集团有限责任公司</a>
                    </li>
                    <li>
                        <b>4</b>
                        <a>完美(中国)有限公司 | PERFECT (CHINA) CO., LTD.</a>
                    </li>
                    <li>
                        <b>5</b>
                        <a>中兴通讯股份有限公司</a>
                    </li>
                </ul>
            </div>
        )
    }
})

module.exports = Cutting