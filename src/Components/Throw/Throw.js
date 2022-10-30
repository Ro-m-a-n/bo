import React, { useState } from "react";
import { Form } from "react-final-form";
import { SecondPhase, FirstPhase } from "./Phases";

const Throw = (props) => {
  let [score, setScore] = useState([]);
  let id = 0;
  let totalArr = [0];
  let extraFrame = false;
  let finish = false;

  let onSubmit = (data) => {
    let strike = (data) => {
      let result = false;
      if (+data.throw1 === 10) {
        result = true;
      }
      return result;
    };
    let spare = (data) => {
      let result = false;
      if (+data.throw1 < 10 && +data.throw1 + +data.throw2 === 10) {
        result = true;
      }
      return result;
    };
    let strikeBonus = 0;
    let spareBonus = 0;
    if (score.length > 0 && score[score.length - 1].strike === true) {
      setScore(
        (score[score.length - 1].strikeBonus =
          +score[score.length - 1].strikeBonus + +data.throw1 + +data.throw2)
      );
    }
    if (
      score.length > 1 &&
      score[score.length - 2].strike === true &&
      +score[score.length - 1].throw2 === 0
    ) {
      setScore(
        (score[score.length - 2].strikeBonus =
          +score[score.length - 2].strikeBonus + +data.throw1)
      );
    }
    if (score.length > 0 && score[score.length - 1].spare === true) {
      setScore(
        (score[score.length - 1].spareBonus =
          +score[score.length - 1].spareBonus + +data.throw1)
      );
    }
    let newScore = [
      ...score,
      {
        throw1: data.throw1,
        throw2: data.throw2,
        throw3: data.throw3,
        spareBonus,
        strikeBonus,
        strike: strike(data),
        spare: spare(data),
      },
    ];
    setScore((score = newScore));

    console.log(score);
  };
  let validate = (e) => {
    const errors = {};
    let julik = "чуєш, жулік, не воруй. там вього 10 кеглів";
    if (e.throw1&& !Number.isInteger(e.throw1)){
      errors.throw1 = "побив кеглю? ну всьо більш сюди не приходь";
    }
    if (e.throw2&& !Number.isInteger(e.throw2)){
      errors.throw2 = "побив кеглю? ну всьо більш сюди не приходь";
    }
    if (e.throw3&& !Number.isInteger(e.throw3)){
      errors.throw3 = "побив кеглю? ну всьо більш сюди не приходь";
    }
    if (e.throw1 && e.throw1 > 10) {
      errors.throw1 = julik;
    }
    if (e.throw2 && e.throw2 > 10) {
      errors.throw1 = julik;
    }
    if (e.throw3 && e.throw3 > 10) {
      errors.throw3 = julik;
    }
    if (e.throw1 && e.throw1 < 0) {
      errors.throw1 = "в тебе що, шарік твій, кеглі назад пороставляв?";
    }
    let sumOfThrows = Number(e.throw1) + Number(e.throw2);
    if (id < 9 && sumOfThrows > 10) {
      errors.throw2 = julik;
    }
    if (score.length === 9 && e.throw1 < 10 && sumOfThrows > 10) {
      errors.throw2 = julik;
    }
    if (
      score.length === 9 &&
      e.throw1 &&
      e.throw1 < 10 &&
      e.throw2 &&
      sumOfThrows < 10 &&
      e.throw3 &&
      e.throw3 > 0
    ) {
      errors.throw3 = "На третє жбурляння не заслужив, пиши нуль";
    }

    return errors;
  };

  let results = score.map(function (item) {
    id++;
    item.throw3 = item.throw3 || null;
    let throwsSum =
      +item.throw1 +
      item.strikeBonus +
      +item.throw2 +
      +item.spareBonus +
      +item.throw3;
    totalArr.push(throwsSum);

    if (score.length === 9) {
      extraFrame = true;
    }
    if (score.length === 10) {
      finish = true;
    }
    return (
      <tr>
        <td>{id}</td>
        <td>{+item.throw1 + +item.strikeBonus}</td>
        <td>{+item.throw2 + +item.spareBonus}</td>
        <td>{item.throw3}</td>
        <td>{throwsSum}</td>
      </tr>
    );
  });

  let totalSum = totalArr.reduce((sum, current) => sum + current);

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {finish ? (
              <h2>Результат</h2>
            ) : (
              <>
                <h2>{id + 1} Жбурляння</h2>
                <FirstPhase />
              </>
            )}
            {extraFrame ? <SecondPhase /> : null}

            {finish ? null : <button type="submit">Submit</button>}
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
