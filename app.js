var products = [
    {
        id: 101,
        title: "Sony LED 40 inch",
        variations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 4.5,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
            {
                id: 3,
                user: "Ali",
                rating: 5.0,
                title: "Good Product",
                comments: "ali It is a very good product ....",
                date: "04-02-2021",
                status: true,
            },
        ],
    },
    {
        id: 102,
        title: "Mobile",
        variations: [
            { id: 1, color: "Silver", price: 35000, quantity: 5 },
            { id: 2, color: "red", price: 25000, quantity: 1 },
            { id: 3, color: "black", price: 75000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Suffyain",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Kamran",
                rating: 4.5,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
            {
                id: 3,
                user: "Ayan",
                rating: 5.0,
                title: "bad Product",
                comments: "ali It is a very bad product ....",
                date: "04-02-2021",
                status: true,
            },
        ],
    },
    {
        id: 103,
        title: "Bike",
        variations: [
            { id: 1, color: "black", price: 55000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
        ],
        reviews: [
            {
                id: 1,
                user: "Rashid",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Rayyan",
                rating: 3.0,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
        ],
    },
];

function FindTheProductsTitle() {
    let TitleResult = document.getElementById("FindTheProductsTitle");

    let FIndProductTitle = products.map(p => p.title);
    console.log(FIndProductTitle);

    TitleResult.innerHTML = `<h3>All Products Titles:</h3><p>${FIndProductTitle.join('<br>')}</p>`;

}

function FindTheProductsOneVariation() {
    let ProductVariation = document.getElementById("FindTheProductsOneVariation");

    let FindTheProductVariation = products.find((product) => product.variations);

    let matchingProductVariation = FindTheProductVariation.variations.find(variation => variation.color === "black");

    if (!FindTheProductVariation) {
        ProductVariation.innerHTML = "<p style='color: red;'>No product found with the given color.</p>";
        return;
    }

    ProductVariation.innerHTML = `
        <h2><strong>Product Found</strong></h2>
        <p><strong>ID: ${FindTheProductVariation.id}</strong></p>
        <p><strong>Title: ${FindTheProductVariation.title}</strong></p>
        <p><strong>Color: ${matchingProductVariation.color}</strong></p>
        <p><strong>Price: ${matchingProductVariation.price}</strong></p>
        <p><strong>Quantity: ${matchingProductVariation.quantity}</strong></p>
    `;
}

function CalculateAllProductQuantity() {
    let ProductQuantity = document.getElementById("CalculateAllProductQuantity");

    let CalculateQuantity = products.reduce((total, product) => {
        return total + product.variations.reduce((sum, variation) => sum + variation.quantity, 0)
    }, 0);

    console.log(CalculateQuantity)

    ProductQuantity.innerHTML = `<h3><strong>Total Quantity: ${CalculateQuantity}</strong></h3>`;
}

function FindAvgRatingForEachProduct() {
    let ProductAvgRating = document.getElementById("FindAvgRatingForEachProduct");

    if (products.length === 0) {
        ProductAvgRating.innerHTML = "<p style='color: red;'>No products available.</p>";
        return;
    }

    let FindHighRatingProduct = products.map((product) => {
        let TotalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
        let FindAvgRating = TotalRating / product.reviews.length;

        return {
            title: product.title,
            AvgRating: FindAvgRating
        };
    });

    let HighestProductRating = FindHighRatingProduct.reduce((max, product) =>
        product.AvgRating > max.AvgRating ? product : max
    );

    ProductAvgRating.innerHTML = `<h3 style="color: blue;">Highest Rated Product: ${HighestProductRating.title} (${HighestProductRating.AvgRating.toFixed(1)}⭐)</h3>`;

    console.log(FindHighRatingProduct);
}

function FindHighRatingProduct() {
    let HighestRatingProduct = document.getElementById("FindHighRatingProduct");

    let highRatedReviews = products.flatMap(product =>
        product.reviews.filter(review => review.rating === 5.0)
    );

    if (highRatedReviews.length === 0) {
        HighestRatingProduct.innerHTML = "<p style='color: red;'>No high-rated products found.</p>";
        return;
    }

    let reviewsHTML = highRatedReviews.map(review => `
        <p><strong>User:</strong> ${review.user}</p>
        <p><strong>Title:</strong> ${review.title}</p>
        <p><strong>Rating:</strong> ${review.rating} ⭐</p>
        <p><strong>Comments:</strong> ${review.comments}</p>
        <hr>
    `).join("");

    HighestRatingProduct.innerHTML = `<h2 style="color: red;">High Rated Reviews:</h2>${reviewsHTML}`;
}

function FindFormateProductVariation() {
    let FormateProduct = document.getElementById("FindFormateProductVariation");

    let FindProduct = products.find(p => p.variations)

    let FindVariation = FindProduct.variations.find(v => v.color)

    console.log(FindVariation)



    FormateProduct.innerHTML = `
    <h2><strong>Product Found</strong></h2>
    <p><strong>ID: ${FindProduct.id}</strong></p>
    <p><strong>Title: ${FindProduct.title}</strong></p>
    <p><strong>Color: ${FindVariation.color}</strong></p>
    <p><strong>Price: ${FindVariation.price}</strong></p>
    <p><strong>Quantity: ${FindVariation.quantity}</strong></p>
    `;

    console.log(FindProduct)
}

function CalculateTheTotalRevenueOfProduct() {
    let FindTotalStock = document.getElementById("FindTheTotalStockProduct");

    let FindProductStock = products.reduce((total, product) => {
        return total + product.variations.reduce((sum, price) => sum + price.price * price.quantity , 0)
    }, 0);

    console.log(FindProductStock)

    FindTotalStock.innerHTML = `<h3><strong>Total Stock: ${FindProductStock}</strong></h3>`;
}


