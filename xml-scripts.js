// XML API Code

$(() => {
  function createQuotes() {
    $(".quote-carousel-section .loader-div").css("display", "flex");
    $.get("https://smileschool-api.hbtn.info/xml/quotes", (response) => {
      let responseDOM = response.documentElement;
      let allQuotes = responseDOM.getElementsByTagName("quote");
      for (let index = 0; index < allQuotes.length; index++) {
        let quote = allQuotes[index];
        let userPicURL = quote.childNodes[0].childNodes[0].data;
        let userName = quote.childNodes[1].childNodes[0].data;
        let userTitle = quote.childNodes[2].childNodes[0].data;
        let userQuote = quote.childNodes[3].childNodes[0].data;
        let quotesAvatarImage = $(
          `<img class="rounded-circle mx-auto" src="${userPicURL}" alt="Carousel slide">`
        );
        let mobileArrowLeft = $(
          '<a class="carousel-control-prev d-sm-none mobile-arrow" href="#quotesCarousel" role="button" data-slide="prev"></a>'
        );
        let mobileArrowRight = $(
          '<a class="carousel-control-next d-sm-none mobile-arrow" href="#quotesCarousel" role="button" data-slide="next"></a>'
        );
        let leftArrowSVG = $(
          '<svg width="30" height="64" viewBox="0 0 30 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.7802 63.1838L0.477539 31.8486L28.7802 0.513489L29.5224 1.18378L1.8253 31.8486L29.5224 62.5135L28.7802 63.1838Z" fill="white" /></svg><span class="sr-only">Previous</span>'
        );
        let rightArrowSVG = $(
          '<svg width="30" height="64" viewBox="0 0 30 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21975 63.1838L29.5225 31.8486L1.21975 0.513489L0.477648 1.18378L28.1747 31.8486L0.477648 62.5135L1.21975 63.1838Z" fill="white" /></svg><span class="sr-only">Next</span>'
        );
        let carouselItemActive = $('<div class="carousel-item active"></div>');
        let carouselItemNonActive = $('<div class="carousel-item"></div>');

        let carouselRow = $(
          '<div class="row align-items-center justify-content-between"></div>'
        );
        let carouselCol = $(
          '<div class="col-sm-4 offset-sm-1 d-flex align-items-center mt-auto"></div>'
        );

        let carouselTextDiv = $('<div class="col-sm-6 mr-auto mt-auto"></div>');
        let carouselTextQuote = $('<p class="font-weight-normal"></p>');
        let carouselTextName = $(
          '<h5 class="font-weight-bold quote-person-name"></h5>'
        );
        let carouselTextTitle = $(
          '<p class="font-italic quote-person-title"></p>'
        );
        $(mobileArrowLeft).append(leftArrowSVG);
        $(mobileArrowRight).append(rightArrowSVG);
        if (quote.id === "1") {
          $(carouselItemActive).append(carouselRow);
          $("#quotesCarousel .carousel-inner").append(carouselItemActive);
        } else {
          $(carouselItemNonActive).append(carouselRow);
          $("#quotesCarousel .carousel-inner").append(carouselItemNonActive);
        }
        $(carouselRow).append(carouselCol, carouselTextDiv);
        $(carouselCol).append(
          mobileArrowLeft,
          quotesAvatarImage,
          mobileArrowRight
        );
        $(carouselTextDiv).append(
          carouselTextQuote,
          carouselTextName,
          carouselTextTitle
        );
        carouselTextQuote.html(userQuote);
        carouselTextName.html(userName);
        carouselTextTitle.html(userTitle);
      }
    }).done(() => {
      $(".quote-carousel-section .loader").remove();
      $(".quote-carousel-section .loader-div").remove();
    });
  }

  function loadTutorials() {
    $("section.popular-tutorials-section .loader-div").css("display", "flex");
    $.get(
      "https://smileschool-api.hbtn.info/xml/popular-tutorials",
      (response) => {
        let responseDOM = response.documentElement;
        let allVideos = responseDOM.childNodes;
        for (let index = 0; index < allVideos.length; index++) {
          let video = allVideos[index];
          let videoTitle = video.childNodes[0].childNodes[0].data;
          let videoSubtitle = video.childNodes[1].childNodes[0].data;
          let videoThumbUrl = video.childNodes[2].childNodes[0].data;
          let videoAuthor = video.childNodes[3].childNodes[0].data;
          let authorPicURL = video.childNodes[4].childNodes[0].data;
          let videoDuration = video.childNodes[5].childNodes[0].data;
          let videoTopic = video.childNodes[6].childNodes[0].data;
          let keywordOne = video.childNodes[7].childNodes[0].childNodes[0].data;
          let keywordTwo = video.childNodes[7].childNodes[1].childNodes[0].data;
          let videoRating = video.attributes[1].nodeValue;
          let carouselItemActive = $(
            '<div class="carousel-item active"></div>'
          );
          let carouselItemNonActive = $('<div class="carousel-item"></div>');
          let layoutDiv = $(
            '<div class="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center justify-content-lg-around"></div>'
          );
          let cardDiv = $('<div class="card"></div>');
          let cardImgTop = $(
            `<div class="card-img-top" style="background-image: url(${videoThumbUrl});" alt="Card image cap"><img src="./images/play.png" alt="Play Button"></div>`
          );
          let cardBody = $('<div class="card-body"></div>');
          let cardTitle = $(`<h5 class="card-title mb-0">${videoTitle}</h5>`);
          let cardText = $(`<p class="card-text">${videoSubtitle}<p>`);
          let cardBottomInfo = $('<div class="card-bottom-info d-flex"><div>');
          let cardBottomAvatarImg = $(
            `<img src="${authorPicURL}" alt="" class="rounded-circle mpt-avatar">`
          );
          let cardBottomAvatarName = $(
            `<p class="mpt-avatar-name">${videoAuthor}</p>`
          );
          let cardBottomFooter = $(
            `<div class="card-bottom-footer d-flex justify-content-between align-items-center"><div class="duration">${videoDuration}</div></div>`
          );
          $(layoutDiv).append(cardDiv);
          if (index === 0) {
            $("#popularTutorialsCarousel .carousel-inner").append(
              carouselItemActive
            );
            $(carouselItemActive).append(layoutDiv);
            $(`#popularTutorialsCarousel`)
              .children(".carousel-inner")
              .append(carouselItemActive);
          } else {
            $("#popularTutorialsCarousel .carousel-inner").append(
              carouselItemNonActive
            );
            $(carouselItemNonActive).append(layoutDiv);
            $(`#popularTutorialsCarousel`)
              .children(".carousel-inner")
              .append(carouselItemNonActive);
          }
          $(cardDiv).append(cardImgTop, cardBody);
          $(cardBody).append(
            cardTitle,
            cardText,
            cardBottomInfo,
            cardBottomFooter
          );
          $(cardBottomInfo).append(cardBottomAvatarImg, cardBottomAvatarName);
          let ratingDiv = $(
            '<div class="rating d-flex justify-content-between"></div>'
          );
          $(cardBottomFooter).prepend(ratingDiv);
          for (let starCount = 0; starCount < 5; starCount++) {
            if (starCount < videoRating) {
              $(ratingDiv).append(
                '<img src="images/star_on.png" alt="" srcset=""></img>'
              );
            } else {
              $(ratingDiv).append(
                '<img src="images/star_off.png" alt="" srcset=""></img>'
              );
            }
          }
        }
      }
    ).done(() => {
      $(`#popularTutorialsCarousel .carousel-item`).each(function () {
        var minPerSlide = 4;
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(":first");
        }
        next.children(":first-child").clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {
          next = next.next();
          if (!next.length) {
            next = $(this).siblings(":first");
          }

          next.children(":first-child").clone().appendTo($(this));
        }
      });
      $("section.popular-tutorials-section .loader").remove();
      $("section.popular-tutorials-section .loader-div").remove();
    });
  }

  function loadVideos() {
    $("section.latest-videos-section .loader-div").css("display", "flex");
    $.get("https://smileschool-api.hbtn.info/xml/latest-videos", (response) => {
      let responseDOM = response.documentElement;
      let allVideos = responseDOM.childNodes;
      for (let index = 0; index < allVideos.length; index++) {
        let video = allVideos[index];
        let videoTitle = video.childNodes[0].childNodes[0].data;
        let videoSubtitle = video.childNodes[1].childNodes[0].data;
        let videoThumbUrl = video.childNodes[2].childNodes[0].data;
        let videoAuthor = video.childNodes[3].childNodes[0].data;
        let authorPicURL = video.childNodes[4].childNodes[0].data;
        let videoDuration = video.childNodes[5].childNodes[0].data;
        let videoTopic = video.childNodes[6].childNodes[0].data;
        let keywordOne = video.childNodes[7].childNodes[0].childNodes[0].data;
        let keywordTwo = video.childNodes[7].childNodes[1].childNodes[0].data;
        let videoRating = video.attributes[1].nodeValue;
        let carouselItemActive = $('<div class="carousel-item active"></div>');
        let carouselItemNonActive = $('<div class="carousel-item"></div>');
        let layoutDiv = $(
          '<div class="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center justify-content-lg-around"></div>'
        );
        let cardDiv = $('<div class="card"></div>');
        let cardImgTop = $(
          `<div class="card-img-top" style="background-image: url(${videoThumbUrl});" alt="Card image cap"><img src="./images/play.png" alt="Play Button"></div>`
        );
        let cardBody = $('<div class="card-body"></div>');
        let cardTitle = $(`<h5 class="card-title mb-0">${videoTitle}</h5>`);
        let cardText = $(`<p class="card-text">${videoSubtitle}<p>`);
        let cardBottomInfo = $('<div class="card-bottom-info d-flex"><div>');
        let cardBottomAvatarImg = $(
          `<img src="${authorPicURL}" alt="" class="rounded-circle mpt-avatar">`
        );
        let cardBottomAvatarName = $(
          `<p class="mpt-avatar-name">${videoAuthor}</p>`
        );
        let cardBottomFooter = $(
          `<div class="card-bottom-footer d-flex justify-content-between align-items-center"><div class="duration">${videoDuration}</div></div>`
        );
        $(layoutDiv).append(cardDiv);
        if (index === 0) {
          $("#latestVideosCarousel .carousel-inner").append(carouselItemActive);
          $(carouselItemActive).append(layoutDiv);
          $(`#latestVideosCarousel`)
            .children(".carousel-inner")
            .append(carouselItemActive);
        } else {
          $("#latestVideosCarousel .carousel-inner").append(
            carouselItemNonActive
          );
          $(carouselItemNonActive).append(layoutDiv);
          $(`#latestVideosCarousel`)
            .children(".carousel-inner")
            .append(carouselItemNonActive);
        }
        $(cardDiv).append(cardImgTop, cardBody);
        $(cardBody).append(
          cardTitle,
          cardText,
          cardBottomInfo,
          cardBottomFooter
        );
        $(cardBottomInfo).append(cardBottomAvatarImg, cardBottomAvatarName);
        let ratingDiv = $(
          '<div class="rating d-flex justify-content-between"></div>'
        );
        $(cardBottomFooter).prepend(ratingDiv);
        for (let starCount = 0; starCount < 5; starCount++) {
          if (starCount < videoRating) {
            $(ratingDiv).append(
              '<img src="images/star_on.png" alt="" srcset=""></img>'
            );
          } else {
            $(ratingDiv).append(
              '<img src="images/star_off.png" alt="" srcset=""></img>'
            );
          }
        }
      }
    }).done(() => {
      $(`#latestVideosCarousel .carousel-item`).each(function () {
        var minPerSlide = 4;
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(":first");
        }
        next.children(":first-child").clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {
          next = next.next();
          if (!next.length) {
            next = $(this).siblings(":first");
          }

          next.children(":first-child").clone().appendTo($(this));
        }
      });
      $("section.latest-videos-section .loader").remove();
      $("section.latest-videos-section .loader-div").remove();
    });
  }

  function loadCourses(searchQuery, searchTopic, searchSort) {
    // console.log(searchQuery, searchTopic, searchSort);
    $("div.results-grid").empty();
    let loader = $(
      '<div class="d-flex align-items-center justify-content-center loader-div"style="height: 400px;"><div class="loader align-items-center"></div></div>'
    );
    $("div.results-grid").append(loader);
    let data = { q: searchQuery, topic: searchTopic, sort: searchSort };
    $.get("https://smileschool-api.hbtn.info/xml/courses", data, (response) => {
      let result = response.documentElement;
      let allCourses = result.childNodes[5].childNodes;
      if (allCourses.length === 1)
        $(".number-results").html(`${allCourses.length} Video`);
      else $(".number-results").html(`${allCourses.length} Videos`);
      for (let index = 0; index < allCourses.length; index++) {
        let video = allCourses[index];
        let videoTitle = video.childNodes[0].childNodes[0].data;
        let videoSubtitle = video.childNodes[1].childNodes[0].data;
        let videoThumbUrl = video.childNodes[2].childNodes[0].data;
        let videoAuthor = video.childNodes[3].childNodes[0].data;
        let authorPicURL = video.childNodes[4].childNodes[0].data;
        let videoDuration = video.childNodes[5].childNodes[0].data;
        let videoTopic = video.childNodes[6].childNodes[0].data;
        let keywordOne = video.childNodes[7].childNodes[0].childNodes[0].data;
        let keywordTwo = video.childNodes[7].childNodes[1].childNodes[0].data;
        let videoRating = video.attributes[1].nodeValue;
        let cardDiv = $('<div class="card col-sm-6"></div>');
        let cardImgTop = $(
          `<div class="card-img-top" style="background-image: url(${videoThumbUrl});" alt="Card image cap"><img src="./images/play.png" alt="Play Button"></div>`
        );
        let cardBody = $('<div class="card-body"></div>');
        let cardTitle = $(`<h5 class="card-title mb-0">${videoTitle}</h5>`);
        let cardText = $(`<p class="card-text">${videoSubtitle}<p>`);
        let cardBottomInfo = $('<div class="card-bottom-info d-flex"><div>');
        let cardBottomAvatarImg = $(
          `<img src="${authorPicURL}" alt="" class="rounded-circle mpt-avatar">`
        );
        let cardBottomAvatarName = $(
          `<p class="mpt-avatar-name">${videoAuthor}</p>`
        );
        let cardBottomFooter = $(
          `<div class="card-bottom-footer d-flex justify-content-between align-items-center"><div class="duration">${videoDuration}</div></div>`
        );
        $("div.results-grid").append(cardDiv);
        $(cardDiv).append(cardImgTop, cardBody);
        $(cardBody).append(
          cardTitle,
          cardText,
          cardBottomInfo,
          cardBottomFooter
        );
        $(cardBottomInfo).append(cardBottomAvatarImg, cardBottomAvatarName);
        let ratingDiv = $(
          '<div class="rating d-flex justify-content-between"></div>'
        );
        $(cardBottomFooter).prepend(ratingDiv);
        for (let starCount = 0; starCount < 5; starCount++) {
          if (starCount < videoRating) {
            $(ratingDiv).append(
              '<img src="images/star_on.png" alt="" srcset=""></img>'
            );
          } else {
            $(ratingDiv).append(
              '<img src="images/star_off.png" alt="" srcset=""></img>'
            );
          }
        }
      }
    }).done(() => {
      $(".results-grid .loader").remove();
      $(".results-grid .loader-div").remove();
    });
  }

  if (window.location.pathname.endsWith("homepage.html")) {
    createQuotes();
    loadTutorials();
    loadVideos();
  } else if (window.location.pathname.endsWith("courses.html")) {
    $("#searchButton").click(() => {
      let searchQuery = $("input#coursesSearch").val();
      let searchTopic = $(".topic-dropdown button").text();
      let searchSort = $(".last-dropdown button").text();
      loadCourses(searchQuery, searchTopic, searchSort);
    });
    $("#searchTopic").click((event) => {
      let searchQuery = $("input#coursesSearch").val();
      let searchTopic = $(event.target).data("title");
      let searchSort = $(".last-dropdown button").text();
      $(".topic-dropdown button").text(searchTopic);
      loadCourses(searchQuery, searchTopic, searchSort);
    });
    $("#sortTopic").click((event) => {
      let searchQuery = $("input#coursesSearch").val();
      let searchTopic = $(".topic-dropdown button").text();
      let searchSort = $(event.target).data("title");
      $(".last-dropdown button").text(searchSort);
      loadCourses(searchQuery, searchTopic, searchSort);
    });
    // Initial load of All Videos by Most Popular
    loadCourses("", "All", "Most Popular");
  } else if (window.location.pathname.endsWith("pricing.html")) {
    createQuotes();
  }
});
