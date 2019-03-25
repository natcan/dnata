---
layout: default-content
title: Publications, Posters and Grants
---
# Publications

{% assign publications = site.publications | where: "publication_type", "publication" %}
{% for publication in publications %}
  <div class="publication__content">
    {{ publication.content | markdownify }} <a href="{{ publication.publication_link}}" target="_blank"><i class="icon-share2"></i></a>
  </div>
{% endfor %}

# Posters

{% assign posters = site.publications | where: "publication_type", "poster" %}
{% for poster in posters %}
  <div class="publication__content">
    {{ poster.content | markdownify }} <a href="{{ poster.publication_link}}" target="_blank"><i class="icon-share2"></i></a>
  </div>
{% endfor %}

# Grants
<div class="publication__content">
  <table>
    <thead>
    </thead>
    <tbody>
      {% assign grants = site.publications | where: "publication_type", "grant" | reverse %}
      {% for grant in grants %}
      <tr class="border__bottom">
        <th>{{ grant.publication_y }}</th>
        <th>
          <div class="grant__details">
            <h2>{{ grant.publication_title }}</h2>
            {{ grant.content | markdownify }}
          </div>
        </th>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>