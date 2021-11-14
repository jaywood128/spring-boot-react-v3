<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> Insert title here</title>
</head>
<body>
    <h1>Signup</h1>
    ${SPRING_SECURITY_LAST_EXCEPTION.message}
    <form action="/signup" method="POST">

        <table>
            <tr>
                <td>Full name: </td>
                <td><input type='text' name='name'></td>
            </tr>
            <tr>
                 <td>Username: </td>
                 <td><input type='text' name='username'></td>
            </tr>
            <tr>
                <td>email: </td>
                <td><input type='text' name='email'></td>
            </tr>
            <tr>
                <td>password: </td>
                <td><input type='password' name='password' /></td>
            </tr>
            <tr>
                <td><input name="submit" type='submit' value="submit" /></td>
            </tr>
        </table>
    </form>
</body>
</html>