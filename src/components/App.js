import Header from './Header';
import { Icon } from 'semantic-ui-react';
import How from './How';

const App = () => {
  return (
    <div className="App">
      <Header />

      <hr />

      <How
        img={"https://media.giphy.com/media/BpGWitbFZflfSUYuZ9/giphy.gif"}
          text={'Click me :)'}
            link={true}
       />

       <hr />

       <p align="center" style={{ padding: '50px' }}>
          <a href="https://shivangdave.com" target="_blank">
            <Icon name='react' circular size={'big'} />
          </a>

          <a href="https://github.com/shivangdave" target="_blank">
            <Icon name='github' circular size={'big'} />
          </a>

          <a href="https://twitter.com/@___Shivang___" target="_blank">
            <Icon name='twitter' circular size={'big'} />
          </a>
       </p>

    </div>
  );
}

export default App;
