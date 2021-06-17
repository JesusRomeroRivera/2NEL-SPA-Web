function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl);
  xmlHttp.send();
  return xmlHttp;
}

function httpPost(theUrl, sendObject, type = true) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", theUrl, false);
  if (type) xmlHttp.setRequestHeader("Content-Type", "application/json");
  xmlHttp.send(sendObject);
  return xmlHttp;
}

function httpPut(theUrl, sendObject, type = true) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("PUT", theUrl, false);
  if (type) xmlHttp.setRequestHeader("Content-Type", "application/json");
  xmlHttp.send(sendObject);
  return xmlHttp;
}

function httpDelete(theUrl, sendObject) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("DELETE", theUrl, false);
  //xmlHttp.setRequestHeader("Content-Type", "application/json");
  xmlHttp.send(sendObject);
  return xmlHttp;
}

export { httpGet, httpPost, httpPut, httpDelete };
