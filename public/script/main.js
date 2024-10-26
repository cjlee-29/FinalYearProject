// Example function to load products
function loadProducts() {
  const productsRef = firebase.firestore().collection("products");
  productsRef.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      const product = doc.data();
      // Dynamically add product to the page
    });
  });
}
