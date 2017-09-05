import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { Page, PageHeader, PageContent, Row, Col } from '../../components'
import { getDetails } from '../../actions/detailsActions'

class Details extends Component {
  componentWillMount() {
    const detailsId = this.props.match.params.id
    this.props.getDetails(detailsId)
  }

  render() {
    return (
      <Page>
        <PageHeader title={"Details"} description={"Description"} />
        <PageContent>
          <Row>
            <Col size={12}>
              <p>Id: {this.props.details.id}</p>
              <p>Name: {this.props.details.name}</p>
              <p>Details: {this.props.details.detail}</p>

              <Link to='/'>Voltar</Link>
            </Col>
          </Row>
        </PageContent>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  details: state.DetailsReducer.details
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getDetails }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Details)