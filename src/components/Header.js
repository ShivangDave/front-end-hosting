import { Header, Icon } from 'semantic-ui-react';

export default () => {
  return (
    <div className="header-div">
      <Header as='h1' icon className="App-header">
        <Icon name='github' circular />
        <Header.Content>
          Let's host this app!
        </Header.Content>
      </Header>
    </div>
  )
}
