//Action creators

//select a song
export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
