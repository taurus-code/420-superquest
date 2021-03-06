import {Result} from './quest';

const Server2ResultMapper = {
  'die': Result.DIE,
  'win': Result.WIN,
  'next': Result.NEXT_LEVEL,
};

const preprocessAnswers = (answers) => answers.map((answer) => {
  const [action, title] = answer.action.split(`.`);
  return {
    action,
    title,
    'result': Server2ResultMapper[answer.result]
  };
});


export const adaptServerData = (data) => {
  for (const level of Object.values(data)) {
    level.answers = preprocessAnswers(level.answers);
  }
  return data;
};
