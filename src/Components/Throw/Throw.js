import React, { useState } from "react";
import { Form } from "react-final-form";
import { SecondPhase, FirstPhase } from "./Phases";

const Throw = (props) => {
  let [score, setScore] = useState([]);
  let id = 0;
  let totalArr = [0];
  let strike = false;

  let onSubmit = (data) => {
    let newScore = [...score, data];
    setScore((score = newScore));
    
  };
  let validate = (e) => {
    const errors = {};
    if (e.throw1 && e.throw1 > 10) {
      errors.throw1 = "чуєш, жулік, не воруй. там вього 10 кеглів";
    }
    if (e.throw2 && e.throw2 > 10) {
      errors.throw1 = "чуєш, жулік, не воруй. там вього 10 кеглів";
    }
    if (e.throw3 && e.throw3 > 10) {
      errors.throw3 = "чуєш, жулік, не воруй. там вього 10 кеглів";
    }
    if (e.throw1 && e.throw1 < 0) {
      errors.throw1 = "в тебе що, шарік твій, кеглі назад пороставляв?";
    }
    let sumOfThrows = Number(e.throw1) + Number(e.throw2);
    if (id < 9 && sumOfThrows > 10) {
      errors.throw2 = "чуєш, жулік, не воруй. там вього 10 кеглів";
    }
    if (id === 10) {
      errors.throw3 = "готово";
    }
    return errors;
  };

  let results = score.map(function (item) {
    id++;
    item.throw3 = item.throw3 || null;
    let throwsSum = +item.throw1 + +item.throw2 + +item.throw3;
    totalArr.push(throwsSum);

    if (
      id === 10 &&
      item.throw3 === null &&
      (+item.throw1 === 10 || throwsSum === 10)
    ) {
      strike = true;
      id--;
      return;
    } else {
      return (
        <tr>
          <td>{id}</td>
          <td>{item.throw1}</td>
          <td>{item.throw2}</td>
          <td>{item.throw3}</td>
          <td>{throwsSum}</td>
        </tr>
      );
    }
  });

  let totalSum = totalArr.reduce((sum, current) => sum + current);

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Жбурляння</h2>
            {strike ? <SecondPhase /> : <FirstPhase />}

            <button type="submit">Submit</button>
          </form>
        )}
      />
      <table>
        <thead>
          <tr>
            <td>Фрейм.</td>
            <td>Перше жбурляння.</td>
            <td>Друге жбурляння.</td>
            <td>Третє жбурляння.</td>
            <td>Сума</td>
          </tr>
        </thead>
        <tbody>
          {results}
          <tr>
            <td>{"Загальний результат"}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{totalSum}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Throw;
