import { Header, Icon } from 'semantic-ui-react';

export default () => {
  return (
    <div className="header-div">
      <Header as='h1' icon className="App-header">
        <Icon name='globe' circular />
        <Header.Content>
          Want to learn how I was hosted?
        </Header.Content>
      </Header>
    </div>
  )
}
