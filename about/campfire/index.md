<h3>Campfire Master</h3>
<p><a href="https://lunartiger.github.io/AltspaceVR/hoguera" style="text-decoration:none">https://lunartiger.github.io/AltspaceVR/hoguera</a></p>
<div id='rawfile' style="max-width:100%;max-height:95%;height:900px;width:705px;border: 4px solid #006900;margin: auto;">
	<pre id="thePre" style="text-align:left; background:transparent; color: green;max-width:100%;max-height:100%;border: 0;"></pre>
</div>
<script>
	fetch('https://raw.githubusercontent.com/LunarTiger/AltspaceVR/master/hoguera/index.html')
	.then(body=>body.text())
	.then(body=>{
		document.getElementById('thePre').innerText = body;
	})
</script>
