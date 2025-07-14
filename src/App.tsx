import { useState } from 'react';
import './App.css';
import Column from './Column/Column';
import AutoGrowingTextarea from './AutoGrowingTextarea/AutoGrowingTextarea';
import AddressList from './AddressList/AddressList';
import { MACAddress } from './MACAddress';

function App() {
  const [input, setInput] = useState("012345abcdef\ndeadbeef1337");
  const [upperCase, setUpperCase] = useState(false);
  const [delimiter, setDelimiter] = useState(":");
  const [delimiterSpacing, setDelimiterSpacing] = useState(2);

  const formatAddresses = (input: string, delimiter = ":", delimiterSpacing = 2) => {
    return input
      .split("\n")
      .map(raw => new MACAddress(raw).toString(delimiter, delimiterSpacing, upperCase))
  };

  const columns = [
    {
      title: ':',
      delimiter: ':',
    },
    {
      title: '-',
      delimiter: '-',
    },
    {
      title: 'none',
      delimiter: '',
    },
    {
      title: 'cisco',
      delimiter: '.',
      delimiterSpacing: 4
    },
    {
      title: 'custom',
      delimiter,
      delimiterSpacing
    }
  ];

  return (
    <div>
      <h1>MAC Address Formatter</h1>
      <div className="settings">
        <label>upper case</label>
        <input 
          type="checkbox" 
          checked={upperCase} 
          onChange={event => setUpperCase(event.target.checked)}
        ></input>
        <label>custom delimiter</label>
        <input 
          type='text' 
          value={delimiter} 
          onChange={event => setDelimiter(event.target.value)}
        ></input>
        <label>custom delimiter spacing</label>
        <input 
          type='number' 
          value={delimiterSpacing} 
          onChange={event => setDelimiterSpacing(parseInt(event.target.value))}
        ></input>
      </div>

      <div className='container'>
        <Column title={"input"}>
          <AutoGrowingTextarea
            text={input}
            onChange={setInput}
            placeholder='012345abcde
            01.23.45.6a.bc.de
            0123.456a.bcde
            01:23:45:6a:bc:de
            01:23:45:6A:BC:DE
            '
          ></AutoGrowingTextarea>
        </Column>
        {
          columns.map(column => (
            <Column title={column.title}>
              <AddressList addresses={formatAddresses(input, column.delimiter, column.delimiterSpacing)}></AddressList>
            </Column>
          ))
        }
      </div>
    </div>
  );
}

export default App;
