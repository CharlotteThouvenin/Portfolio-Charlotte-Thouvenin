

import Button from 'react-bootstrap/Button';

function ButtonExample({ Name, Icon }) {
  return (
    <Button disabled variant="secondary" className='m-1 fs-6'>
      <i className={Icon}></i> {Name}

      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default ButtonExample;



