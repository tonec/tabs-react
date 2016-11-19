import React, { Component, PropTypes } from 'react'
import { TabsMenu, Tab } from './'

import '../scss/tabs.scss'

class Tabs extends Component {

  constructor (props) {
    super(props)

    this.state = {
      activeTab: this.props.activeTab
    }
  }

  handleClick (e) {
    const targetTab = Number.parseInt(e.target.getAttribute('data-menu-item-id'))

    if (isNaN(targetTab)) return

    this.setState({ activeTab: targetTab })
  }

  renderTabsMenu (data, activeTab) {

    if (!data) return

    const menuItemArray = data.map((tab, index) => {
        return {
          index: index,
          title: tab.title
        }
    })
    return (
      <TabsMenu
        menuItems={menuItemArray}
        activeTab={activeTab}
      />
    )
  }

  renderTab (data, activeTab) {

    if (!data) return

    const contentArray = data.map((tab, index) => {
      return {
        index: index,
        content: tab.content
      }
    })
    const currentContent = contentArray.filter((item) => item.index === activeTab)[0]

    return (
      <Tab
        contentData={currentContent}
      />
    )
  }

  render () {
    const { data } = this.props

    return (
      <div className='tabs' onClick={this.handleClick.bind(this)}>
        {this.renderTabsMenu(data, this.state.activeTab)}
        {this.renderTab(data, this.state.activeTab)}
      </div>
    )
  }
}

Tabs.propTypes = {
  data: PropTypes.array,
  activeTab: PropTypes.number
}

Tabs.defaultProps = {
  activeTab: 0
}

export default Tabs
