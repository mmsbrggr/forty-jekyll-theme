---
layout: landing
title: Medium Stories
description: My opinions on science topics
image: assets/images/medium.jpg
nav-menu: true
---
{% assign stories = (site.medium  | sort: 'name') | reverse %}

<section id="two" class="spotlights">
    {% for story in stories %}
        <section>
    		<a href="{{ story.link }}" target="_blank" class="image">
    			<img src="{{ story.image }}" alt="" data-position="center center" />
    		</a>
    		<div class="content">
    			<div class="inner">
    				<header class="major">
    					<h3>{{ story.title }}</h3>
    				</header>
    				<p>{{ story.content }}</p>
    				<ul class="actions">
    					<li><a href="{{ story.link }}" target="_blank" class="button">Read more</a></li>
    				</ul>
    			</div>
    		</div>
    	</section>
    {% endfor %}
</section>