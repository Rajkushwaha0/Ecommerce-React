export function getAllCategories() {
  return `http://localhost:8765/products/categories`;
}

export function getAllProducts() {
  return `https://fakestoreapi.com/products`;
}

export function getAllProductsByCategory(category) {
  return `https://fakestoreapi.com/products/category/${category}`;
}

export function getProduct(id) {
  return `${import.meta.env.VITE_FAKE_STORE_URL}/products/${id}`;
}

export function getCartByUser(userId) {
  return `${import.meta.env.VITE_FAKE_STORE_URL}/carts/user/${userId}`;
}

export function addProductToUserCart() {
  return `${import.meta.env.VITE_FAKE_STORE_URL}/carts`;
}

export function updateProductInCart() {
  return `${import.meta.env.VITE_FAKE_STORE_URL}/carts/updateProduct`;
}

export function signup() {
  return `http://localhost:8765/users`;
}

export function sigin() {
  return `http://localhost:8765/auth/login`;
}
