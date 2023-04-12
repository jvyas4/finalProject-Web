window.reviewData = [
  {
    name: "John Smith",
    date: "2022-01-15",
    rating: 5,
    reviewText:
      "I had a great experience using this product. It exceeded my expectations in every way!",
  },
  {
    name: "Jane Doe",
    date: "2022-02-01",
    rating: 4,
    reviewText:
      "This is a solid product that does what it promises. I had a few minor issues with it, but overall I'm satisfied.",
  },
  {
    name: "John Dana",
    date: "2022-01-16",
    rating: 4,
    reviewText:
      "I had a great experience using this product. ",
  },
  {
    name: "Martin Cole",
    date: "2022-02-12",
    rating: 4,
    reviewText:
      " I had a few minor issues with it, but overall I'm satisfied.",
  },
  {
    name: "Bob Johnson",
    date: "2022-02-10",
    rating: 3,
    reviewText:
      "I had high hopes for this product, but it didn't quite live up to my expectations. It's still a decent option though.",
  },
  {
    name: "Samantha Lee",
    date: "2022-03-01",
    rating: 5,
    reviewText:
      "I absolutely love this product! It's exceeded my expectations in every way and I couldn't be happier with my purchase.",
  },
];

const reviewsContainer = document.getElementById("reviewContainer");

window.reviewData.forEach((review) => {
  const reviewElement = document.createElement("div");
  reviewElement.innerHTML = `
  <div class="card">
    <h3 class="name">${review.name}</h3>
    <p class="date">${review.date}</p>
    <p class="rating">Rating: ${review.rating}</p>
    <p class="para">${review.reviewText}</p></div>
  `;
  reviewsContainer.appendChild(reviewElement);
});
