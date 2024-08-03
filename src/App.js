import { Input } from './components/input';
import { Container, Content, Row } from "./styles";
import { Button } from './components/button/styles';
import { useState } from 'react';



export const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const [fistNumber, setFirstNumber] = useState('0');

  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('0')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => ` ${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if (fistNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')

    } else {
      const sum = Number(fistNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')

    }
  }

  const handleMinusNumbers = () => {
    if (fistNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')

    } else {
      const sum = Number(fistNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')

    }
  }
  const handleMultNumbers = () => {
    if (fistNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')

    } else {
      const sum = Number(fistNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')

    }
  }
  const handleDivNumbers = () => {
    if (fistNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')

    } else {
      const sum = Number(fistNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')

    }
  }


  const handleEquals = () => {
    if (fistNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()

          break;

        case '-':

          handleMinusNumbers()

          break;


        case '*':
          handleMultNumbers()

          break;

        case '/':
          handleDivNumbers()
          break;

        default:
          break;
      }

    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="X" />
          <Button label="/" onClick={handleDivNumbers} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="*" onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}


