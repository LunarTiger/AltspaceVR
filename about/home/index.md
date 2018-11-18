<h3>Home Master</h3>
<p><a href="https://lunartiger.github.io/AltspaceVR/home" style="text-decoration:none">https://lunartiger.github.io/AltspaceVR/home</a></p>
<br>
<p>Source code:</p>
<div id='rawfile' style="border: 0;max-width:100%;max-height:95%;height:900px;width:705px;display: inline-block;">
	<pre id="thePre" style="text-align:left; background:transparent; color: green;max-width:100%;max-height:100%;height:900px;width:705px;border: 4px solid #006900;margin: auto;overflow: scroll;display: block;"></pre>
</div>
<hr style="height:50px; visibility:hidden;" />
<script>
	fetch('https://raw.githubusercontent.com/LunarTiger/AltspaceVR/master/home/index.html')
	.then(body=>body.text())
	.then(body=>{
		document.getElementById('thePre').innerText = body;
	})
</script>
