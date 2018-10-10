//var playlist = {kanye: "stronger"}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
