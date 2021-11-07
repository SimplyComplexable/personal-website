import { doTheMath } from '@components/Calculator/doTheMath';
import { classname } from '@lib/classname';
import React from 'react';
import styles from './index.module.css';

export interface CalculatorProps {}

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '-'];
const operationsArray = ['/', 'x', '+', '-'];

const Calculator = ({}: CalculatorProps) => {
  const historyContainer = React.useRef<HTMLDivElement>(null);
  const [inputStr, setInputStr] = React.useState('');
  const [formulaArr, setFormulaArr] = React.useState([]);

  const handleNumClick = React.useCallback(
    event => {
      const { value } = event.currentTarget?.dataset || {};
      if (value) {
        setInputStr(curr => `${curr}${value}`);
      }
    },
    [setInputStr],
  );

  const handleOperationClick = React.useCallback(
    event => {
      const { operation } = event.currentTarget?.dataset || {};
      if (operation) {
        setInputStr(currInputStr => {
          setFormulaArr(curr => {
            const lastItem = curr[curr.length - 1] || {};
            if (currInputStr === '') {
              return [...curr.slice(0, -1), { ...lastItem, operation }];
            }
            return [
              ...curr.slice(0, -1),
              { ...lastItem, value: currInputStr },
              { operation, value: '' },
            ];
          });
          return '';
        });
      }
    },
    [setFormulaArr, setInputStr],
  );

  const handleEqualsClick = React.useCallback(() => {
    const operation = '=';
    setInputStr(currInputStr => {
      if (currInputStr !== '') {
        setFormulaArr(curr => {
          const lastItem = curr[curr.length - 1] || {};
          const newFormulaArray = [
            ...curr.slice(0, -1),
            { ...lastItem, value: currInputStr },
          ];
          return [
            ...newFormulaArray,
            // @ts-ignore
            { operation, value: doTheMath(newFormulaArray.slice(-2)) },
            { value: '' },
          ];
        });
      }
      return '';
    });
  }, [setFormulaArr, setInputStr]);

  const [operation, history] = React.useMemo(() => {
    if (!formulaArr.length) {
      return [null, []];
    }
    return [
      formulaArr[formulaArr.length - 1].operation,
      formulaArr.slice(0, -1),
    ];
  }, [formulaArr]);

  React.useLayoutEffect(() => {
    if (historyContainer.current) {
      historyContainer.current!.scrollTop =
        historyContainer.current.scrollHeight;
    }
  }, [historyContainer, formulaArr]);

  console.log(formulaArr, operation, history);

  return (
    <section className={styles.calcContainer}>
      <div className={styles.topContainer}>
        <div className={styles.historyContainer} ref={historyContainer}>
          <ul className={styles.history} aria-label="results">
            {history.map(item => (
              <li
                className={classname(
                  item.operation && styles.operation,
                  item.operation === '=' && styles.result,
                )}
              >
                {item.operation && <span>{item.operation}</span>}
                {item.value}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.inputContainer}>
          {operation && <span aria-label="operation">{operation}</span>}
          <input value={inputStr} className={styles.input} />
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <ul className={styles.numList}>
          {numArray.map(num => (
            <li>
              <button
                className="bg-gray-400 px-5 py-2.5"
                data-value={num}
                onClick={handleNumClick}
              >
                <h3>{num}</h3>
              </button>
            </li>
          ))}
          <li>
            <button
              className="bg-gray-400 px-5 py-2.5"
              data-operation="="
              onClick={handleEqualsClick}
            >
              <h3>=</h3>
            </button>
          </li>
        </ul>
        <ul className={styles.operationList}>
          {operationsArray.map(operation => (
            <li>
              <button
                className="bg-gray-400 px-5 py-2.5"
                data-operation={operation}
                onClick={handleOperationClick}
              >
                <h3>{operation}</h3>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Calculator;
