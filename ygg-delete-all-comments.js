// Run it on https://www6.yggtorrent.lol/profile/[YOUR-PROFILE]?action=show_comments
// scroll script taken from https://stackoverflow.com/a/37578256
var scrollInterval = setInterval(function() { 
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}, 50);
var comments = document.getElementsByClassName("utilisateur");
for (let i = 0; i < comments.length ; i++) {
	fetch('https://www6.yggtorrent.lol/user/remove_comment?id='.concat(comments[i].getAttribute("comment-id")));
}
var stopScroll = function() { clearInterval(scrollInterval); };
stopScroll();

// If you want to use this as a bookmark
javascript:(function(){var scrollInterval=setInterval(function(){document.documentElement.scrollTop=document.documentElement.scrollHeight},50),comments=document.getElementsByClassName("utilisateur");for(let i=0;i<comments.length;i++)fetch("https://www6.yggtorrent.lol/user/remove_comment?id=".concat(comments[i].getAttribute("comment-id")));var stopScroll=function(){clearInterval(scrollInterval)};stopScroll();})();
