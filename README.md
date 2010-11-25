FilterTable
====================

MooTools Plugin for filtering table rows.

![Screenshot](http://farm5.static.flickr.com/4108/5206678055_1bcc1d854c_z.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.

        #HTML
        <script type="text/javascript" src="mootools-core.js"></script>
        <script type="text/javascript" src="FilterTable.js"></script>

In your JS.

       #JS
       window.addEvent('domready',function() {
              new FilterTable({filterClass: 'filterable'});
       });

In your HTML.

       #HTML
       <table WIDTH="100%" BORDER="0" CELLSPACING="1" CELLPADDING="2" class="filterable">
          <tr BGCOLOR="">
               <TD ALIGN="MIDDLE"><FONT COLOR=""><B>Project&#160;Name</B></FONT></TD>
               <TD ALIGN="MIDDLE"><FONT COLOR=""><B>Description</B></FONT></TD>
		   <TD ALIGN="MIDDLE"><FONT COLOR=""><B>Files</B></FONT></TD>
		   <TD ALIGN="MIDDLE"><FONT COLOR=""><B>Activity&#160;%</B></FONT></TD>
          </tr>
          <tr BGCOLOR="#FFFFFF"><td><A HREF="http://www.sf.net/projects/fckeditor/">FCKeditor</A></TD><TD>Online text editor (DHTML editor), for ASP, ASP.NET, ColdFusion, PHP, Java and JavaScript brings to the web many of the powerful functionalities of known desktop editors like Word. It's XHTML compliant and works with Firefox, Mozilla, Netscape and IE.</td><td><A HREF="#"><IMG src="#" border="0" alt="released files" width="16" height="16"></A></td><td>99.99%</td></tr><TR BGCOLOR="#EAECEF"> <td><A HREF="http://www.sf.net/projects/tinymce/">TinyMCE</A></TD><td>TinyMCE is a platform independent webbased Javascript HTML WYSIWYG editor control, developed in JavaScript/ECMAScript and it's main features include theme/template support, 
          language support and plugin extentions. Works in Mozilla, Firefox and MSIE</TD><td><A HREF="http://www.sf.net/project/showfiles.php?group_id=103281"><IMG src="#" border="0" alt="released files" width="16" height="16"></A></TD><td>99.35%</TD></TR><TR BGCOLOR="#FFFFFF"> <td><A HREF="http://www.sf.net/projects/arsc/">ARSC Really Simple Chat</A></TD><td>ARSC is a webchat system that uses PHP and MySQL and allows comfortable chatting with every browser on the surface of this planet, using JavaScript, frames HTML streaming for modern browsers down to a one-page reload-yourself version for text browsers.</TD><td><A HREF="http://www.sf.net/project/showfiles.php?group_id=32699"><IMG src="#" border="0" alt="released files" width="16" height="16"></A></TD><td>98.82%</TD></TR>
       </table>

### Notes:

You can view in action:

- [http://thinkphp.github.com/FilterTable](http://thinkphp.github.com/FilterTable)

### Requirements:

- MooTools Core 1.3