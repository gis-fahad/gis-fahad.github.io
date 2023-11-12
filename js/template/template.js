// export let URLLogin = `https://us-central1-fahad-402509.cloudfunctions.net/gis5login`
// export let token = 'token';

import {getCookie} from "https://jscroot.github.io/cookie/croot.js";

export let URLGeoJson = "https://us-central1-fahad-402509.cloudfunctions.net/gis-gcf";
export let urlPostGCF = "https://us-central1-fahad-402509.cloudfunctions.net/gispostloc";
export let UrlLogin = "https://us-central1-fahad-402509.cloudfunctions.net/gis5login"
export let UrlRegister = "https://asia-southeast2-gis-project-401902.cloudfunctions.net/RegisterGeo"
export let tableTag="tr";
export let tableRowClass="content is-small";
export let token = "cihuy"
export let cookie = getCookie("Login")
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`