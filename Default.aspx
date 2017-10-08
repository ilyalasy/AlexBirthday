<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    
    <title></title>
    <style type="text/css">
        #form1 {
            height: 34px;
        }
    </style>

    <link rel="stylesheet" type="text/css" href="TextBoxStyleSheet.css"/>
</head>
    
<body onkeydown = "return (event.keyCode!=9)"> 
    <form id="form1" runat="server">      
        <div id="mainOutput"> </div>
        <div id="mainInput"> $ <input id="InputText" autocomplete="off"  type="text" onkeypress ="return Enter(event);" onblur="LeaveInput()"/></div> &nbsp;
        <script src ="JavaScript.js"></script>
        
        <div id ="copyRight" style="position:sticky; bottom: 0"> (C) 1973 FNCS corp, All Rights Reserved. </div>
         </form>
    
    </body>

</html>
