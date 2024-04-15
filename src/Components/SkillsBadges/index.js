

import Button from 'react-bootstrap/Button';

function ButtonExample({ Name, Icon }) {
  return (
    <Button variant="secondary m-2">
      <i className={Icon}></i> {Name}

      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default ButtonExample;



