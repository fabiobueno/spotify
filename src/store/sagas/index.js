import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistsType } from "../ducks/playlists";
import { Types as PlaylistDetailsType } from "../ducks/playlistDetails";

import { getPlaylists } from "./playlists";
import { getPlaylistDetails } from "./playlistDetails";

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsType.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailsType.GET_REQUEST, getPlaylistDetails)
  ]);
}
