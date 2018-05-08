<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
        <!-- <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}"> -->
        <style type="text/css">
            .margin-right-10{
                margin-right: 10px;
            }
        </style>
    </head>

   <body>
      
        <div id="example"></div>

    </body>
    
    <script src="/js/jquery-2.2.4.min.js"></script>
    <script defer src="/js/fontawesome-all.min.js"></script>
    <script src="/js/bootstrap/bootstrap.min.js"></script>

    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

</html>
