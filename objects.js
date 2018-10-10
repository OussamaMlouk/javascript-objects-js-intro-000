var playlist = {kanye: "stronger"}

function updatePlaylist(playlist, key, value) {
  return Object.assign({}, playlist, { [key]: value })
}
