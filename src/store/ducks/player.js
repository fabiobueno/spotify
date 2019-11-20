import Sound from "react-sound";

export const Types = {
  LOAD: "player/LOAD"
};

const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING
};

export default function PLAYER(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.soung,
        status: Sound.status.PLAYING
      };

    default:
      return state;
  }
}

export const Creators = {
  loadSong: song => ({
    type: Types.LOAD,
    payload: { song }
  })
};
