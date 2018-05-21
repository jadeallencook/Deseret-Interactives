<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://www.deseretnews.com/v4/dist/app.css" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="dist/newsroom.min.css" />
    <title>Newsroom Interactives</title>
    <style>
    h1 {
        margin: 25px 0px;
    }
    a {
        background-color: #333;
        color: #fff;
        padding: 5px 15px;
        display: block;
        width: 250px;
        margin: 0px auto 15px auto;
    }
    textarea {
        width: 500px;
        height: 100px;
    }
    </style>
</head>

<body>
    <h1>News Room Interactives</h1>
    <?php 
        $interactives = array('list');
        foreach ($interactives as &$interactive) :
    ?>
<a href="examples/list.html" target="_blank"><?php echo $interactive; ?></a>
<textarea>
<script src="https://www.deseretnews.com/project/newsroom.min.js"></script>
<link rel="stylesheet" href="https://www.deseretnews.com/project/newsroom.min.css" />
<div class="interactive" data-type="list" data-src="link/to/your.json" data-style="1"></div>
</textarea>

<?php endforeach; ?>
</body>

</html>