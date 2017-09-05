import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { Page, PageHeader, PageContent, Row, Col } from '../../components'
import { getList } from '../../actions/listActions'

class List extends Component {
  componentWillMount() {
    this.props.getList()
  }

  render() {
    return (
      <Page>
        <PageHeader title={"List"} description={"Description"} />
        <PageContent>
          <Row>
            <Col size={12}>
              <ul>
                {this.props.list.map(item => (
                  <li key={item.id}><Link to={`/details/${item.id}`}>{item.name}</Link></li>
                ))}
              </ul>
            </Col>
          </Row>
        </PageContent>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  list: state.ListReducer.list
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)