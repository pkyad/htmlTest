<?php
		$id='2';
		$db = mysqli_connect("localhost","root","janhvi","candidatesDb"); //keep your db name
		$sql = "SELECT * FROM uploads WHERE id = $id";
		$sth = $db->query($sql);
		$result=mysqli_fetch_array($sth);
		echo '<img src="data:image/jpeg;base64,'.base64_encode( $result['imageData'] ).'"/>';
?>