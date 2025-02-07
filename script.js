$(document).ready(function () {
  let currentSlide = 0;
  const slides = $(".slides img");
  const totalSlides = slides.length;

  // Show the first slide
  $(slides[currentSlide]).show();

  // Next button click
  $(".next").click(function () {
    $(slides[currentSlide]).hide();
    currentSlide = (currentSlide + 1) % totalSlides;
    $(slides[currentSlide]).show();
  });

  // Previous button click
  $(".prev").click(function () {
    $(slides[currentSlide]).hide();
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    $(slides[currentSlide]).show();
  });

  // Auto-slide every 5 seconds
  setInterval(function () {
    $(slides[currentSlide]).hide();
    currentSlide = (currentSlide + 1) % totalSlides;
    $(slides[currentSlide]).show();
  }, 5000);
});