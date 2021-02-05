import "./App.css";

//Redux utilities
import { connect } from "react-redux";
import { selectSong } from "./actions";

function App({ songs, selectedSong, selectSong }) {
  let selected = songs[0];

  if (selectedSong) {
    selected = selectedSong;
  }

  //repeat songlisted component
  const rendered_songs = songs.map((item, index) => {
    return (
      <div onClick={() => selectSong(item)} className="songbox" key={index}>
        <h3>{item.title}</h3>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="center-box">
        <div className="left-inner">{rendered_songs}</div>

        <div className="right-inner">
          <label>{`Title: ${selected.title}`}</label>
          <label>{`Duration: ${selected.duration}`}</label>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { songs: state.songs, selectedSong: state.selectedSong };
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
})(App);
