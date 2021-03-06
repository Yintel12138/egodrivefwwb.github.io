<!DOCTYPE html>
<html>
<head>
<title>ScrollIt.js</title>
<meta content='initial-scale=1' name='viewport'>
<link href='http://fonts.googleapis.com/css?family=Headland+One|Open+Sans:400italic,400,700' rel='stylesheet' type='text/css'>
<script src='static/js/jquery-1.10.1.min.js'></script>
<script>$(function() { $.scrollIt(); });</script>
<script type='text/javascript'>
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-23674172-1']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>
<link rel="stylesheet" media="all" href="static/css/scroll.css" />
<script src="static/js/scrollIt.min.js"></script>
<!-- %script(src="//platform.twitter.com/widgets.js") -->
<!-- = csrf_meta_tags -->
</head>
<body>
<div class='nav-container'>
<nav>
<ul>
<li>
<a class='active' data-scroll-nav='0'>About</a>
</li>
<li>
<a data-scroll-nav='1'>Usage</a>
</li>
<li>
<a data-scroll-nav='2'>Options</a>
</li>
<li>
<a data-scroll-nav='3'>Credit</a>
</li>
</ul>
</nav>
</div>
<section data-scroll-index='0'>
<div class='content'>
<h1>ScrollIt.js</h1>
<a href="https://twitter.com/share" class="twitter-share-button" data-text="Check out this jQuery plugin - ScrollIt.js" data-via="ChrisPolis" data-url="bytemuse.com/scrollIt.js/">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<iframe src="http://ghbtns.com/github-btn.html?user=cmpolis&repo=scrollIt.js&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
<h2>About</h2>
<p>ScrollIt.js<i>(scroll&#8226;it&#8226;dot&#8226;js)</i> makes it easy to make scrolling pages like this one or add scrolling functionality to existing pages. <a href='http://bytemuse.com/post/easy-scrolling-pages-with-scrollit-dot-js/'>Here's a brief blog post explaining it.</a></p></p>
<h4>This is why it rocks:</h4>
<ul class='why-list'>
<li><b>Easy to implement:</b> One JS call, just put data- attributes on the DOM</li>
<li><b>Lightweight:</b> ~1kb minified</li>
<li><b>Active Class:</b> Your navigation is updated automatically</li>
<li><b>Configurable:</b> Set the animation easing, duration, callbacks and more</li>
<li><b>Keyboard Navigation:</b> Press the up and down keys to move...</li>
</ul>
</div>
</section>
<section data-scroll-index='1'>
<div class='content'>
<h2>Usage</h2>
<p>
1) Include jQuery and scrollIt.js
<script src="static/js/5954658.js"></script>
</p>
<p>
2) Put a <i>data-scroll-index</i> attribute on each section
<script src="static/js/5954675.js"></script>
</p>
<p>
3) Put corresponding <i>data-scroll-nav</i> attributes on each nav element
<script src="static/js/5954686.js"></script>
</p>
<p>
4) For links to sections, put on a <i>data-scroll-goto</i> attribute
<script src="static/js/5954690.js"></script>
</p>
<p>
5) Call <i>scrollIt()</i>
<script src="static/js/5954703.js"></script>
</p>
<p><i>View the source of this page for an example</i></p>
</div>
</section>
<section data-scroll-index='2'>
<div class='content'>
<h2>Options</h2>
<pTo>customize scrollIt.js, simply pass in an options object: <i>(defaults shown)</i></pTo>
<script src="static/js/5954639.js"></script>
</div>
</section>
<section data-scroll-index='3'>
<div class='content'>
<h2>Credit</h2>
<p>ScrollIt.js was created by <a href='http://twitter.com/chrispolis'>@ChrisPolis</a> - <a href='http://www.bytemuse.com'>ByteMuse.com</a>.</p>
<p>Feel free to use, share and fork it. <a href='static/js/scrollIt1.js'>It's on Github.</a></p></p>
<p>Enjoy!</p>
<p class='bottom-link'>
<a data-scroll-goto='0'>Back to top</a>
</p>
</div>
</section>
</body>
</html>
