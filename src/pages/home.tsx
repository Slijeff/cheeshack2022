import { Link } from 'react-router-dom';
import { Text, Button } from '@mantine/core';
function Home() {
  return (
    <div className='App'>
      <Text>Home Page</Text>
      <Link to='/profile'>
        <Button>To Profile Page</Button>
      </Link>
    </div>
  );
}

export default Home;
