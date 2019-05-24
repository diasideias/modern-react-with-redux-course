import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class App extends React.Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container" >
        <div>
          Select a language:
          <span style={{ marginLeft: '5px' }}>
            <i className="flag us" onClick={() => this.onLanguageChange('english')} />
            <i className="flag br" onClick={() => this.onLanguageChange('portuguese')} />
          </span>
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <div style={{ marginTop: '15px' }}>
              <UserCreate />
            </div>
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App