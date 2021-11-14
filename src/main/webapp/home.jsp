<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> Home page</title>
</head>
<body>
${SPRING_SECURITY_LAST_EXCEPTION.message}
    <h1>Home Page : )</h1>
    <a href="/logout">logout</a>
</body>
</html>