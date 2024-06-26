export function getAllCategories() {
  return `http://localhost:8765/products/categories`;
}

export function getAllProducts() {
  return `http://localhost:8765/products`;
}

export function getAllProductsByCategory(category) {
  return `http://localhost:8765/products/category/${category}`;
}

export function updateProductInCart() {
  return `http://localhost:8765/carts/updateProduct`;
}

export function signup() {
  return `http://localhost:8765/users`;
}

export function sigin() {
  return `http://localhost:8765/auth/login`;
}

export function getCartByUser(userId) {
  return `http://localhost:8765/carts/user/${userId}`;
}

export function getProduct(id) {
  return `http://localhost:8765/products/${id}`;
}

export function addProductToUserCart() {
  return `http://localhost:8765/carts`;
}
