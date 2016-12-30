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
                        <h2><a>完美(中国)有限公司 | PERFECT (CHINA) CO., LTD.</a></h2>
                        <h4>地址:江苏省南京市秦淮区柳州东路112号12栋222</h4>
                    </li>
                </ul>
            </div>
        )
    }
})

module.exports = Cutting