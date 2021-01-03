<template>
  <div class="row">
    <div class="col-md-8">
      <article class="blog-post">
        <slot name="content"></slot>
      </article>
    </div>
    <div class="col-md-4">
      <div class="p-4 mb-3 bg-light rounded">
        <slot name="about"></slot>
      </div>
      <ol class="list-unstyled mb-0">
        <li><a href="#">March 2014</a></li>
        <li><a href="#">February 2014</a></li>
        <li><a href="#">January 2014</a></li>
        <li><a href="#">December 2013</a></li>
        <li><a href="#">November 2013</a></li>
        <li><a href="#">October 2013</a></li>
        <li><a href="#">September 2013</a></li>
        <li><a href="#">August 2013</a></li>
        <li><a href="#">July 2013</a></li>
        <li><a href="#">June 2013</a></li>
        <li><a href="#">May 2013</a></li>
        <li><a href="#">April 2013</a></li>
      </ol>
    </div>
  </div>
</template>

