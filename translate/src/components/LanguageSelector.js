import React from 'react'

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <span style={{ marginLeft: '5px' }}>
          <i className="flag us" 
            onClick={() => this.props.onLanguageChange('english')} />
          <i className="flag br" 
            onClick={() => this.props.onLanguageChange('portuguese')} />
        </span>
      </div>
    )
  }
}

export default LanguageSelector
