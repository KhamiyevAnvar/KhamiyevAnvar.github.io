<?php
	include("vt_ayar.php");

	$sorgu=$vt->prepare("SELECT * FROM ftest");
	$sorgu->execute();
	$messagelist=$sorgu-> fetchAll(PDO::FETCH_OBJ);
?>
<!DOCTYPE html>
<html>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Admin</title>
  </head>
  <body>
  	<h1>Message list</h1>
  	<table class="table">
	  	<thead>
		    <tr>
		    	<th scope="col">№</th>
		      	<th scope="col">Adi</th>
		      	<th scope="col">Email</th>
		      	<th scope="col">Movzu</th>
		      	<th scope="col">Mesaj</th>
		    </tr>
	  	</thead>
	  	<tbody>
	  		<?php 
	  		foreach ($messagelist as $message){ ?>
	  			<tr>
	  				<th><?= $message->Id ?></th>
			      	<th><?= $message->Name ?></th>
			      	<td><?= $message->Email ?></td>
			      	<td><?= $message->Sub ?></td>
			      	<td><?= $message->Message ?></td>
			    </tr>
	  		<?php } ?>	 
	  </tbody>
	</table>
  </body>
</html>