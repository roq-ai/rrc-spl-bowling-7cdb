import * as yup from 'yup';

export const fantasyGameValidationSchema = yup.object().shape({
  game_name: yup.string().required(),
  player_id: yup.string().nullable(),
});
