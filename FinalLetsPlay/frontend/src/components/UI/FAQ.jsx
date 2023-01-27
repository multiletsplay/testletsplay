import Accordion from 'react-bootstrap/Accordion';

function FAQ(props) {
  let bodies = document.getElementsByClassName('.accordion-body');
  function showBtn() {
    if(bodies.style.display === 'none'){
      bodies.style.display = 'block';
    }
  }
  return (
    <Accordion style={{marginBottom:'-80px'}} defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accordion'>
          <h5 onClick={showBtn}>{props.title}</h5>
          </Accordion.Header>
        <Accordion.Body>
        {props.content}
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default FAQ;