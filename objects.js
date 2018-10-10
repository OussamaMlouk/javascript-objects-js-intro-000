var playlist = {kanye: "stronger"}

function updatePlaylist(playlist, key, value) {
  return Object.assign({}, { [key]: value })
}
