import styled from "styled-components";
import { useState } from "react";

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }

  return (
    <>
    <SelectNum>
        <div className="flex">
            <p className="err">{error}</p>
            <div>
                {arrNumber.map((value, i) => (
                    <Box 
                    isSelected = {value == selectedNumber}
                    key={i} 
                    onClick={() => numberSelectorHandler(value)}
                    >{value}</Box>      // --> "key" is used as unique id
                ))}
            </div>
        </div>
        <p className="text">Select Number</p>
    </SelectNum>
    {/* <div className={styles.container1}>
        <div className={styles.container2}>
            <div className={styles.score}>
                <div className={styles.displayScore}>0</div>
                <p>Total Score</p>
            </div>
            <div className={styles.selectNum}>
                <div className={styles.select_btn}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
                <p>Select Number</p>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default NumberSelector

const SelectNum = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 30px;

    .flex{
        display: flex;
        flex-direction: column;
        align-items: end;
        div{
            display: flex;
            gap: 24px;
        }
    }

    .text{
        font-size: 24px;
        font-weight: 700;
    }

    .err{
        color: red;
        height: 24px;
    }
`

const Box = styled.button`
    font-size: 24px;
    font-weight: 700;
    height: 72px;
    width: 72px;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
    cursor: pointer;
`