import React from 'react'
import {connect} from 'react-redux'
import DocumentTitle from 'react-document-title'
import {push} from 'redux-router'
import styles from './ManageContainer.less'
import Header from '../components/Header'
import NewShit from '../components/NewShit'
import HotShit from '../components/HotShit'

const ManageContainer = React.createClass({
	getInitialState:function(){
		return{
			
		}
	},
	render: function() {
		return (
				<DocumentTitle title="cnmb">
					<div className={styles.root}>
						<Header></Header>
						<div className='content'>
							<NewShit></NewShit>
							<HotShit></HotShit>
						</div>
					</div>
				</DocumentTitle>
		)
	}
})

function mapStateToProps(state) {
	return {
		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageContainer)