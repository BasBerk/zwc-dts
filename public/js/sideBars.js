document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".sponsor-container");
  const sponsors = document.querySelectorAll(".sponsor");
  const totalHeight = Array.from(sponsors).reduce((acc, sponsor) => acc + sponsor.offsetHeight, 0);

  let scrollAmount = 0;
  function scrollSponsors() {
    scrollAmount += 1;
    if (scrollAmount >= totalHeight) {
      scrollAmount = 0;
      container.appendChild(container.firstElementChild); // Move the first element to the end
    }
    container.style.transform = `translateY(-${scrollAmount}px)`;
    requestAnimationFrame(scrollSponsors);
  }

  scrollSponsors();
});