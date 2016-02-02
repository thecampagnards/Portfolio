<?php session_start();
header('Content-Type: text/html; charset=utf-8');

function db_connect()
{
	try
	{
		$db = new PDO('mysql:host=localhost;dbname=konstantin_sido_forum', 'konstantin', 's3curit3');
	}
	catch(Exception $e)
	{
		die('Erreur : ' . $e->getMessage());
	}
	return $db;
}

include('defines.php');
include('members.php');
include('disp_body.php');
include('disp_panels.php');

$test = test_inscription();
if($test == '0')
{
	connexion($_POST['i_name'], $_POST['i_mdp']);
	unset($_GET['id']);
	$_GET['p'] = 'inscr_ok';
}
elseif($test != '1')
	$error = $test;

$test = test_connexion();
if($test == '0')
{
	unset($_GET['id']);
	$_GET['p'] = 'co_ok';
}
elseif($test != '1')
	$error = $test;

if(isset($_GET['p']))
{
	if($_GET['p'] == 'dc')
		deconnexion();
}

if(!isset($redir)) { ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="design/design.css" />
        <title>Forum</title>
    </head>

    <body>
        <header><a href="index.php"><img src="design/banniere.png" alt="Bannière"/></a></header>
		<section>
			<div id="panel">
				<?php disp_connexion_p(); ?>
			</div>
			
			<div id="mid">
			<?php if(isset($error)) disp_error($error); else disp_body(); ?>
			</div>
			
			<div id="panel">
				<?php disp_members_p(); ?>
			</div>
		</section>
		<!-- Piwik -->
		<script type="text/javascript">
			var _paq = _paq || [];
			_paq.push(['trackPageView']);
			_paq.push(['enableLinkTracking']);
			(function() {
				var u="//konstantin-sidorenko.fr/analytics/";
				_paq.push(['setTrackerUrl', u+'piwik.php']);
				_paq.push(['setSiteId', 1]);
				var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
				g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
			})();
		</script>
		<noscript><p><img src="//konstantin-sidorenko.fr/analytics/piwik.php?idsite=1" style="border:0;" alt="" /></p></noscript>
		<!-- End Piwik Code -->
    </body>
</html>
<?php } ?>