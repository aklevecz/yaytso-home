import React, { MouseEvent, useState } from "react";
import styles from "./Puzzle.module.css";

const baseAnswer = ["5-3", "4-3", "3-3", "2-4", "2-2"];
const y1 = ["1-2", "1-4"];
const y2 = ["1-5", "1-1"];

const dim = [1, 2, 3, 4, 5];

const checkAnswer = (items: string[]) => {
  let baseAnswerComplete = true;
  baseAnswer.forEach((answer) => {
    if (!items.includes(answer)) {
      baseAnswerComplete = false;
    }
  });
  let y1Complete = true;
  y1.forEach((answer) => {
    if (!items.includes(answer)) {
      y1Complete = false;
    }
  });
  let y2Complete = true;
  y2.forEach((answer) => {
    if (!items.includes(answer)) {
      y2Complete = false;
    }
  });
  return { baseAnswerComplete, y1Complete, y2Complete };
};

export default function Puzzle({ triggerSolve }: { triggerSolve: () => void }) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const addSelection = (event: MouseEvent<HTMLButtonElement>) => {
    const newItem = event.currentTarget.id;
    let newItems = [];
    if (selectedItems.includes(newItem)) {
      newItems = selectedItems.filter((item) => item !== newItem);
    } else {
      newItems = [...selectedItems, newItem];
    }
    const { baseAnswerComplete, y1Complete, y2Complete } =
      checkAnswer(newItems);

    if (baseAnswerComplete && (y1Complete || y2Complete)) {
      triggerSolve();
    }
    setSelectedItems(newItems);
  };
  return (
    <div style={{ padding: 10 }}>
      {dim.map((row) => {
        return (
          <div key={row} className={styles.row}>
            {dim.map((col) => {
              const id = `${row}-${col}`;
              return (
                <button
                  key={id}
                  onClick={addSelection}
                  id={id}
                  className={styles.item}
                  style={{
                    background: selectedItems.includes(id) ? "red" : "white",
                  }}
                ></button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
