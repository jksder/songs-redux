import { combineReducers } from "redux";

//reducer to return songlist
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4.05" },
    { title: "Macarena", duration: "2.30" },
    { title: "All Star", duration: "3.15" },
    { title: "I want it that way", duration: "1.30" },
  ];
};

//reducer to set selected song
const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});
