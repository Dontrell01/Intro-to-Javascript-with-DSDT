<!DOCTYPE html>
<html lang="en">
  <head>
    <title>IntroToJavascriptDSDT:Internal Script</title>
  </head>
  <body>
    <script>
    let challenge = 'Introduction to JavaScript DSDT'; // 1
    console.log(challenge); // 2
    console.log(challenge.length); // 3
    console.log(challenge.toUpperCase()); // 4
    console.log(challenge.toLowerCase()); // 5
    console.log(challenge.substr(0, 12)); // 6
    console.log(challenge.substring(0,13)); // 7
    console.log(challenge.includes('Script')); // 8
    console.log(challenge.split()); // 9
    console.log(challenge.split(' ')); // 10
    console.log(challenge.replace('JavaScript', 'Python')); // 12 
    console.log(challenge.charAt(15)); //13
    console.log(challenge.charCodeAt(14)); //14
    console.log(challenge.indexOf('a')); //15
    console.log(challenge.lastIndexOf('a')); //16
    console.log(challenge.startsWith('Introduction')); // 21
    console.log(challenge.endsWith('DSDT')); //22
    console.log(challenge.match('a')); //23
    console.log(challenge.repeat(12)); //25
    </script>
  </body>
</html>