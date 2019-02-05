<h2>Badges</h2>
<br>
<button class="collapsible" id="ben" data-parent="ben" data-child="ben-child">Badges by Ben</button>
<div id="ben-child" class="innertext" data-parent="ben">
	<p>A badges app that was made by Ben that I stole and modified.</p>
	<p><a href="https://lunartiger.github.io/AltspaceVR/Badge/Badges_by_Ben.html" style="text-decoration:none">https://lunartiger.github.io/AltspaceVR/Badge/Badges_by_Ben.html</a></p>
	<br>
	<p>Source code:</p>
	<div id='rawfile0' style="border: 0;max-width:100%;max-height:95%;height:900px;width:705px;display: inline-block;">
		<pre id="thePre0" style="text-align:left; background:transparent; color: green;max-width:100%;max-height:100%;height:900px;width:705px;border: 4px solid #006900;margin: auto;overflow: scroll;display: block;"></pre>
	</div>
</div>
<script>
	fetch('https://raw.githubusercontent.com/LunarTiger/AltspaceVR/master/Badge/Badges_by_Ben.html')
	.then(body=>body.text())
	.then(body=>{
		document.getElementById('thePre0').innerText = body;
	})
</script>
<button class="collapsible" id="mod" data-parent="mod" data-child="mod-child">Mod Badges</button>
<div id="mod-child" class="innertext" data-parent="mod">
	<p>Adds badges to moderators indicating that they're moderators.</p>
	<p><a href="https://lunartiger.github.io/AltspaceVR/Badge/mod" style="text-decoration:none">https://lunartiger.github.io/AltspaceVR/Badge/mod</a></p>
	<br>
	<p>Source code:</p>
	<div id='rawfile1' style="border: 0;max-width:100%;max-height:95%;height:500px;width:705px;display: inline-block;">
		<pre id="thePre1" style="text-align:left; background:transparent; color: green;max-width:100%;max-height:100%;height:900px;width:705px;border: 4px solid #006900;margin: auto;overflow: scroll;display: block;"></pre>
	</div>
</div>
<script>
	fetch('https://raw.githubusercontent.com/LunarTiger/AltspaceVR/master/Badge/mod/index.html')
	.then(body=>body.text())
	.then(body=>{
		document.getElementById('thePre1').innerText = body;
	})
</script>
<hr style="height:50px; visibility:hidden;" />
