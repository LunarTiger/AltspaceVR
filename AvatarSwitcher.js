var script = document.createElement('script');	
script.src = 'https://cdn.rawgit.com/mrdoob/three.js/r84/build/three.min.js';	
document.head.appendChild(script);	
 var userId = location.pathname.split('/')[2];	
var token = document.head.children['csrf-token'].content;	
 if (userId == '582115151281389721' /*Ben*/ || userId == '613349871495152349' /*Viv*/ || userId == '680081521729601680' /*Fairest*/ || userId == '686509049264472122' /*ToB*/) {	
  document.body.children[4].firstElementChild.innerHTML += '<div class="col-xs-12 col-sm-8 col-md-6"><div class="panel panel-default form-panel" style="padding-left: 0px; padding-right: 0px; margin-top: 0px; margin-bottom: 0px;"><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="mGold">White & Gold</button><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="mTOB">Gold & White</button><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="mBlue">Blue</button><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="fPink">Pink</button><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="fRed">Red & White</button><input type="text" id="username" placeholder="Enter username"><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="setC">Get Colors</button><select id="dropdown"><option value="s-series-m01">Male Robot</option><option value="s-series-f01">Female Robot</option><option value="pod-classic">Guest Bot</option><option value="a-series-m01">a-series-m01</option><option value="x-series-m02">x-series-m02</option></select><br><input type="text" id="prim1" value="0"><input type="text" id="prim2" value="0"><input type="text" id="prim3" value="0"><br>x: <input id="primMultiText" type="text" value="1"><input id="primMulti" type="range" min="1" max="10" value="1"><input type="text" id="high1" value="0"><input type="text" id="high2" value="0"><input type="text" id="high3" value="0"><br>x: <input id="highMultiText" type="text" value="1"><input id="highMulti" type="range" min="1" max="10" value="1"><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="setCustom">Set</button></div></div>';	
   $("#mGold").click(function() {	
   //  var XHR = createRequest();	
   //  var data = generateAvatarData('s-series-m01', [500,500,500], [255,230,35]);	
   // XHR.send(data);	
   //  reset();	
    setText([500,500,500], [255,230,35]);	
  });	
   $("#mTOB").click(function() {	
    setText([255,230,35], [2000,2000,2000]);	
  });	
   $("#mBlue").click(function() {	
    setText([500,900,900], [0,400,1000]);	
  });	
   $("#fPink").click(function() {	
    setText([1800,800,1300], [500,0,162]);	
  });	
   $("#fRed").click(function() {	
    setText([255,0,39], [2000,2000,2000]);	
  });	
} else if (userId == '542562301434134702') {	
  document.body.children[4].firstElementChild.innerHTML += '<div class="col-xs-12 col-sm-8 col-md-6"><div class="panel panel-default form-panel" style="padding-left: 0px; padding-right: 0px; margin-top: 0px; margin-bottom: 0px;"><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="bOddity">Oddity</button><input type="text" id="username" placeholder="Enter username"><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="setC">Get Colors</button><select id="dropdown"><option value="s-series-m01">Male Robot</option><option value="s-series-f01">Female Robot</option><option value="pod-classic">Guest Bot</option><option value="a-series-m01">a-series-m01</option><option value="x-series-m02">x-series-m02</option></select><br><input type="text" id="prim1" value="0"><input type="text" id="prim2" value="0"><input type="text" id="prim3" value="0"><br>x: <input id="primMultiText" type="text" value="1"><input id="primMulti" type="range" min="1" max="10" value="1"><input type="text" id="high1" value="0"><input type="text" id="high2" value="0"><input type="text" id="high3" value="0"><br>x: <input id="highMultiText" type="text" value="1"><input id="highMulti" type="range" min="1" max="10" value="1"><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="setCustom">Set</button></div></div>';	
   $("#bOddity").click(function() {	
    setText([43,59,84], [9000,450,2000]);	
  });	
} else {	
  document.body.children[4].firstElementChild.innerHTML += '<div class="col-xs-12 col-sm-8 col-md-6"><div class="panel panel-default form-panel" style="padding-left: 0px; padding-right: 0px; margin-top: 0px; margin-bottom: 0px;"><input type="text" id="username" placeholder="Enter username"><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="setC">Get Colors</button><select id="dropdown"><option value="s-series-m01">Male Robot</option><option value="s-series-f01">Female Robot</option><option value="pod-classic">Guest Bot</option><option value="a-series-m01">a-series-m01</option><option value="x-series-m02">x-series-m02</option></select><br><input type="text" id="prim1" value="0"><input type="text" id="prim2" value="0"><input type="text" id="prim3" value="0"><br>x: <input id="primMultiText" type="text" value="1"><input id="primMulti" type="range" min="1" max="10" value="1"><input type="text" id="high1" value="0"><input type="text" id="high2" value="0"><input type="text" id="high3" value="0"><br>x: <input id="highMultiText" type="text" value="1"><input id="highMulti" type="range" min="1" max="10" value="1"><button name="button" type="submit" class="pill-button--primary" style="margin:auto" id="setCustom">Set</button></div></div>';	
}	
 $("#setC").click(function() {	
  var dataRequest = (THREE.FileLoader ? new THREE.FileLoader() : new THREE.XHRLoader(/* DEPRECATED: r83 */));	
  dataRequest.setWithCredentials(true);	
  dataRequest.load('https://account.altvr.com/api/v1/users/' + username.value, onLoaded, undefined, undefined);	
   function onLoaded(obj) {	
    var avatar = JSON.parse(obj).users[0].user_avatar.config.avatar;	
     if (avatar['primary-color'][0] == 'black') {	
      prim1.value = '26';	
      prim2.value = '26';	
      prim3.value = '26';	
    } else if (avatar['primary-color'][0] == 'darkgrey') {	
      prim1.value = '77';	
      prim2.value = '77';	
      prim3.value = '77';	
    } else if (avatar['primary-color'][0] == 'grey') {	
      prim1.value = '191';	
      prim2.value = '191';	
      prim3.value = '191';	
    } else if (avatar['primary-color'][0] == 'white') {	
      prim1.value = '255';	
      prim2.value = '255';	
      prim3.value = '255';	
    } else {	
      prim1.value = avatar['primary-color'][0];	
      prim2.value = avatar['primary-color'][1];	
      prim3.value = avatar['primary-color'][2];	
    }	
     high1.value = avatar['highlight-color'][0];	
    high2.value = avatar['highlight-color'][1];	
    high3.value = avatar['highlight-color'][2];	
     updateColors();	
  }	
});	
 $("#setCustom").click(function() {	
  var XHR = createRequest();	
  var data = generateAvatarData(dropdown.value, [Number(prim1.value) * Number(primMultiText.value), Number(prim2.value) * Number(primMultiText.value), Number(prim3.value) * Number(primMultiText.value)], [Number(high1.value) * Number(highMultiText.value), Number(high2.value) * Number(highMultiText.value), Number(high3.value) * Number(highMultiText.value)]);	
  XHR.send(data);	
  reset();	
  updateColors();	
});	
 prim1.oninput = function(){	
  updateColors();	
}	
 prim2.oninput = function(){	
  updateColors();	
}	
 prim3.oninput = function(){	
  updateColors();	
}	
 high1.oninput = function(){	
  updateColors();	
}	
 high2.oninput = function(){	
  updateColors();	
}	
 high3.oninput = function(){	
  updateColors();	
}	
 primMulti.addEventListener('input', function(){	
  primMultiText.value = primMulti.value;	
});	
 highMulti.addEventListener('input', function(){	
  highMultiText.value = highMulti.value;	
});	
 function updateColors() {	
  if (/^\d+$/.test(prim1.value) && /^\d+$/.test(prim2.value) && /^\d+$/.test(prim3.value)) {	
    primMultiText.style.backgroundColor = 'rgb(' + Number(prim1.value) + ',' + Number(prim2.value) + ',' + Number(prim3.value) + ')';	
  }	
  if (/^\d+$/.test(high1.value) && /^\d+$/.test(high2.value) && /^\d+$/.test(high3.value)) {	
    highMultiText.style.backgroundColor = 'rgb(' + Number(high1.value) + ',' + Number(high2.value) + ',' + Number(high3.value) + ')';	
  }	
}	
 function createRequest() {	
  var XHR = new XMLHttpRequest();	
  XHR.open('POST', 'https://account.altvr.com/users/' + userId + '/avatar');	
  XHR.setRequestHeader('X-CSRF-Token', token);	
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');	
  XHR.setRequestHeader('Accept', '*/*;q=0.5, text/javascript, application/javascript, application/ecmascript, application/x-ecmascript');	
  XHR.setRequestHeader('X-Requested-With', 'XMLHttpRequest');	
  return XHR;	
}	
 function generateAvatarData(sid, prim, high) {	
  var data = 'utf8=%E2%9C%93&_method=patch&user_avatar%5Bavatar_sid%5D=' + sid + '&user_avatar%5Bprimary_color%5D=&user_avatar%5Bprimary_red%5D=' + prim[0] + '&user_avatar%5Bprimary_green%5D=' + prim[1] + '&user_avatar%5Bprimary_blue%5D=' + prim[2] + '&user_avatar%5Bhighlight_red%5D=' + high[0] + '&user_avatar%5Bhighlight_green%5D=' + high[1] + '&user_avatar%5Bhighlight_blue%5D=' + high[2] + '&user_avatar%5Brobothead_highlight_red%5D=1000&user_avatar%5Brobothead_highlight_green%5D=0&user_avatar%5Brobothead_highlight_blue%5D=0&user_avatar%5Brubenoid_male_texture_1%5D=1&user_avatar%5Brubenoid_male_texture_2%5D=1&user_avatar%5Brubenoid_male_texture_3%5D=1&user_avatar%5Brubenoid_female_texture_1%5D=1&user_avatar%5Brubenoid_female_texture_2%5D=1&user_avatar%5Brubenoid_female_texture_3%5D=1&user_avatar%5Bhash%5D=';	
  return data;	
}	
 function setText(prim, high) {	
  prim1.value = prim[0];	
  prim2.value = prim[1];	
  prim3.value = prim[2];	
   high1.value = high[0];	
  high2.value = high[1];	
  high3.value = high[2];	
   updateColors();	
}	
 function reset() {	
  var resetAvatar = setInterval(function(){	
    Alt.Util.ResetAvatar(function(){	
      clearInterval(resetAvatar);	
    });	
  }, 250);	
}