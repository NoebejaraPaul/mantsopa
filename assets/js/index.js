// retriving blog post

fetch('json/content.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    if(Array.isArray(data.blogPosts)) {
        data.blogPosts.forEach(function(blogPost) {
        var blogHTML = '<div class="col-md-4 col-sm-6">' +
          '<div class="single-blog">' +
          '<figure>' +
          '<img src="' + blogPost.image + '" alt="">' +
          '</figure>' +
          '<div class="blog-detail">' +
          '<small style="font-size: 14px;">' + blogPost.author + ' | ' + blogPost.date + '</small>' +
          '<h4 style="font-size: 17px;">' + blogPost.title + '</h4>' +
          '<p style="font-size: 15px;">' + blogPost.description + '</p>' +
          '<div class="link">' +
          '<a href="' + blogPost.link + '">Read more </a><i class="fas fa-long-arrow-alt-right"></i>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';
        document.querySelector('.blog-row').innerHTML += blogHTML;
      });
    } else {
      console.log('Data is not an array.');
    }
  })
  .catch(function(error) {
    console.log(error);
  });

// team section

  $(document).ready(function() {
  $.getJSON("json/team.json", function(data) {
    var teamMembers = data.teamMembers;
    var teamHtml = "";
    $.each(teamMembers, function(index, member) {
      teamHtml += '<div class="col-md-3 col-sm-6">';
      teamHtml += '<div class="single-usr">';
      teamHtml += '<img src="' + member.image + '" alt="">';
      teamHtml += '<div class="det-o">';
      teamHtml += '<h4 style="font-size: 17px;">' + member.name + '</h4>';
      teamHtml += '<i style="font-size: 17px;">' + member.jobTitle + '</i>';
      teamHtml += '</div></div></div>';
    });
    $("#team-members").html(teamHtml);
  });
});


