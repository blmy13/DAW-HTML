<%-- 
    Document   : exercici.jsp
    Created on : 25 oct 2025, 0:03:29
    Author     : Alex
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EXERCICI HTML+JAVA</title>
        <style>
        #taula {
            border-collapse: collapse; 
        }
        </style>
    </head>
    <body>
            
    <h1>Taula Escacs</h1>
    
    <table id="taula">
        
        <%
           
            int files = 8;
            int columnes = 8;
            
            String colorFons = "";
            String estilCell = "style='width:50px;height:50px;border:1px solid black; ";
            
            for (int i = 0; i < files; i++) {
                out.println("<tr>");
                
                for (int j = 0; j < columnes; j++) {
                    
                    if ((i + j) % 2 == 0) {
                        colorFons = "white"; 
                    } else {
                        colorFons = "black";
                    }
                    
                    String estilTaula = estilCell + "background-color:" + colorFons + ";'";
                    out.println("<td " + estilTaula + "></td>");
                }
                
                out.println("</tr>");
            }
        %>
        
    </table>
    </body>
</html>
